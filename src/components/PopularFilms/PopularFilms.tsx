import { Table, Image, Space, PageHeader } from 'antd';
import type { TablePaginationConfig } from 'antd/es/table';

import { useState } from 'react';
import { useQueryClient } from 'react-query';
import { NavLink } from 'react-router-dom';
import { usePopularMovies } from '../../hooks/usePopularMovies';
import { IPopularMoviesItem } from '../../types';

export const PopularFilms: React.FC = () => {
    const [tableParams, setTableParams] = useState<TablePaginationConfig>({
        current:  1,
        pageSize: 20,
        total:    2000,
    });

    const client = useQueryClient();
    const handleTable = (pagination: TablePaginationConfig) => {
        setTableParams(pagination);
        client.removeQueries(['popular-movies']);
    };

    const movies = usePopularMovies(tableParams.current  as number)?.data;
    const dataSource = movies?.map((movie: IPopularMoviesItem) => {
        return {
            key:          movie.id,
            overview:     movie.overview,
            poster:       movie.poster_path,
            popularity:   movie.popularity,
            title:        movie.title,
            vote_count:   movie.vote_count,
            vote_average: movie.vote_average,

        };
    });

    const columns = [
        {
            title:     'Постер',
            dataIndex: 'poster',
            key:       'poster',
            render:    (poster: string) =>{
                return <Image
                    key = 'key' src = { poster }
                    width = { 200 } />;
            },
        },
        {
            title:     'Название',
            dataIndex: 'title',
            key:       'title',
            width:     150,
            align:     'center',
        },

        {
            title:     'Популярность',
            dataIndex: 'popularity',
            key:       'popularity',
            width:     150,
            align:     'center',
        },
        {
            title:     'Количество голосов',
            dataIndex: 'vote_count',
            key:       'vote_count',
            width:     150,
            align:     'center',
        },
        {
            title:     'Средняя оценка',
            dataIndex: 'vote_average',
            key:       'vote_average',
            width:     150,
            align:     'center',
        },
        {
            title:     'Краткое описание',
            dataIndex: 'overview',
            key:       'overview',
            width:     500,
        },
        {
            title:     'Детали',
            key:       'key',
            dataIndex: 'key',
            align:     'center',
            width:     150,
            render:    (key: number) =>{
                return <Space
                    key = 'key'>
                    <NavLink to = { `/films/${key}` }>Подробнее..</NavLink>
                </Space>;
            },
        },
    ];

    return (
        <main>
            <Table
                bordered
                onChange = { handleTable }
                pagination = { tableParams }
                dataSource = { dataSource }
                //@ts-ignore
                columns = { columns }
                title = { () => <PageHeader  title = 'Рекомендуемые фильмы' /> } />;
        </main>
    );
};

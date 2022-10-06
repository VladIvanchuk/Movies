// Core
import { NavLink } from 'react-router-dom';
import { Image, PageHeader, Rate, Space, Table } from 'antd';

// Hooks
import { useRecommendedFilms } from '../../hooks';

// Types
import { IRecommendedFilmsItem } from '../../types';

export const RecommendedFilms = (props: { filmId: string }) => {
    const { filmId } = props;

    const films = useRecommendedFilms(filmId)?.data;


    const dataSource = films?.map((movie:IRecommendedFilmsItem) => {
        return {
            key:        movie.id,
            overview:   movie.overview,
            poster:     movie.poster_path,
            popularity: movie.popularity,
            title:      movie.title,
            release:    movie.release_date,
        };
    });

    const columns = [
        {
            title:     'Постер',
            key:       'key',
            dataIndex: 'poster',
            align:     'center',
            render:    (poster:string) => {
                return (
                    <Image
                        key = 'key' src = { poster }
                        width = { 200 } />
                );
            },
        },
        {
            title:     'Название',
            dataIndex: 'title',
            key:       'key',
            width:     150,
            align:     'center',
        },
        {
            title:     'Популярность',
            key:       'popularity',
            dataIndex: 'popularity',
            width:     150,
            align:     'center',
            render:    (popularity:number) => {
                return (
                    <Rate
                        disabled
                        allowHalf
                        defaultValue = { popularity / 1000 } />
                );
            },
        },
        {
            title:     'Дата выхода',
            dataIndex: 'release',
            key:       'key',
            width:     150,
            align:     'center',
        },

        {
            title:     'Краткое описание',
            dataIndex: 'overview',
            key:       'key',
            width:     600,
        },
        {
            title:     'Детали',
            key:       'key',
            dataIndex: 'key',
            align:     'center',
            width:     150,
            render:    (key:string) => {
                return (
                    <Space
                        key = 'key'>
                        <NavLink to = { `/films/${key}` }>Подробнее..</NavLink>
                    </Space>
                );
            },
        },
    ];

    return (
        <Table
            bordered
            //@ts-ignore
            columns = { columns }
            title = { () => <PageHeader  title = 'Рекомендуемые фильмы' /> }
            dataSource = { dataSource }>

        </Table>
    );
};

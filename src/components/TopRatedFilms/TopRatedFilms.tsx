// Core
import { useState } from 'react';
import { useQueryClient } from 'react-query';
import { NavLink } from 'react-router-dom';
import { Image, Space, Table } from 'antd';

// Hooks
import { useTopRatedFilms } from '../../hooks';

// Types
import type { TablePaginationConfig } from 'antd/es/table';
import { ITopRatedFilmItem } from '../../types';

export const TopRatedFilms = () => {
    const [tableParams, setTableParams] = useState<TablePaginationConfig>({
        current:  1,
        pageSize: 20,
        total:    2000,
    });
    const films = useTopRatedFilms(tableParams.current as number)?.data;

    const client = useQueryClient();
    const handleTable = (pagination:TablePaginationConfig) => {
        setTableParams(pagination);
        client.removeQueries(['top-rated']);
    };

    const dataSource = films?.map((film:ITopRatedFilmItem) => {
        return {
            key:          film.id,
            poster:       film.poster_path,
            title:        film.title,
            release:      film.release_date,
            votesCount:   film.vote_count,
            votesAverage: film.vote_average,
            genres:       film.genres.join(' '),
            overview:     film.overview,
        };
    });

    const columns = [
        {
            title:     'Poster',
            key:       'key',
            dataIndex: 'poster',
            render:    (poster:string) => {
                return (
                    <Image
                        key = 'key' src = { poster }
                        width = { 200 } />
                );
            },
        },
        {
            title:     'Title',
            dataIndex: 'title',
            key:       'key',
            width:     200,
        },
        {
            title:     'Release Date',
            dataIndex: 'release',
            key:       'key',
            width:     200,
        },
        {
            title:     'Votes Count',
            dataIndex: 'votesCount',
            key:       'key',
            width:     200,
        },
        {
            title:     'Votes Average',
            dataIndex: 'votesAverage',
            key:       'key',
            width:     200,
        },
        {
            title:     'Genres',
            dataIndex: 'genres',
            key:       'key',
            width:     200,
        },
        {
            title:     'Overview',
            dataIndex: 'overview',
            key:       'key',
            width:     500,
        },
        {
            title:     'Details',
            key:       'key',
            dataIndex: 'key',
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
            onChange = { handleTable }
            pagination = { tableParams }
            columns = { columns }
            dataSource = { dataSource }>
        </Table>
    );
};

import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { NavLink } from 'react-router-dom';
import { useGetLatest } from '../../hooks/useGetLatest';
import { ILatestItem } from '../../types';
import { TableHeader } from './TableHeader';
import { ImageForTable } from './ImageForTable';

const columns: ColumnsType<ILatestItem> = [
    {
        title:     'Постер',
        dataIndex: 'poster_path',
        key:       'poster_path',
        width:     '15%',
    },
    {
        title:     'Название',
        dataIndex: 'title',
        key:       'title',
        width:     '10%',
    },
    {
        title:     'Дата выхода',
        dataIndex: 'release_date',
        key:       'release_date',
        width:     '10%',
    },
    {
        title:     'Доходность',
        key:       'revenue',
        dataIndex: 'revenue',
        width:     '10%',
    },
    {
        title:     'Статус',
        key:       'status',
        dataIndex: 'status',
        width:     '10%',
    },
    {
        title:     'Популярность',
        key:       'popularity',
        dataIndex: 'popularity',
        width:     '10%',
    },
    {
        title:     'Краткое описание',
        key:       'overview',
        dataIndex: 'overview',
        width:     '10%',
    },
    {
        title:     'Детали',
        key:       'id',
        dataIndex: 'id',
        width:     '10%',
        render:    (key: 'id') => <NavLink to = { `/films/${key}` }>
            Подробнее...</NavLink>,
    },
];

export const TableLatest: React.FC = () => {
    const { data } = useGetLatest();

    const dataItems = data.map((item) => {
        return {
            key:         item.id,
            id:          item.id,
            title:       item.title,
            poster_path: item.poster_path
                ? <ImageForTable src = { item.poster_path as string } />
                : 'Отсутствует',
            release_date: item.release_date,
            revenue:      item.revenue,
            status:       item.status,
            popularity:   item.popularity,
            overview:     item.overview,
        };
    });

    const dataTable: ILatestItem[] = dataItems;

    return (
        <>
            <TableHeader />
            <Table
                bordered
                columns = { columns }
                dataSource = { dataTable } />
        </>
    );
};

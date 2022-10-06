import { Descriptions } from 'antd';
import React from 'react';
type Props = {
    release_date: string;
    status: string;
    overview: string;
    genres: string[];
    vote_count: number;
    vote_average: number;
};
export const DescriptionsWrapper: React.FC<Props> = (props: Props) => {
    const {
        status,
        release_date,
        vote_count,
        vote_average,
        overview,
        genres,
    } = props;

    return (
        <Descriptions column = { 2 } bordered>
            <Descriptions.Item label = 'Статус'>{ status }</Descriptions.Item>
            <Descriptions.Item label = 'Дата выхода'>{ release_date }</Descriptions.Item>
            <Descriptions.Item label = 'Количество голосов'>{ vote_count }</Descriptions.Item>
            <Descriptions.Item label = 'Средняя оценка'>{ vote_average }</Descriptions.Item>
            <Descriptions.Item label = 'Краткое описание' span = { 2 }>{ overview }</Descriptions.Item>
            <Descriptions.Item label = 'Жанры' span = { 2 }>{ genres }</Descriptions.Item>
        </Descriptions>
    );
};

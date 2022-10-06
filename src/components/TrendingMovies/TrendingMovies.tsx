// Core
import { useState } from 'react';
import { Card, Tabs, Typography } from 'antd';

// Hooks
import { useTrendingMovies } from '../../hooks';
import { ITrendingMovies } from '../../types';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

export const TrendingMovies = () => {
    const navigate = useNavigate();
    const [period, setPeriod] = useState('day');

    const { Meta } = Card;
    const { Title } = Typography;

    const films = useTrendingMovies(period)?.data;

    const client = useQueryClient();

    const onTableChange = (key:string) => {
        setPeriod(key);
        client.removeQueries(['trending-movies']);
    };

    // const itemsStyles = {
    //     display:        'flex',
    //     flexWrap:       'wrap',
    //     alignItems:     'center',
    //     justifyContent: 'flex-start',
    // };


    const cardItemJsx = films?.map((film:ITrendingMovies) => {
        return (
            <Card
                hoverable
                style = { { width:  '240px',
                    margin: '10px' } }
                title = { film.title }
                key = { film.id }
                // @ts-ignore
                onClick = { () => navigate(`/films/${film.id}`) }
                cover = { <img alt = 'example' src = { film.poster_path } /> }>
                <Meta title = { film.overview } description = { film.release_year } />
            </Card>
        );
    });

    // const items = [
    //     { label: 'Day', key: 'day', style: itemsStyles, children: cardItemJsx || 'tab1' },
    //     { label: 'Week', key: 'week', style: itemsStyles, children: cardItemJsx || 'tab2' },
    // ];


    return (
        <>
            <Title>Trending Movies</Title>
            { /* { tabItems && tabItems.length > 0 && (
                <>
                tabs
                    <Tabs
                        centered
                        defaultActiveKey = 'day'
                        onChange = { onTableChange }
                        // @ts-ignore
                        items = { tabItems } >
                    </Tabs>
                </>
            ) } */ }
            <Tabs
                centered defaultActiveKey = 'day'
                onChange = { onTableChange }>
                <Tabs.TabPane tab = 'Day' key = 'day'>
                    <div style = { { display:        'flex',
                        flexWrap:       'wrap',
                        alignItems:     'center',
                        justifyContent: 'flex-start' } }>
                        { cardItemJsx }
                    </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab = 'Week' key = 'week'>
                    <div style = { { display:        'flex',
                        flexWrap:       'wrap',
                        alignItems:     'center',
                        justifyContent: 'flex-start' } }>
                        { cardItemJsx }
                    </div>
                </Tabs.TabPane>
            </Tabs>
        </>
    );
};

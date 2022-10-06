// Core

import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { LayoutWrapper, Navigation, TrendingMovies } from '../components';

export const TrendingMoviesPage = () => {
    return (
        <LayoutWrapper>
            <Navigation />
            <Layout className = 'layout'>
                <Content className = 'ant-layout-content' style = { { padding: '0 50px' } }>
                    <TrendingMovies />
                </Content>
            </Layout>
        </LayoutWrapper>
    );
};

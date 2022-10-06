// Core

import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { TopRatedFilms, LayoutWrapper, Navigation } from '../components';

export const TopRatedFilmsPage = () => {
    return (
        <LayoutWrapper>
            <Navigation />
            <Layout className = 'layout'>
                <Content className = 'ant-layout-content' style = { { padding: '0 50px' } }>
                    <TopRatedFilms />
                </Content>
            </Layout>
        </LayoutWrapper>
    );
};

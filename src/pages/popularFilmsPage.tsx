import { Layout } from 'antd';
import { LayoutWrapper, Navigation } from '../components';
import { PopularFilms } from '../components/PopularFilms/PopularFilms';

export const PopularFilmsPage: React.FC = () => {
    return (
        <LayoutWrapper>
            <Navigation />
            <Layout className = 'layout'>
                <PopularFilms />
            </Layout>
        </LayoutWrapper>

    );
};

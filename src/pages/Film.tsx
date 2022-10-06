import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { StatisticWrapper, DescriptionsWrapper, Navigation, CommentsWrapper, SimilarMovies, LayoutWrapper } from '../components';
import { NavLink, useParams } from 'react-router-dom';
import { useGetMovieDetails } from '../hooks';
import { RecommendedFilms } from '../components/RecommendedFilms';

export const Film = () => {
    const { filmId } = useParams();
    const { movieDetails } = useGetMovieDetails(filmId as string);

    return (
        <LayoutWrapper>
            <Navigation />
            <Layout className = 'layout'>
                <Content className = 'ant-layout-content' style = { { padding: '0 50px' } }>
                    <h1 className = 'ant-typography'>{ movieDetails?.title }</h1>
                    <div className = 'ant-row ant-row-start ant-row-middle' style = { { rowGap: '0px' } }>
                        <div className = 'ant-col ant-col-12'>
                            <div className = 'ant-image' style = { { width: '250px' } }>
                                <img
                                    alt = { movieDetails?.title }
                                    className = 'ant-image-img'
                                    src = { movieDetails?.poster_path } />
                                <NavLink to = { `/films/${filmId}/images` } >Gallery</NavLink>
                            </div>
                        </div>
                    </div>
                    <DescriptionsWrapper { ...movieDetails } />
                    <StatisticWrapper { ...movieDetails } />
                    <CommentsWrapper filmId = { filmId as string } />
                    <RecommendedFilms filmId = { filmId as string } />
                    <SimilarMovies filmId = { filmId as string } />
                </Content>
            </Layout>
        </LayoutWrapper>
    );
};

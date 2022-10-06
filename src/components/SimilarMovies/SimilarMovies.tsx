// Core
import { Link } from 'react-router-dom';
import { Image, Card, List } from 'antd';

// Hooks
import { useSimilarMovies } from '../../hooks';

// Types
import { ISimilarMovie } from '../../types';

export const SimilarMovies = (props: { filmId: string }) => {
    const { filmId } = props;

    const movies = useSimilarMovies(filmId)?.data;

    const data = movies?.map((movie:ISimilarMovie) => {
        return {
            id:          movie.id,
            overview:    movie.overview,
            poster_path: movie.poster_path,
            title:       movie.title,
        };
    });

    return (
        <>
            <h2 className = 'ant-typography'>Похожие фильмы</h2>
            <div className = 'site-card-border-less-wrapper'>
                <List
                    grid = { {
                        gutter: 20,
                        column: 5,
                    } }
                    dataSource = { data }
                    renderItem = { (item: ISimilarMovie) => (
                        <Link to = { `/films/${item.id}` }>
                            <List.Item>
                                <Card
                                    title = { item.title }
                                    bordered = { false }
                                    hoverable = { true }
                                    cover = { <Image
                                        key = 'key' src = { item.poster_path }
                                        preview = { false }
                                        width = { '100%' } /> }>
                                    <p>{ item.overview }</p>
                                </Card>
                            </List.Item>
                        </Link>
                    ) } />
            </div>
        </>
    );
};

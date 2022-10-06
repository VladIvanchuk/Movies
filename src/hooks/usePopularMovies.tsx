import { useQuery } from 'react-query';
import { api } from '../api';

export const usePopularMovies = (page: number) => {
    const query = useQuery('popular-movies', () => api.getPopularMovies(page));
    const { data } = query;

    return {
        data: data?.data?.data,
    };
};

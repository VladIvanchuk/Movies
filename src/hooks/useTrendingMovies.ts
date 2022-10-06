import { useQuery } from 'react-query';
import { api } from '../api';

export const useTrendingMovies = (time:string) => {
    if (!time) {
        return null;
    }

    const { data, isFetched } = useQuery('trending-movies', () => api.getTrendingMovies(time));


    return {
        data: data?.data?.data,
        isFetched,
    };
};

import { useQuery } from 'react-query';
import { api } from '../api';

export const useSimilarMovies = (id :string) => {
    const query = useQuery('similar-movies', () => api.getSimilarMovies(id));
    const { data } = query;

    return {
        // @ts-ignore
        data: data?.data?.data,
    };
};

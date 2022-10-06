import { useQuery } from 'react-query';
import { api } from '../api';

export const useRecommendedFilms = (id :string) => {
    const query = useQuery('popular-movies', () => api.getRecommendationsMovies(id));
    const { data } = query;

    return {
        data: data?.data?.data,
    };
};

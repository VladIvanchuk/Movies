import { useQuery } from 'react-query';
import { api } from '../api';

export const useGetMovieDetails = (id:string) => {
    const query = useQuery(['movieId', id], () => api.getMovie(id));
    const { data, isFetched, isSuccess } = query;

    return {
        movieDetails: data?.data?.data,
        isFetched,
        isSuccess,
    };
};

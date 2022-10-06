import { useQuery } from 'react-query';
import { api } from '../api';

export const useGetComments = (id:string) => {
    const query = useQuery(['movie-comments', id], () => api.getReviewsToMovie(id));
    const { data, isFetched, isSuccess } = query;

    return {
        comments: data?.data?.data || [],
        isFetched,
        isSuccess,
    };
};

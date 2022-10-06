import { useQuery } from 'react-query';
import { api } from '../api';

export const useTopRatedFilms = (page:number) => {
    if (!page) {
        return null;
    }

    const { data, isFetched } = useQuery('top-rated', () => api.getTopRated(page));


    return {
        data: data?.data?.data,
        isFetched,
    };
};

import { useQuery } from 'react-query';
import { api } from '../api';

export const useGetGallery = (id:string) => {
    const query = useQuery(['movie-gallery', id], () => api.getMovieImages(id));
    const { data, isFetched, isSuccess } = query;

    return {
        galleryImages: data?.data,
        isFetched,
        isSuccess,
    };
};

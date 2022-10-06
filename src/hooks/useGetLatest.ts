import { useQuery } from 'react-query';
import { api } from '../api';
import { ILatest } from '../types';

export const useGetLatest = () => {
    const query = useQuery<ILatest>('latest', () => api.getLatest(1));
    const { data } = query;

    return {
        data: data && Array.isArray(data.data) ? data.data : [],
    };
};

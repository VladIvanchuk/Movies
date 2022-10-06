import { IPopularMovies } from './../types/topPopularMovies';
// Core
import axios from 'axios';

import { IRecommendedFilms, ISimilarMovie, ITopRatedFilms, ILatest } from '../types';

// Configs
import { root } from './config';

export const api = Object.freeze({
    getMovie: (filmId: string) => {
        return axios.get(`${root}/movie-details/${filmId}`);
    },
    getSimilarMovies: (filmId: string):Promise<ISimilarMovie> => {
        return axios.get(`${root}/${filmId}/similar`);
    },
    getRecommendationsMovies: (filmId: string):Promise<IRecommendedFilms> => {
        return axios.get(`${root}/${filmId}/recommendations`);
    },
    getReviewsToMovie: (filmId: string) => {
        return axios.get(`${root}/${filmId}/reviews`);
    },
    getPopularMovies: (page: number):Promise<IPopularMovies> => {
        return axios.get(`${root}/popular-movies?page=${page}`);
    },
    getTrendingMovies: (time: string) => {
        return axios.get(`${root}/trending/movie/${time}`);
    },
    getTopRated: (page: number):Promise<ITopRatedFilms> => {
        return axios.get(`${root}/top-rated?page=${page}`);
    },
    getMovieImages: (movieId: string) => {
        return axios.get(`${root}/${movieId}/images`);
    },
    getLatest: async (page: number): Promise<ILatest> => {
        const { data } = await axios.get<ILatest>(`${root}/latest-movie?page=${page}`);

        return data;
    },
});

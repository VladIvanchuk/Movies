export interface IPopularMovies {
    data: {
        id: number
        overview: string
        popularity: number
        poster_path: string
        title: string
        vote_average: number
        vote_count: number
        data?: []
    }

}

export interface IPopularMoviesItem {
    id: number
    overview: string
    popularity: number
    poster_path: string
    title: string
    vote_average: number
    vote_count: number
}

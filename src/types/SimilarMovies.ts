export interface ISimilarMovies {
    data: {
        id: number,
        title: string
        overview: string
        poster_path: string
        release_date: string

    }
}

export interface ISimilarMovie {
    id: number,
    title: string
    overview: string
    poster_path: string
    release_date: string
    data?: []
}


export interface ITopRatedFilms {
    data: {
        genres: [string]
        id: number
        overview: string
        poster_path: string
        release_date: string
        title: string
        vote_average: number
        vote_count: number
        page: string
        data?: []
    }

}

export interface ITopRatedFilmItem {
    genres: [string]
    id: number
    overview: string
    poster_path: string
    release_date: string
    title: string
    vote_average: number
    vote_count: number
    page: string
    data?: []

}

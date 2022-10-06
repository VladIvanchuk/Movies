export interface IRecommendedFilms {
    data: {
        id: number
        overview: string
        popularity: number
        poster_path: string
        title: string
        release: string
        data?: []
    }

}

export interface IRecommendedFilmsItem {
    id: number
    overview: string
    popularity: number
    poster_path: string
    title: string
    release_date: string
}

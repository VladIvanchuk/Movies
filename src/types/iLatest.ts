export interface ILatestItem {
    'id': number;
    'title': string;
    'poster_path': JSX.Element | string;
    'release_date': string;
    'revenue': number;
    'status': string;
    'popularity': number;
    'overview': string;
}

export interface ILatest {
    data: [
        ILatestItem,
    ]
}


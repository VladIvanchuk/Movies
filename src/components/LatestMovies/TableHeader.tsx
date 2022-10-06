import { PageHeader } from 'antd';

export const TableHeader: React.FC = () => {
    return (
        <PageHeader
            style = { {
                border: '1px solid rgb(235, 237, 240)',
            } }
            title = 'Последние фильмы'
            subTitle = 'Фильмы, добавленные в каталог' />
    );
};

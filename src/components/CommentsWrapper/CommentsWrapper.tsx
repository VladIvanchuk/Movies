import { Comment } from 'antd';
import { useGetComments } from '../../hooks';
import QqOutlined from '@ant-design/icons/lib/icons/QqOutlined';
import { IFilmComment } from '../../types/FilmComment';

type Props = {
    filmId: string
};


export const CommentsWrapper: React.FC<Props> = (props: Props) => {
    const { filmId } = props;
    const { comments, isFetched } = useGetComments(filmId);
    const commentsJSX = comments.map((comment:IFilmComment) => {
        return (
            <Comment
                key = { comment.id }
                author = { comment.author }
                avatar = { <QqOutlined /> }
                content = {
                    <p>
                        { comment.content }
                    </p>
                } />
        );
    });

    return (
        <>
            <h2>Отзывы</h2>
            { isFetched && commentsJSX }
        </>);
};

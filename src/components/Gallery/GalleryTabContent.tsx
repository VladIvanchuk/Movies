import { Card, List, Image } from 'antd';
import { useState } from 'react';
import { useGetGallery } from '../../hooks';
import { IImage } from '../../types';
import { GRID_SETTINGS } from './constants';

const { Meta } = Card;

type Props = {
    tabId: string,
    filmId: string,
};

type PreviewImage = {
    path: string,
    id: string,
    index: number,
};

export const GalleryTabContent: React.FC<Props> = (props: Props) => {
    const [visible, setVisible] = useState(false);
    const [viewImage, setViewImage] = useState(0);

    const { tabId, filmId } = props;
    const { galleryImages, isFetched } = useGetGallery(filmId as string);

    const showImages = isFetched ? galleryImages[ tabId ] : [];
    const previewImages = showImages.map((image:IImage, index:number) => {
        return { path: image.file_path, id: image.id, index };
    });

    const listSettings = GRID_SETTINGS.find((settings) => settings.id === tabId);

    const handleClick = (event:React.MouseEvent) => {
        const id = event.currentTarget.id;
        const imageIndex = previewImages.findIndex((image:PreviewImage) => image.id === id);
        setViewImage(imageIndex);
        setVisible(true);
    };

    return (
        <>
            <List
                loading = { !isFetched }
                grid = { listSettings?.grid }
                dataSource = { showImages }
                renderItem = { (image: IImage) => (
                    <List.Item>
                        <Card
                            key = { image.id }
                            hoverable
                            style = { { width: listSettings?.imageWidth } }
                            cover = {
                                <Image
                                    id = { image.id }
                                    preview = { { visible: false } }
                                    onClick = { handleClick }
                                    alt = { tabId }
                                    src = { image.file_path } />
                            }>
                            <Meta
                                title = { `Vote Average: ${image.vote_average}` }
                                description = { `Votes: ${image.vote_count}` } />
                        </Card>
                    </List.Item>
                ) } />
            <div style = { { display: 'none' } }>
                <Image.PreviewGroup
                    preview = { {
                        visible,
                        current:         viewImage,
                        onVisibleChange: (vis) => setVisible(vis),
                    }
                    }>
                    { previewImages.map((previewImage:PreviewImage) => (
                        <Image key = { previewImage.id } src = { previewImage.path } />
                    )) }
                </Image.PreviewGroup>
            </div>
        </>
    );
};

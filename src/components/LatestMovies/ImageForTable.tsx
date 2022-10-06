import { useState } from 'react';
import { Image } from 'antd';

type Props = {
    src: string;
};
export const ImageForTable: React.FC<Props> = (props) => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Image
                preview = { { visible: false } }
                width = { 200 }
                src = { props.src }
                onClick = { () => setVisible(true) } />
            <div style = { { display: 'none' } }>
                <Image.PreviewGroup preview = { {
                    visible, onVisibleChange: (vis) => setVisible(vis),
                } }>
                    <Image src = { props.src } />
                    <Image src = { props.src } />
                    <Image src = { props.src } />
                </Image.PreviewGroup>
            </div>
        </>
    );
};


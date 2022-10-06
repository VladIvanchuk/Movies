import { Footer } from '../Footer';
import { BackTop } from 'antd';
import React from 'react';
import { VerticalAlignTopOutlined } from '@ant-design/icons';

type Props = {
    children: React.ReactElement | React.ReactElement[];
};

const style: React.CSSProperties = {
    height:          50,
    width:           50,
    lineHeight:      '50px',
    borderRadius:    25,
    backgroundColor: '#001529',
    color:           '#fff',
    textAlign:       'center',
    fontSize:        14,
};

export const LayoutWrapper: React.FC<Props> = ({ children }) => {
    return (
        <>
            { children }
            <Footer />
            <BackTop>
                <div style = { style }>
                    <VerticalAlignTopOutlined style = { { fontSize: '26px' } } />
                </div>
            </BackTop>
        </>
    );
};

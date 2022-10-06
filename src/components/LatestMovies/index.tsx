import { Layout } from 'antd';
import { TableLatest } from './TableLatest';

const { Content } = Layout;

export const Latest: React.FC = () => {
    return (
        <>
            <Content style = { { width: '100%', padding: '0 50px' } }>
                <div className = 'site-layout-content'>
                    <TableLatest />
                </div>
            </Content>
        </>

    );
};


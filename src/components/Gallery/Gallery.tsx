import { Tabs } from 'antd';
import { useParams } from 'react-router-dom';
import { GAL_TABS } from './constants';
import { GalleryTabContent } from './GalleryTabContent';


export const Gallery = () => {
    const params = useParams();
    const { filmId } = params;


    const tabsJSX = GAL_TABS.map((galTab) => {
        return (
            <Tabs.TabPane
                tab = { galTab.name }
                key = { galTab.id }
                style = { { padding: 20 } }>
                <GalleryTabContent
                    tabId = { galTab.id }
                    filmId = { filmId as string } />
            </Tabs.TabPane>
        );
    });

    return (
        <>
            <Tabs defaultActiveKey = 'backdrops'>
                { tabsJSX }
            </Tabs>
        </>);
};

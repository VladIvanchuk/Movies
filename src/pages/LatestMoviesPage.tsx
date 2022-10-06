import { Navigation, LayoutWrapper } from '../components';
import { Latest } from '../components/LatestMovies';

export const LatestMoviesPage: React.FC = () => {
    return (
        <LayoutWrapper>
            <Navigation />
            <Latest />
        </LayoutWrapper>
    );
};

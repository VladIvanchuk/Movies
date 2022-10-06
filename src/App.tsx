// Core
import { FC, useEffect } from 'react';
import {
    Routes, Route, Outlet, Navigate,
} from 'react-router-dom';
import { ToastContainer, toast, Slide } from 'react-toastify';
import { observer } from 'mobx-react-lite';

// Components
import {
    PopularFilmsPage, GalleryPage, TopRatedFilmsPage, LatestMoviesPage,
    Film, TrendingMoviesPage,
} from './pages';

/* Other */
import { useStore } from './hooks';

export const App: FC = observer(() => {
    const { uiStore } = useStore();
    const { errorMessage, resetError } = uiStore;

    useEffect(() => {
        if (errorMessage) {
            const notify = () => toast.error(errorMessage, {
                position:        'top-right',
                autoClose:       7000,
                hideProgressBar: false,
                closeOnClick:    true,
                pauseOnHover:    true,
                draggable:       true,
                progress:        undefined,
            });
            notify();

            resetError();
        }
    }, [errorMessage]);

    return (
        <>
            <ToastContainer newestOnTop transition = { Slide } />
            <section className = 'ant-layout styles_section__2QkFe'>
                <Routes>
                    <Route path = '/' element = { <Outlet /> }>
                        <Route path = '/' element = { <TrendingMoviesPage /> } />
                        <Route path = '/top-rated-films' element = { <TopRatedFilmsPage /> } />
                        <Route path = '/films' element = { <Film /> } />
                        <Route path = '/films/:filmId' element = { <Film /> } />
                        <Route path = '/popular-films' element = { <PopularFilmsPage /> } />
                        <Route path = '/latest-films' element = { <LatestMoviesPage /> } />
                        <Route path = '/films/:filmId/images' element = { <GalleryPage /> } />
                    </Route>
                    <Route path = '/popular-films' element = { <PopularFilmsPage /> } />
                    <Route path = '/latest-films' element = { <LatestMoviesPage /> } />
                    <Route path = '/top-rated-films' element = { <TopRatedFilmsPage /> } />

                    <Route path = '*' element = { <Navigate to = '/films' /> } />
                </Routes>
            </section>

        </>
    );
});

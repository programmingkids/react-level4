import { Layout } from './../layouts/Layout';
import { Home } from './../pages/Home';
import { MovieAdd } from './../pages/MovieAdd';
import { MoviePlay } from './../pages/MoviePlay';
import { MovieEdit } from './../pages/MovieEdit';
import { MovieDelete } from './../pages/MovieDelete';
import { About } from './../pages/About';
import { NotFound } from './../pages/NotFound';

export const routeData = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path : 'add',
                element : <MovieAdd />,
            },
            {
                path : 'play/:id',
                element : <MoviePlay />,
            },
            {
                path : 'edit/:id',
                element : <MovieEdit />,
            },
            {
                path : 'delete/:id',
                element : <MovieDelete />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    }
];

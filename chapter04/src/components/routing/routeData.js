import {Layout} from './../layouts/Layout';
import {NotFound} from './../pages/NotFound';
import {BookList} from './../pages/BookList';
import {BookDetail} from './../pages/BookDetail';
import {BookCreate} from './../pages/BookCreate';
import {BookEdit} from './../pages/BookEdit';
import {BookDelete} from './../pages/BookDelete';

export const routeData = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <BookList />,
            },
            {
                path : 'book/',
                children: [
                    {
                        path: 'detail/:bookId',
                        element: <BookDetail />,
                    },
                    {
                        path: 'create',
                        element: <BookCreate />,
                    },
                    {
                        path: 'edit/:bookId',
                        element: <BookEdit />,
                    },
                    {
                        path: 'delete/:bookId',
                        element: <BookDelete />,
                    },
                ],
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    }
];

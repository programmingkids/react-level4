import {useRoutes} from 'react-router-dom';
import {routeData} from './routeData';

export const Router = () => {
    const route = useRoutes(routeData);
    return <>{route}</>;
};

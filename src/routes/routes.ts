import { lazy } from 'react';
import NoLazy from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element

interface IRoutes{
    path: string,
    Component: JSXComponent | React.LazyExoticComponent<JSXComponent>,
    name: string,
    children?: IRoutes[]
}


export const routes: IRoutes[] = [
    {
        path: '/lazyload',
        Component: lazy (()=> import(/*webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout')),
        name: 'LazyLoading Nested'
    },
    {
        path: '/nolazy',
        Component: NoLazy,
        name: 'No Lazy Loading'
    }
]
export default routes
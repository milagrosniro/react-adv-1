import { lazy } from 'react';

type JSXComponent = () => JSX.Element

interface IRoutes{
    path: string,
    Component: JSXComponent | React.LazyExoticComponent<JSXComponent>,
    name: string,
    children?: IRoutes[]
}


const LazyPage1 = lazy (()=> import(/*webpackChunkName: "Lazy01" */'../01-lazyload/pages/LazyPage1'))
const LazyPage2 = lazy (()=> import(/*webpackChunkName: "Lazy02" */'../01-lazyload/pages/LazyPage2'))
const LazyPage3 = lazy (()=> import(/*webpackChunkName: "Lazy03" */'../01-lazyload/pages/LazyPage3'))

export const routes: IRoutes[] = [
    {
        path: '/lazy1',
        Component: LazyPage1,
        name: 'LazyPage-1'
    },
    {
        path: '/lazy2',
        Component: LazyPage2,
        name: 'LazyPage-2'
    },
    {
        path: '/lazy3',
        Component: LazyPage3,
        name: 'LazyPage-3'
    }
]
export default routes
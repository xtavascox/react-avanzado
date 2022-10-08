// import {LazyPage1, LazyPage3, LazyPage2} from "../01-lazyload/pages";
import {lazy,LazyExoticComponent} from "react";
import {NoLazy} from "../01-lazyload/pages/NoLazy";

type JSXComponet=() => JSX.Element;

interface IRoute {
    to: string,
    path: string,
    component:  LazyExoticComponent<JSXComponet> | JSXComponet ,
    name: string
}

const LazyLayout = lazy(() => import(/*webpackChunkName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout'));
const Lazy2 = lazy(() => import(/*webpackChunkName: "LazyPage2"*/'../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/*webpackChunkName: "LazyPage3"*/'../01-lazyload/pages/LazyPage3'));

export const routes: IRoute[] = [
    {
        to: '/lazyload',
        path: '/lazyload/*',
        component: LazyLayout,
        name: 'LazyLayout'
    }, {
        to: '/no-lazy',
        path: 'no-lazy',
        component: NoLazy,
        name: 'No lazy'
    }
];
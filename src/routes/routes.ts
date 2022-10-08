import {LazyPage1, LazyPage3, LazyPage2} from "../01-lazyload/pages";
import {lazy,LazyExoticComponent} from "react";

type JSXComponet=() => JSX.Element;

interface IRoute {
    to: string,
    path: string,
    component:  LazyExoticComponent<JSXComponet> | JSXComponet ,
    name: string
};

const Lazy1 = lazy(() => import(/*webpackChunkName: "LazyPage1"*/'../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import(/*webpackChunkName: "LazyPage2"*/'../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/*webpackChunkName: "LazyPage3"*/'../01-lazyload/pages/LazyPage3'));

export const routes: IRoute[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        component: Lazy1,
        name: 'Lazy 1'
    }, {
        to: '/lazy2',
        path: 'lazy2',
        component: Lazy2,
        name: 'Lazy 2'
    }, {
        to: '/lazy3',
        path: 'lazy3',
        component: Lazy3,
        name: 'Lazy 3'
    },
];
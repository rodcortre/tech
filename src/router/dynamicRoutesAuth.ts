import { lazy, LazyExoticComponent } from "react";
type JSXComponent = ()=>JSX.Element
interface Route{
    path:string;
    to:string;
    Component:LazyExoticComponent<JSXComponent> | JSXComponent,
    name:string
}


const Home = lazy(()=>import(/*webpackChunkName: "Home"*/'../pages/Home/Home'))
const Album = lazy(()=>import(/*webpackChunkName: "Album"*/'../pages/Album/Album'))

export const routes:Route[] = [
    {to:"/Home",
    path:"/Home/*",
    Component:Home,
    name:"Home"
    },
    {to:"/Album",
    path:"/Album/*",
    Component:Album,
    name:"Album"
    },

];
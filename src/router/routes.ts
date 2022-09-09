import { lazy, LazyExoticComponent } from "react";
type JSXComponent = ()=>JSX.Element
interface Route{
    path:string;
    to:string;
    Component:LazyExoticComponent<JSXComponent> | JSXComponent,//puede ser un lazy loading o un componente tradicional bro
    name:string
}


const lazyLayout = lazy(()=>import(/*webpackChunkName: "Login"*/'../pages/Login/Login'))

export const routes:Route[] = [
    {to:"/Login",
    path:"/Login/*", //esta cosa permite que cargue todo despues de ese lazyload, osea para cualquier cosa que venga despues de lazyload se carga ese componente de abajo, :O
    Component:lazyLayout,
    name:"Login"
    },
];
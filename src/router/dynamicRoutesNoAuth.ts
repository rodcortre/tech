import { lazy, LazyExoticComponent } from "react";
type JSXComponent = ()=>JSX.Element
interface Route{
    path:string;
    to:string;
    Component:LazyExoticComponent<JSXComponent> | JSXComponent,
    name:string
}


const Login = lazy(()=>import(/*webpackChunkName: "Login"*/'../pages/Login/Login'))
const Register = lazy(()=>import(/*webpackChunkName: "Register"*/'../pages/Register/Register'))

export const routes:Route[] = [
    {to:"/Login",
    path:"/Login/*",
    Component:Login,
    name:"Login"
    },
    {to:"/Register",
    path:"/Register/*",
    Component:Register,
    name:"Register"
    },
];
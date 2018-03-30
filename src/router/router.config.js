import React,{Component} from 'react'
import Home from '../views/home'
import Detail from '../views/detail'
import Login from '../views/login'
import Catagory from '../views/catagory'
import Cart from '../views/cart'
import Mine from '../views/mine'
import NotMatch from '../views/route404/nomatch'
import Search from '../views/search'
import Setting from '../views/Setting'
import Result from '../views/result/result'
import Register from '../views/register/register'
import Index from '../views/index/index'
import Alertbox from '../views/alertbox/alertbox'
import DeliverList from '../views/deliverList'
import Delivery from '../views/delivery'
let router={
    routes:[
        {
            path:'/detail',
            component:Detail
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/register',
            component:Register
        },
        {
            path:'/setting',
            component:Setting
        },
        {
            path:'/deliverList',
            component:DeliverList
        },
        {
            path:'/delivery',
            component:Delivery
        },
        {
            path:'/index',
            component:Index,
            children:[
                {
                    path:'/index/home',
                    component:Home
                },
                {
                    path:'/index/catagory',
                    component:Catagory
                },
                {
                    path:'/index/cart',
                    component:Cart
                },
                {
                    path:'/index/mine',
                    component:Mine,
                    authorization:true
                },
                {
                    path:'/index/search',
                    component:Search
                },
                {
                    path:'/index/result',
                    component:Result
                },
                {
                    path:'/index/alertbox',
                    component:Alertbox
                }
            ]
        },
        {
            component:NotMatch
        }

    ]
}
export default router
import Index from '../views/index/index'
import Detail from '../views/detail'
import Login from '../views/login'
import Cart from '../views/cart'
import Catacory from '../views/catacory'
import Mine from '../views/mine'
import Home from '../views/home'
import {exact} from 'react-router-dom'
let router={
	routes:[
		{
			path:'/index',
			component:Index,
			children:[
				{
					path:'/index/home',
					component:Home,
					exact
				},
				{
					path:'/index/cart',
					component:Cart,
					exact
				},
				{
					path:'/index/catacory',
					component:Catacory,
					exact
				},
				{
					path:'/index/mine',
					component:Mine,
					exact
				}
			]
		},
		{
			path:'/detail',
			component:Detail
		},
		{
			path:'/login',
			component:Login
		}
	]
}
export default router
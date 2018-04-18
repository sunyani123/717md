import Index from '../views/index/index'
import Home from '../views/home/home'
import Cart from '../views/cart/cart'
import Cata from '../views/cata/cata'
import Mine from '../views/mine/mine'
import Login from '../views/login'
import Register from '../views/register/register'
let router={
	routes:[
		{
			path:'/index',
			component:Index,
			children:[
				{
					path:'/index/home',
					component:Home
				},
				{
					path:'/index/cart',
					component:Cart
				},
				{
					path:'/index/cata',
					component:Cata
				},
				{
					path:'/index/mine',
					component:Mine
				}
			]
		},
		{
			path:'/login',
			component:Login
		},
		{
			path:'/register',
			component:Register
		}
	]
}
export default router
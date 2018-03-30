#717项目
1.用react来开发的项目
2.利用react-redux和redux-saga进行数据管理,而redux用于大项目
3.process.env判断系统环境变量是本地服务器还是客户端的服务器
	在webpack.build.js或webpack.dev.js中有baseConfig.plugins.push(new DefinePlugin({
	    "process.env.NODE_ENV":JSON.parse(process.env.NODE_ENV)
	}))
	其中process.env.NODE_ENV来自package.json的scripts中的配置："dev": "cross-env NODE_ENV=development webpack-dev-server --progress --color --config config/webpack.dev.js",
	    "build": "cross-env NODE_ENV=production webpack --color --profile --progress --config config/webpack.build.js"
4.封装的$http中基于fetch封装的请求方，支持get和post
5.server文件中设置服务端允许localhost:3000进行跨于
6.api文件中写一些静态文件有不同页面的接口来传送数据
7.封装了一个路由组件需传送{...location}给路由作用是传递路有需要的参数如history,location,match,staticContext便于以后使用
	const {routes} =this.props  routes={item.children}实现了路由的嵌套
8.router文件夹里的router.config引入了所有的路由页面，
	其中routes数组里包含所有的路由的path和component,authorization。
	authorization用于判断用户是否有权限进入此页面  routeWrapper组建中还要求若有权限并登陆过后才能进入页面否则跳转至登陆页面	
9.页面
	首页
	详情页
	搜索页
	分类页
	购物车
	我的（登录 注册）
	邮寄地址管理 （添加邮寄地址 收货地址）
10.首页
    （1）header中有搜索框  搜索框是点击跳转至搜索页
		若点击搜索 在本地存储中判断是否有searchvalue若没有则存储一下，若有则查看input的内容有没有如果没有在本地存储一份，
			有的话直接return不进行存储。  在componentDidMount中把this.state.historylist的值改为JSON.parse(localStorage.getItem('searchvalue'))
    	最近搜索中的数据为this.state.historylist的数据 
    	点击最近搜索的内容进行路由跳转
    	如点击删除则直接删除本地和state里面的数据	
			localStorage.removeItem('searchvalue');
	        this.setState({
	            historylist:[]
	        })
    （2）封装了swiper组件  使用的swiper插件，new Swiper中this.refs.scDom的作用是获取到实际dom  
    （3）商品列表
    		<1>.在componentDidMount中获取/mail/index/getGoodsChannel接口中的数据 传入channel_id俩对数据进行变动 变动条件是根据滚轮距离视窗的变动来改变的改变一次请求一次接口的数据
    		将接口中的存入this.state.goodslist
    		<2>.遍历渲染数据 将数据和this.props.history传入到GoodItem组建中
    			goodsComp文件中接受是数据并写入元素中
    				点击商品列表跳转至详情页   其中点击添加购物车时用e.stopPropagation()阻止事件冒泡从而不跳转至详情页
    				点击添加购物车时 用getCookie('token')判断用户是否登录若是则在添加购物车的接口中传入接收到的商品id和商品数据以及用户信息   用dispatch传入接受的数据count:1, selected:0
    				并且在添加购物车的接口中
    				 若不是则跳转至登录页进行登录
10.分类页
	根据不同的sonid参数来判断请求到的数据  进而进行数据渲染
11.购物车页（主要是服务端和redux对数据的管理）
	获取到store里面的数据进行数据渲染   将数据传递给CartItem组件 CartItem组件中获取store中的数据点击加加减减来改变store中的数据
	点击选中与非选中按钮判断item.selected==0还是1若为0则icon变为非选中状态，若为1则为选中状态
	在store中判断cart_list中的每一个selected的值是否为1若为1则将这个商品的价格和数量的总数累加到总价中
	删除功能 设置原来header上面的值为编辑  点击编辑则看是否为编辑若是则变为完成若不是则变成编辑
	若内容为完成则将这以下商品的goods_id传入到接口中进行删除数据
12.我的页面
	<1>注册页面
		点击注册把注册的用户名和密码传输到服务端 用user.json来存储用户名和密码，若添加成功则跳转至login页面
	<2>登陆页面
		点击登录把登录的用户名和密码传输到服务端  在服务端吧user.json的数据与接受的用户名和密码进行比较
13.邮寄地址管理
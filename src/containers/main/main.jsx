import React, { Component } from  'react'

// ui 组件
import { NavBar, Toast } from 'antd-mobile'; 

import { connect } from 'react-redux'; 
import { Redirect, Switch, Route } from 'react-router-dom'

import NavFooter from '@/component/navFooter/navFooter'

import { getUserInfo } from '@/redux/actions'

import Cookies from 'js-cookie'

import Employee from '@/containers/employee'
import Boss from '@/containers/boss'

import UserInfo from '@/containers/userinfo'




class Main extends Component {
	constructor () {
		super()
		this.state = {}
	}
	clickHandle () {
		// console.log(123)
	}

	componentDidMount () {
		

		let CookieId = Cookies.get('userId')
		// 当redux上面没有用户id 且 cookie中有用户id 才能发起请求
		if (CookieId && !this.props.user._id) {
			this.props.getUserInfo()
		}
	}

	render () {
		// 给组件对象添加属性
		let navList = [ // 包含所有导航组件的相关信息数据
			{
			  path: '/dashen', // 路由路径
			  // component: Laoban,
			  title: '大神列表',
			  icon: 'dashen',
			  text: '大神',
			  userType: 'boss'
			},
			{
			  path: '/laoban', // 路由路径
			  // component: Dashen,
			  title: '老板列表',
			  icon: 'laoban',
			  text: '老板',
			  userType: 'employee'
			},
			{
			  path: '/message', // 路由路径
			  // component: Message,
			  title: '消息列表',
			  icon: 'message',
			  text: '消息',
			},
			{
			  path: '/personal', // 路由路径
			  // component: Personal,
			  title: '用户中心',
			  icon: 'personal',
			  text: '个人',
			}
		]

		let currentPath = this.props.history.location.pathname
		// console.log(this.props)

		let userType = this.props.user? this.props.user.type : ''

		let userId =  this.props.user? this.props.user._id : ''

		if (!userId) {

			let cookieUserId = Cookies.get(userId).userId
			if (cookieUserId) {
				// this.props.getUserInfo()
				
				return null
    			
			} else {
				return <Redirect to="/login"></Redirect>
			}
			

			
		} else {
			if (currentPath == '/') {
				// 当路由是 '/' 时要重定向到 老板或者大神的页面，根据当钱用户类型来选择重定向到哪个
				let redirectPath = navList.filter((item) => {
					return item.userType == userType
				})[0].path

				// 根据用户的类型跳转到不同的页面
				return <Redirect to={redirectPath}></Redirect>
			}
		}

		// 根据用户类型来显示哪些底部导航
		let newNavList = navList.filter((item) => {

			if (item.userType) {
				if (item.userType == userType) {
					return item
				}
			} else {
				return item
			}
		})

		let navTitle = navList.filter((item) => {
			return item.path == currentPath
		})[0].title
		
		return (
			<div>
				<NavBar>{ navTitle }</NavBar>
				<Switch>
					<Route path="/dashen" component={Employee}></Route>
					<Route path="/laoban" component={Boss}></Route>
					<Route path="/personal" component={UserInfo}></Route>
				</Switch>
				<NavFooter navList={newNavList}></NavFooter>
			</div>
		) 
	}
}

export default connect((state) => ({user: state.user}),{getUserInfo})(Main)
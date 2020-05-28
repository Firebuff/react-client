import React, { Component } from  'react'
import { NavBar } from 'antd-mobile'; 
import { connect } from 'react-redux'; 

import NavFooter from '@/component/navFooter/navFooter'

class Main extends Component {
	constructor () {
		super()
		this.state = {}
	}
	clickHandle () {
		// console.log(123)
	}

	render () {
		// 给组件对象添加属性
		let navList = [ // 包含所有导航组件的相关信息数据
			{
			  path: '/laoban', // 路由路径
			  // component: Laoban,
			  title: '大神列表',
			  icon: 'dashen',
			  text: '大神',
			},
			{
			  path: '/dashen', // 路由路径
			  // component: Dashen,
			  title: '老板列表',
			  icon: 'laoban',
			  text: '老板',
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
		return (
			<div>
				<NavBar>直聘</NavBar>
				<div>我是主页</div>
				<NavFooter></NavFooter>
			</div>
		) 
	}
}

export default connect(state => ({user: state.user}))(Main)
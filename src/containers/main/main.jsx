import React, { Component } from  'react'
import { NavBar } from 'antd-mobile'; 

class Main extends Component {
	constructor () {
		super()
		this.state = {}
	}
	clickHandle () {
		// console.log(123)
	}

	render () {
		return (
			<div>
				<NavBar>直聘</NavBar>
				<div>我是主页</div>
			</div>
		) 
	}
}

export default Main
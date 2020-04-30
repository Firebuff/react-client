import React, { Component } from  'react'

import { NavBar, List, InputItem, WingBlank, Button, WhiteSpace } from 'antd-mobile'; 

import Logo from '@/component/logo/index'

class Register extends Component {
	constructor () {
		super()
		this.state = {
			params: {
				userName: '',
				password: '',
			},
			value: 0
		}
	}
	inputHandle (val,type) {
		let data = Object.assign(this.state.params, {[type]: val})
		this.setState({
			params: data
		}, () => {
			console.log(this.state)
		})
		// console.log(val, type)
	}
	toRegister () {
		this.props.history.replace('/register')
	}
	render () {
		return (
			<div>
				<NavBar>直聘</NavBar>
				<Logo></Logo>
				<WingBlank>
					<List>
						<InputItem placeholder="请输入用户名" onChange={ (val) => {this.inputHandle(val,'userName')} } value={this.state.params.userName}>用户名：</InputItem>
						<InputItem placeholder="请输入密码" onChange={ (val) => {  this.inputHandle(val, 'password') } } value={this.state.params.password}>密码：</InputItem>
					</List>
				</WingBlank>
				<WhiteSpace />
				<div>
					<Button type="primary">登录</Button><WhiteSpace />
					<Button onClick={ () => { this.toRegister() }  }>还没有账户</Button><WhiteSpace />
				</div>
			</div>
		) 
	}
}
export default Register
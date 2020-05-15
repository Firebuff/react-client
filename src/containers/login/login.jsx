import React, { Component } from  'react'

import { connect } from 'react-redux'

import { NavBar, List, InputItem, WingBlank, Button, WhiteSpace } from 'antd-mobile'; 

import Logo from '@/component/logo/index'


import { login } from '@/redux/actions'

class Login extends Component {

	constructor () {
		super()
		this.state = {
			params: {
				username: '',
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
		const { login } = this.props
		return (
			<div>
				<NavBar>直聘</NavBar>
				<Logo></Logo>
				<WingBlank>
					<List>
						<InputItem placeholder="请输入用户名" onChange={ (val) => {this.inputHandle(val,'username')} } value={this.state.params.username}>用户名：</InputItem>
						<InputItem placeholder="请输入密码" onChange={ (val) => {  this.inputHandle(val, 'password') } } value={this.state.params.password}>密码：</InputItem>
					</List>
				</WingBlank>
				<WhiteSpace />
				<div>
					<Button type="primary" onClick={ () => { login(this.state.params) }}>登录</Button><WhiteSpace />
					<Button onClick={ () => { this.toRegister() }  }>还没有账户</Button><WhiteSpace />
				</div>
			</div>
		) 
	}
}

// function mapStateToProps (state) {
// 	return {
// 		user: state.user
// 	}
// }

// function mapDispatchToProps (dispatch) {
// 	return {login: (user) => { dispatch (login(user)) }}
// }


export default connect(
  	state => ({user: state.user}),
  	{login}
)(Login)


// export default connect(mapStateToProps, mapDispatchToProps)(Login)
  
import React, { Component } from  'react'

import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'

import { NavBar, List, InputItem, WingBlank, Radio, Button, WhiteSpace } from 'antd-mobile'; 

import Logo from '@/component/logo/index'

import { register } from '@/redux/actions'

class Register extends Component {
	constructor () {
		super()
		this.state = {
			params: {
				username: '',
				password: '',
				repassword: '',
				type: 'boss'
			},
			value: 0
		}
	}

	onChange (item) {
		let data = Object.assign(this.state.params, {type: item.type})
		this.setState({
			value: item.value,
			params: data
		}, () => {
			console.log(this.state)
		})
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
	toLogin () {
		this.props.history.replace('/login')
	}
	render () {

		let radiosData = [
			{
				type: 'boss',
				name: '老板',
				value: 0
			},{
				type: 'employee',
				name: '求职者',
				value: 1
			}
		]
		const { register,redirect } = this.props

		if (redirect) {
			return <Redirect to={redirect}></Redirect>
		}
		
		return (
			<div>
				<NavBar>直聘</NavBar>
				<Logo></Logo>
				<WingBlank>
					<List>
						<InputItem placeholder="请输入用户名" onChange={ (val) => {this.inputHandle(val,'username')} } value={this.state.params.username}>用户名：</InputItem>
						<InputItem placeholder="请输入密码" onChange={ (val) => {  this.inputHandle(val, 'password') } } value={this.state.params.password}>密码：</InputItem>
						<InputItem placeholder="请确认密码" onChange={ (val) => { this.inputHandle(val,'repassword') } } value={this.state.params.repassword}>确认密码：</InputItem>
						<div style={ { display: 'flex', justifyContent: 'space-between', lineHeight: '44px',
						paddingLeft: '15px', fontSize:'17px' } }>
							<div>
								用户类型：
							</div>
							<div style={ {flex: 1, paddingLeft:'10px'} } >

								{
									radiosData.map( (item,index) => {
										return (
											<Radio key={ index }  
											name={item.type} checked={ this.state.value === item.value} 
											onChange={() => this.onChange(item)}
											style={ {paddingLeft:'10px'} }
											>
												{ item.name }
											</Radio>
										)
									})

								}
								
							</div>
						</div>
					</List>
				</WingBlank>
				<WhiteSpace />
				<div>
					<Button type="primary" onClick={ () => {register(this.state.params)} }>注册</Button><WhiteSpace />
					<Button onClick={ () => { this.toLogin() }  }>已有账户</Button><WhiteSpace />
				</div>
			</div>
		) 
	}
}

export default connect(state =>({...state.global}), {register})(Register)
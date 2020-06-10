import React, {Component} from 'react'
import { connect } from 'react-redux'

// ui 组件
import { NavBar, Toast, Grid, InputItem, List,  WingBlank, WhiteSpace,  Button } from 'antd-mobile'; 

import { updateUserHandle } from '@/redux/actions'


class UpdateEmployee extends Component {
	constructor (props) {
		super(props)
		this.imageList = []

		this.state = {
			params: {
			},

			selectedImg: ''
		}

		for( let i= 0; i<20; i++) {
			let item = {
				image: require(`../../assets/images/头像${i+1}.png`),
				name: `头像${i+1}`
			}

			this.imageList.push(item)
		}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
	}

	inputHandle (val, key) {
		let params = Object.assign(this.state.params, {[key]: val})
		this.setState({
			params: params
		})
	}

	redirectTo () {
		this.props.history.replace('/')
	}

	gridClickHandle (e) {
		let params = Object.assign(this.state.params, {image: e.name.replace('头像','')})
		this.setState({
			selectedImg: require(`../../assets/images/头像${e.name.replace('头像','')}.png`),
			params: params
		})
	}

	render () {
		// console.log(this.state)
		return (
			<div>
				<NavBar>信息完善</NavBar>
				<div style={ {lineHeight: '30px',background: '#f7f7f7'} }>请选择头像</div>
				<Grid data={this.imageList}
				    columnNum={5}
				    onClick = { (e) => {this.gridClickHandle(e)} }
				    renderItem={dataItem => (
					   	<div style={{display: 'flex',flexDirection: 'column',justifyContent: 'center',height:'100%'}}>
					   		<div>
					   			<img src={dataItem.image} style={{ width: '40px', height: '40px' }} alt="" />
					   			<div>{dataItem.name}</div>
					   		</div>
					   	</div>
				    )}
				/>
				<WhiteSpace size="xs" />
				<List>
					<WhiteSpace size="lg" />
					<WingBlank>
						<div>
							<span style={{fontSize: '17px'}}>所选头像</span>
							{
								this.state.selectedImg? <img src={this.state.selectedImg} alt="" style={ {verticalAlign: 'middle', marginLeft: '10px'} }/>: null
							}
							
						</div>
					</WingBlank>
				    <WhiteSpace size="xs" />
				    <InputItem 
				    	placeholder="请输入求职岗位" 
				    	onChange={ (val) => {this.inputHandle(val,'position')} } 
				    	value={this.state.params.position}
				    >
				    	求职岗位：
				    </InputItem>
				    <InputItem 
				    	placeholder="请输入薪资要求" 
				    	onChange={ (val) => {this.inputHandle(val,'salary')} } 
				    	value={this.state.params.salary}
				    >
				    	薪资要求：
				    </InputItem>

				    <InputItem 
				    	placeholder="请输入个人简介" 
				    	onChange={ (val) => {this.inputHandle(val,'introduce')} } 
				    	value={this.state.params.introduce}
				    >
				    	个人简介：
				    </InputItem>
				   
				   
				</List>
				<WhiteSpace />
				<div style={{padding: '0 20px', marginTop: '10px'}}>
					<div className="confirm">
						<Button type="primary">保存</Button>
					</div>
				</div>

				<div style={{padding: '0 20px', marginTop: '10px',textAlign: 'center'}}>
					<div className="cancel" style={{display: 'inline-block'}}>
						<Button size="small" onClick={ () => {this.redirectTo()}}>跳过--></Button>
					</div>
				</div>
				<WhiteSpace size="lg" />
			</div>
		)
	}
}

export default connect(state => ({user: state.user}), {updateUserHandle}) (UpdateEmployee)
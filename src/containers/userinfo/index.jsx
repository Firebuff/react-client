import React, {Component} from 'react'

import { connect } from 'react-redux'

class UserInfo extends Component {
	constructor (props) {
		super(props)
		this.state = {}
	}


	render () {
		let user = this.props.user
		let img = user.image && require(`../../assets/images/头像${user.image}.png`)
		return (
			<div>
				<div>
					<img src={img} alt=""/>
					<p>{user.username}</p>
					{
						user.company? <p>{user.company}</p> : null
					}
				</div>
				<div>相关信息</div>
				<div>
					<p>
						{user.type == 'boss'? <span>招聘职位：</span> : <span>应聘职位：</span>}
						<span>{ user.position }</span>
					</p>
					<p>薪资：{user.salary}</p>
				</div>
			</div>
		)
	}
}

export default connect(state => ({user: state.user}))(UserInfo)
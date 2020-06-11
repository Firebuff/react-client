import React, {Component} from 'react'

import { connect } from 'react-redux'

import UpdateBoss from '@/component/update-boss'
import UpdateEmployee from '@/component/update-employee'

class Update extends Component {
	constructor (props) {
		super(props)
	}

	render () {
		let userType = this.props.user.type || ''
		let showWhich =null
		if (userType == 'boss') {
			showWhich = (<UpdateBoss></UpdateBoss>)
		} else if (userType == 'employee') {
			showWhich = (<UpdateEmployee></UpdateEmployee>)
		}
		return showWhich
	}
}

export default connect(state => ({user: state.user}))(Update)
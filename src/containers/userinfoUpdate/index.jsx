import React, {Component} from 'react'

import { connect } from 'react-redux'

import updateBoss from '@/component/update-boss'
import updateEmployee from '@/component/update-employee'

class Update extends Component {
	constructor (props) {
		super(props)
	}

	render () {
		return null
	}
}

export default connect(state => ({user: state.user}))(Update)
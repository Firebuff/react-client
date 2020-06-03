import React, {Component} from 'react'

import { TabBar } from 'antd-mobile';

import PropTypes from 'prop-types'

import { withRouter } from 'react-router-dom'

class NavFooter extends Component {

	constructor () {
		super()
		this.state = {
			selectedTab: 0,
		}
	}

	// 类型校验
	static propsType = {
		navList: PropTypes.array.isRequired
	}
	
	// 设置默认值
	static defaultProps = {
		navList: []
	}

	render () {
		let { navList } = this.props

		let currentPath = this.props.history.location.pathname
		
		return (
			<div style={ {position:'fixed',bottom: 0, width: '100%'} }>
		        <TabBar
		          unselectedTintColor="#949494"
		          tintColor="#33A3F4"
		          barTintColor="white"
		        >
			       
			        {
			        	navList.map( (item,index) => {
			        		return (
			        			<TabBar.Item
			        			    title={item.title}
			        			    key={item.title}
			        			    icon={<div style={{
			        			    	width: '22px',
			        			      	height: '22px',
			        			      	background:`url(${require(`./images/${item.icon}.png`)}) center center /  21px 21px no-repeat` }}
			        			    />}
			        			    selectedIcon={<div style={{
			        			      width: '22px',
			        			      height: '22px',
			        			      background: `url(${require(`./images/${item.icon}-selected.png`)}) center center /  21px 21px no-repeat` }}
			        			    />}
			        			    selected={currentPath == item.path}
			        			    
			        			    onPress={() => {
			        			      	this.props.history.replace(item.path)
			        			    }}
			        			    data-seed="logId"
			        			  >
			        			    {/*{this.renderContent('Life')}fsfdsf*/}
			        			</TabBar.Item>
			        		)
			        	})
			        }
			       
		        </TabBar>
			</div>
		)
	}
}
export default withRouter(NavFooter)
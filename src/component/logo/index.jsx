import React from 'react'

import LogoImg from './logo.png'

import './index.less'

const Logo = function () {
	return (
		<div className="logo-wrapper">
			<img src={LogoImg}/>
		</div>
	) 
}

export default Logo
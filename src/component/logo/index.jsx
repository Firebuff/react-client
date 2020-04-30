import React from 'react'

import LogoImg from './logo.png'

import './index.less'

const Logo = function () {
	return (
		<div className="logo-wrapper">
			<img src={LogoImg} alt="" />
		</div>
	) 
}

export default Logo
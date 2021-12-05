/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Link from 'next/link'
const Footer = () => {
	return (
		<div className="text-center" style={{marginTop: '15vh', fontFamily: 'poppins'}}>
			<hr />
			<br />
			<p>{`Copyright © 2021 Rohitchaudhary | All Rights Reserved`}</p>
			<div style={{marginTop: '10px'}}>
				<Link href="https://www.instagram.com/_rohit.chaudhary__/?hl=en"><i className="bi bi-instagram" style={{marginRight: '10px'}}></i></Link>
				<Link href="https://www.facebook.com/rohitchaudharyy13/"><i className="bi bi-facebook"></i></Link>
				<Link href="https://github.com/Rohitchaudhary13"><i className="bi bi-github" style={{marginLeft: '10px'}}></i></Link>
			</div>
		</div>
	)
}
export default Footer
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../redux/auth.actions"

export default function Navbar() {

	const { isAuth, token } = useSelector(state => state.auth)
	const dispatch = useDispatch()

	const handleLogout = () => {
		dispatch(logout())
	}

	return (
		<div className='navbar' style={{ display: "flex", justyifyContent: "space-between", }}>
			<Link>
				Home
			</Link>
			{!isAuth ? <Link to="/login">Login</Link> : <div style={{ cursor: "pointer", color: 'white', }} onClick={handleLogout} >logout</div>}
		</div>
	)
}


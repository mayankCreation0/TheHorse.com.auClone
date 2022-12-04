import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const RequiredAuth = ({ children }) => {
	const { isAuth, token } = useSelector(state => state.auth)

	if (isAuth && token) {
		return <>
			{children}
		</>
	}

	return <Navigate to="/login" />
}

export default RequiredAuth
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate, } from 'react-router-dom'
import { login } from '../redux/auth.actions'

const Login = () => {
	const [email, setEmail] = React.useState('eve.holt@reqres.in')
	const [password, setPassword] = React.useState('cityslicka')
	const { loading, error, isAuth, token } = useSelector(state => state.auth)
	const navigate = useNavigate()

	console.log('token', isAuth, 'error', error, 'loading', loading);

	const dispatch = useDispatch()
	if (isAuth && token) {
		return <Navigate to="/" />
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(login(email, password))
	}

	return (
		<>
			<div>
				<form className="form" onSubmit={handleSubmit}>
					<div>
						<label>
							<input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
						</label>
					</div>
					<div>
						<label>
							<input
								value={password}
								onChange={e => setPassword(e.target.value)}
								data-testid="password-input"
								type="password"
								placeholder="password"
							/>
						</label>
					</div>
					<div>
						<button type="submit">
							{
								loading ? 'Loading...' : 'Login'
							}
						</button>
					</div>
				</form>
			</div>

		</>
	)
}

export default Login
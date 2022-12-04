import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/products.actions'
import { Link } from 'react-router-dom'

const Home = () => {
	const { token, isAuth } = useSelector(state => state.auth);
	const { products, error, loading, } = useSelector(state => state.product);
	const dispatch = useDispatch()


	useEffect(() => {
		dispatch(fetchProducts())
	}, [])

	return (
		<div>
			<p>Home</p>
			<p>{token}</p>
			<div style={{ display: 'grid', gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", }}>
				{
					loading ?
						<p>Loading...</p>
						: error ?
							<p>{error}</p>
							: products.map(product => (<div style={{
								width: "400px",
								border: "1px solid black",
								borderRadius: "4px",
								cursor: "pointer",
								padding: "1rem"
							}}>
						<p>{product.id}</p>
						<p>{product.title}</p>
						<p>{product.brand}</p>
						{/* <p>{product.image}</p> */}
						<img src={product.image} alt={product.title} />
						<p>{product.price}</p>
						<p>{product.category}</p>
					</div>))
				}
			</div>

		</div>
	)
}

export default Home
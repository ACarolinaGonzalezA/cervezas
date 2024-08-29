import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../utils/routes'

const Card = ({data}) => {
  return (
    <div className='card'>
        <h3>{data.name}</h3>
        <p>{data.price}</p>
        <img src={data.image} alt="beer-detail" />
        <Link to={`${routes.beer}/${data.id}`}>
        <button>Ver Detalles</button>
      </Link>
    </div>
  )
}

export default Card
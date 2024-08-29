import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

//Esta pagina renderizará cada bebida de manera individual

const Beer = () => {
    const [beer, setBeer] = useState({});
    const params = useParams();
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();



    const getBeer = async()=>{
        //Deberas completar este fetch con el parametro correspondiente
        const res = await fetch(`https://api.sampleapis.com/beers/ale/${params.id}`)
        const data = await res.json()
        setBeer(data);
        setLoading(false);
        console.log(data);  
    }

    useEffect(()=>{
        getBeer()
    }, [params.id])
    
  
  
  return (
    <div>
         {!loading? (<>
        <h2> Cerveza numero... {beer.id}</h2>  
        <div className='card'>
            <img src={beer.image} alt="beer-detail" />
            <p>{beer.name}</p>
            <p>${beer.price}</p>
            <p>{beer.rating.reviews} </p>
        </div> </>)
        :<h2> Cargando</h2>}
        <button onClick={() => navigate(-1)}>Go back</button>
    </div>

  )
}

export default Beer
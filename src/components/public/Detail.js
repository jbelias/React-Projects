import React, { useEffect, useState } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom';
import RickAndMortyService from '../services/RickAndMorty.service';

export const Detail = () => {

  const [mascota, setmascota] = useState({});

  const { id } = useParams();


  useEffect(() => {
    RickAndMortyService.getCharacterById(id)
      .then((data) => setmascota(data))
  }, [id])

  console.log(mascota);


  const detailCard = {
    width: '80%',
    margin: '10%',
    background: 'white',
    height: '15rm'
  }

  return (
      <div className="card mb-3 " style={{'background': 'gainsboro'}}>
      <div className="row g-0 mt-4 mb-4" style={detailCard}>
        <div className="col-md-3">
          <img src={mascota.image} className="img-fluid rounded-start imgDetalle" alt="img del mascota"/>
        </div>
        <div className="col-md-8 detalleMascota">
          <div className="card-body">
            <h5 className="card-title">{mascota.name}</h5>
            <p className="card-text"><small className=""><strong>Specie: </strong>{mascota.species}</small></p>
            <p className="card-text"><small className=""><strong>Status: </strong>{mascota.status}</small></p>
            <p className="card-text"><small className=""><strong>Gender: </strong>{mascota.gender}</small></p>
            <p className="card-text"><small className=""><strong>Created: </strong>{mascota.created}</small></p>
          </div>
          <div className="btn-group" style={{'marginLeft': '380px'}}>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-dark"
                >
                  <Link to={'/'} className="nav-link px-2 text-success">Inicio</Link>
                </button>
              </div>
        </div>
      </div>
    </div>

  )
}
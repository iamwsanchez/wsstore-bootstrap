import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App(){
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios({
            method: 'GET',
            baseURL: 'https://fakestoreapi.com',
            url: '/products',
          })
            .then(({ data }) => {
              setData(data)
            })
            .catch(err => console.dir(err))
            .finally(() => setLoading(false))
    }, [])

    return (  
      <section className="App">

        {loading && "Cargando..."}
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
          {!!data && data.length > 0 ? data.map((product) => {
              return(
                <div className='col'>
                  <div id={product.id} className="card" style={{ width: '25rem' }}>
                    <img src={product.image} class="card-img-top" alt={product.title}/>
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>                
                      <p className="card-text">{product.description}</p>
                      <b>Precio:</b> {product.price}<br/>
                      <b>Categoría:</b> {product.category}<br/>
                      <a href="/" class="btn btn-primary">Ver mas</a>
                    </div>
                  </div>
                </div>
              )   
            }):(<p>API no retornado ningún producto, intentalo nuevamente.</p>)
          }
        </div>
      </section>
    )
}
export default App;
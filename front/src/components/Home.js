import React, {Fragment, useEffect} from 'react'
import MetaData from './layout/MetaData'
import {useDispatch} from 'react-redux'
import {getProducts} from '../actions/productActions'

export const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])


  return (
    <Fragment>
        <MetaData title="Lo mejor para tú BMX"></MetaData>
         <h1 id="encabezado_productos">Ultimos Productos</h1>
         <section id="productos" className='container mt-5'>
                <div className='row'>
                    {/*Producto 1*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/chain BSD.jpg' alt="BSD forever chain "></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'>Cadena BSD Forever </a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 5 reviews</span>
                                </div>
                                <p className='card-text'>$80.000</p>
                                    <a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle 
                                    </a>
                            </div>
                        </div>
                    </div>

                    {/*Producto 2*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/stem animal.jpg' alt="Nutra Nuggets Matenimiento"></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'>Stem animal</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 5 reviews</span>
                                </div>
                                <p className='card-text'>$190.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Producto 3*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/TAPA DE FRENTE MUTANT.jpg' alt="Nutra Nuggets Performance"></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'>Stem animal forjada</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 12 reviews</span>
                                </div>
                                <p className='card-text'>$35.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Producto 4*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/Conix animal.jpg' alt="Nutra Nuggets Profesional"></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'>Conix animal</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 7 reviews</span>
                                </div>
                                <p className='card-text'>$35.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

    </Fragment>    
  )
}


export default Home

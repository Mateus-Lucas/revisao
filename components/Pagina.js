import React from 'react'
import Cabecalho from './Cabecalho'
import Rodape from './Rodape'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Pagina = (props) => {
    return (
        <>
            <div>

                <Cabecalho />
                <div className=' py-3 text-center mb-5 bg-secondary text-white'>
                    <h1>{props.titulo}</h1>
                </div>

                <Container className='mb-5'>
                    {props.children}
                </Container>

                <Rodape />
            </div>
        </>
    )
}

export default Pagina
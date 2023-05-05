import React from 'react'
import { Card } from 'react-bootstrap'
import apiDeputados from '../../services/apiDeputados'


const Detalhes = ({ deputado, despesas}) => {
  return (
    <Card>
        <Card.Img src={deputado.ultimoStatus.urlFoto}></Card.Img>
        <Card.Body>
            <p>Partido:</p>
        </Card.Body>
    </Card>
  )
}

export default Detalhes

export async function getServerSideProps(context) {

    const id = context.params.id

    const dep = await apiDeputados.get('/deputados/' + id)
    const deputado = dep.data.dados

    const desp = await apiDeputados.get('/deputados/' + id + '/despesas')
    const despesas = desp.data.dados

    return{
        props: { despesas , deputado },
    }

}
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import  { Container, Row, Col } from 'reactstrap';

const DetalheAlimento = ( props ) => (
    
    <Container>
        <Row>
            <Col>energia kcal: ${props.energia.kcal}</Col>
            <Col>carboidrato: ${props.carboidrato}</Col>
            <Col>colesterol: ${props.colesterol}</Col>
            <Col>ferro: ${props.ferro}</Col>
            <Col>proteina: ${props.proteina}</Col>
            <Col>sódio:  ${props.sodio}</Col>
            <Col>umidade: ${props.umidade}</Col>
        </Row>
    </Container>
)

export default DetalheAlimento;
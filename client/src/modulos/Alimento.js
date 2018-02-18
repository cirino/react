import React, { Component } from 'react'
import DetalheAlimento from './DetalheAlimento'
import './Alimento.css'

import 'bootstrap/dist/css/bootstrap.css';
import  { Card, CardText, CardBody, CardHeader, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Alimentos extends Component {
    render(){
        return (
            <Card>
                <CardHeader>
                    <h3>{this.props.descricao}</h3>
                </CardHeader>
                <CardBody>                             
                    <CardText>
                        <DetalheAlimento
                            key={this.props._id}
                            {...this.props}
                        />
                    </CardText>

                    <Modal isOpen={this.props.stateModal} toggle={this.props.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.props.toggle}>{this.props.descricao}</ModalHeader>
                        <ModalBody>

                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.props.toggle}>Ok</Button>
                        </ModalFooter>
                    </Modal>
                </CardBody>
            </Card>
        )
    }
}

export default Alimentos;
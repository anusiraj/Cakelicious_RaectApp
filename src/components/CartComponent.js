import React, { Component } from 'react';
import { Card, CardImg, Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, Row, Col } from 'reactstrap';
import { LocalForm } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

class AddToCart extends Component{

    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
        }

        toggleModal() {
            this.setState({
                isModalOpen: !this.state.isModalOpen    
            })

        }
    handleSubmit(cake) {
        this.toggleModal();
        this.props.postCart(this.props.cakeId, cake.name, cake.price);
    }
    render() {
        return(
            <>
            <Row className="form-group">
                <Col md={{size: 7}}>
                    <Button outline onClick = {this.toggleModal} outline_color="secondary">
                        ADD ITEM
                    </Button>
                    <LocalForm onSubmit={(cake) => this.handleSubmit(cake)}></LocalForm>
                 </Col>
            </Row>

            <Modal isOpen={this.state.isModalOpen} toggle = {this.toggleModal}>
            <ModalBody>
                <h4>Item added to Cart</h4>
            </ModalBody>
            </Modal>
            </>
            

        );
    }
}

function RenderCake({cake, cakeId, postCart}) {
    return (
        <div class = "row">
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={baseUrl + cake.image} alt={cake.name} /> 
                </Card>
            </div>
            
            <AddToCart cakeId={cakeId} postCart={postCart(cakeId, cake.name, cake.price)} />
        </div>
    );
}

const Cartdetail = (props) => {
    if (props.isLoading) {
        return(
            <div className = "container">
                <div className ="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess)  {
        return(
            <div className = "container">
                <div className ="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }


    else if (props.cake != null) {
        return (
            <div class = "container">
                <div className = "row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to= '/cakes'>Cake</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.cake.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className = "col-12">
                        <h3>{props.cake.name}</h3>
                    </div>
                </div>
                <div className="row">
                <div className="col-12 col-md-5 m-1">
                        <RenderCake cake={props.cake}
                            postCart={props.postCart}
                            cakeId={props.cake.id}
                            />
                    </div>
                    
                    
                
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}
export default Cartdetail;
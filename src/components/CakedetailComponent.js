import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, ModalHeader, Modal, ModalBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import ReactStars from "react-rating-stars-component";



const required = (val) => val && val.length;
const maxLength  = (len) => (val) => !(val) || (val.length <=len);
const minLength  = (len) => (val) => (val) && (val.length >=len);

class ReviewForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false,

        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 

    }
    
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,  
        })

    }
   
    handleSubmit(values) {
        this.toggleModal();
        this.props.postReview(this.props.cakeId, values.rating, values.author, values.review);
    }

    render() {

        return(
                <>
                <Row className="form-group">
                    <Col md={{size: 7}}>
                    <Button outline onClick = {this.toggleModal} outline_color="secondary">
                        <span className = "fa fa-pencil fa-lg" ></span>{' '}Submit Review</Button>
                    </Col>
                </Row>

                <Modal isOpen={this.state.isModalOpen} toggle = {this.toggleModal}>
                <ModalHeader  toggle = {this.toggleModal}>Submit Review</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                            <Label htmlFor="rating" md={2}>Rating</Label>
                            <Col md={11}>
                                    <Control.select model=".rating" name="rating"
                                        className="form-control">
                                        <option>Select rating</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>

                                    </Control.select>
                                </Col>
                        </Row>
                        <Row className="form-group">
                                <Label htmlFor="yourname" md={3}>Your Name</Label>
                                <Col md={11}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}/>
                                         <Errors  className = "text-danger"
                                         model = ".author"
                                         show = "touched"
                                         messages = {{
                                             required : "Required",
                                             minLength : "Must be greater than 2 characters",
                                             maxLength : "Must be 15 characters or less"

                                         }}>
                                            

                                         </Errors>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="review" md={2}>Review</Label>
                                <Col md={11}>
                                    <Control.textarea model=".review" id="review" name="review"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10}}>
                                    <Button outline onClick = {this.toggleModal} type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                    </LocalForm>
                </ModalBody>
                </Modal>
                </>
        
        );
    }
}

function RenderReviews({reviews, postReview, cakeId}) {
    if (reviews != null) {
     return(
     <div className = "col-12">
         <h4>Reviews</h4>
         <Card>
         <ul className="list-unstyled">
     
             {reviews.map((review) => {
            
                 return (
                     <li key={review.id}>
                     <p>{review.review}</p>
                     <p>Rating:{review.rating}</p>
                     <p>-- {review.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(review.date)))}</p>
                    <hr/>
                     </li>                    
                 );
             })}
             
     </ul>
         </Card>
             
             <ReviewForm cakeId={cakeId} postReview={postReview} />
         </div>
     )}
     
 }
 
function RenderCakedetails({cake}) {
    return(
        <div className = "container">
            <h4>Cake Details</h4>
            <hr/>
            
                <p>{cake.description}</p>
                <p className='price'>Rate: {cake.price}</p>
                <Link to= {`/cart/${cake.id}`}>
                    <Button>Add to Cart</Button>
                </Link>      
            </div>

    )
}
function RenderCake({cake}) {
    return (
        <div class = "container">
            
                <Card>
                    <CardImg top src={baseUrl + cake.image} alt={cake.name} />
                    
                </Card>
           
        </div>
    );
}

const Cakedetail = (props) => {
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
                        <RenderCake cake = {props.cake} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderCakedetails cake={props.cake}/>
                        <RenderReviews reviews={props.reviews}
                            postReview={props.postReview}
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
export default Cakedetail;
import React from 'react';
import {Card, CardImg, CardTitle, CardText, CardBody, CardSubtitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderCard({item, isLoading, errMess }) {
    if (isLoading) {
        return(
            <Loading />
        );
    }
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }
    else 
        return(
   
            <div className = "col-12 col-md-5 m-1">
                <div className="row">
                    <Card>
                        <CardImg width src = {baseUrl + item.image} alt = {item.name} />
                        <CardBody>
                            <CardTitle>{item.name}</CardTitle>
                            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                            <CardText>{item.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>  

     );
    }

    function Home(props) {

        return(
            <div className = "container">
                
                            <h3>Our Trending cakes...</h3>
                            <hr />
                        <RenderCard item = {props.cake} 
                        isLoading  = {props.cakesLoading}
                        errMess = {props.cakesErrMess} />
                    </div>
                 
    
        );
    }

export default Home;
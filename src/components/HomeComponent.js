import React from 'react';
import {Card, CardImg, CardTitle, CardText, CardBody, CardSubtitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderCard({item, isLoading, errMess }) {
    if (isLoading) {
        return(
            <div className = "container">
                <div className ="row">
                    <Loading />
                </div>
            </div>
        );

    }
    
    else if (errMess) {
        return(
            <div className = "container">
                <div className ="row">
                    <h4>{errMess}</h4>
                </div>
            </div>
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
                            <CardText>{item.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>  

     );
    }
    
    function Home(props) {
        

        return(
            
            <>

            <div className = "container">
                    <div className = "row align-items-start">
                        <div className = "col-sm">
                                <RenderCard item = {props.cake} 
                                isLoading  = {props.cakesLoading}
                                errMess = {props.cakesErrMess} />
                        </div>
                    </div>
                </div>
            </>
        );
    }

export default Home;
import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


function RenderCakeItem({ cake }) {
    return(
        <Card>
            <Link to= {`/menu/${cake.id}`}>
                <CardImg width="100%" src={baseUrl + cake.image} alt={cake.name} />
                <CardImgOverlay>
                    <CardTitle>{cake.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>

    );
}

const Cake = (props) => {

    const menu = props.cakes.cakes.map((cake) => {
        return (
            <div key={cake.id} className="col-12 col-md-5 m-1">
               <RenderCakeItem cake = {cake} />
            </div>
        );
    });


if (props.cakes.isLoading) {
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
                <h4>{props.cakes.errMess}</h4>
            </div>
        </div>
    );
}

 else
        return(
            <div className="container">
                    <div className = "row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to= '/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Cake</BreadcrumbItem>
                        </Breadcrumb>
                        <div className = "col-12">
                            <h3>Cakes</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        {menu}
                    </div>
                </div>

            

        );
    }
    


export default Cake;
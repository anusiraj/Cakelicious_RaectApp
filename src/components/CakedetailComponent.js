// import React, { Component } from 'react';
// import { Card, CardImg, CardText, CardBody, ModalHeader, Modal, ModalBody,
//     CardTitle, Breadcrumb, BreadcrumbItem, Button, Row, Col, Label } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import { Loading } from './LoadingComponent';
// import { baseUrl } from '../shared/baseUrl';
// // import {FadeTransform, Fade, Stagger } from 'react-animation-components'


// function RenderCake({cake}) {
//     return (
//         <div class = "container">
//             {/* <FadeTransform in
//               tarnsformProps={{
//                   exitTransform: '(scale(0.5) translateY(-50%))'
//               }}> */}
//                 <Card>
//                     <CardImg top src={baseUrl + cake.image} alt={cake.name} />
//                     <CardBody>
//                         <CardTitle>{cake.name}</CardTitle>
//                         <CardText>{cake.description}</CardText>
//                     </CardBody>
//                 </Card>
//             {/* </FadeTransform> */}
//         </div>
//     );
// }

// const Cakedetail = (props) => {
//     if (props.isLoading) {
//         return(
//             <div className = "container">
//                 <div className ="row">
//                     <Loading />
//                 </div>
//             </div>
//         );
//     }
//     else if (props.errMess)  {
//         return(
//             <div className = "container">
//                 <div className ="row">
//                     <h4>{props.errMess}</h4>
//                 </div>
//             </div>
//         );
//     }


//     else if (props.cake != null) {
//         return (
//             <div class = "container">
//                 <div className = "row">
//                     <Breadcrumb>
//                         <BreadcrumbItem><Link to= '/menu'>Cake</Link></BreadcrumbItem>
//                         <BreadcrumbItem active>{props.cake.name}</BreadcrumbItem>
//                     </Breadcrumb>
//                     <div className = "col-12">
//                         <h3>{props.cake.name}</h3>
//                         <hr />
//                     </div>
//                 </div>
//             <div className="row">
//                 <div className="col-12 col-md-5 m-1">
//                     <RenderCake cake = {props.cake} />
//                 </div>
               
//             </div>
//             </div>
//         );
//     }
//     else {
//         return (
//             <div></div>
//         );
//     }
// }
// export default Cakedetail;
import React from 'react';
import { Card,CardImg,CardBody,CardText,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';

    function RenderComment({comments}){
                return(
                    <div key={comments.id} className="list-unstyled">
                        <p>{comments.comment}</p>
                <blockquote>--{comments.author},{"  "}
                <Moment date={comments.date} format="MMMM DD,YYYY" />
                     
                </blockquote>
                    </div>
                );
            }
    function RenderDish({dish}){
        
        if(dish != null){
            return(
                        <Card key={dish.id} className="p-2">
                            <CardTitle color="primary">
                                        {dish.name}
                                    </CardTitle>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardText>
                                        {dish.description}
                                    </CardText>
                                </CardBody>
                        </Card> 
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
    const DishDetail = (props)=>{
        return(
            <div className="container">
                <div className="row">
              <Breadcrumb>
              <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
              </Breadcrumb>
            </div>
            <div className="col-12">
             <h3>{props.dish.name}</h3>
             <hr />
             </div>
                <div className="row">
                    <div className="col-md-6 p-3">
                        <RenderDish dish = {props.dish}/>
                    </div>
                    <div className="col-md-6" id="comment">
                        <RenderComment comments = {props.comments}/>
                    </div>
               </div>
            </div>
        );
    } 
    
export default DishDetail;
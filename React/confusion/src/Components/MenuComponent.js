import React from 'react';
import { Card,CardImg,CardImgOverlay,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
// import {Transition} from 'react-spring/renderprops'

function RenderMenuItem({dish}) {

return(
      <Card>
        <Link to={`/menu/${dish.id}`}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
            </Link>
      </Card>
    );
}


 const Menu = (props)=>{

        const menu = props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-6 mb-4">
                <RenderMenuItem dish = {dish}/>
              </div>
            );
        });

        // const style = useSpring({opacity: 1, from: {opacity: 0}})
        return (
          <div className="container">
            <div className="row">
              <Breadcrumb>
              <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
              <BreadcrumbItem active>Menu</BreadcrumbItem>
              </Breadcrumb>
            </div>
            <div className="col-12">
              <h3>Menu</h3>
              <hr/>
            </div>
            
              <div className="row" id="menu" >
                  {menu}
              </div>
            
          </div>
        );
 }

export default Menu;
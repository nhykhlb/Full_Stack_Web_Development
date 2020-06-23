import React,{Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler,Collapse,Jumbotron, NavItem, Modal, ModalHeader,Button,ModalBody, Input,FormGroup,Form,Label, ButtonGroup} from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header extends Component{

    constructor(props){
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModel = this.toggleModel.bind(this);
        this.handlelogin = this.handlelogin.bind(this);

            this.state = {
                isNavOpen:false,
                isModalOpen:false,
                fadeIn:false,
                username:'',
                password:''
        };
        
    }

    toggleNav(){
        this.setState({
            isNavOpen:!this.state.isNavOpen
        });
    }
    toggleModel(){
        this.setState({
            isModalOpen : !this.state.isModalOpen,
            
        });
    }

    handlelogin(event){
        this.toggleModel();
        alert("UserName="+this.username.value+"  password="+this.password.value);
    };

    render(){
        return(
            <>
            <Navbar dark expand="md">
                <NavbarBrand href="/home"><img src = "assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion"/></NavbarBrand>
                <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar className="mr-auto" >
                    <NavItem>
                        <NavLink className="nav-link" to="/home">
                            <span className="fa fa-home"></span> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/about">
                            <span className="fa fa-info"></span>  About Us
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/menu">
                            <span className="fa fa-list"></span> Menu
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/contact">
                            <span className="fa fa-address-card"></span> Contact Us
                        </NavLink>
                    </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                       <Button outline color="light" onClick={this.toggleModel}>
                           <span className="fa fa-sign-in "></span> LogIn

                       </Button>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante Con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <Modal isOpen={this.state.isModalOpen}  toggle={this.toggleModel} >
                <ModalHeader>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handlelogin}>
                        <FormGroup>
                            <Label htmlfor="username">UserName</Label>
                            <Input type="text" id="username" name="username"
                            innerRef={(input)=>this.username = input}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlfor="password">Password</Label>
                            <Input type="password" id="password" name="password"
                            innerRef={(input)=>this.password = input}/>
                        </FormGroup>
                        <FormGroup>
                            <Button value="submit" color="success" className="mr-2 col-3">Login</Button>
                            <Button type="cancel" outline color="danger col-3">Cancel</Button>
                            
                        </FormGroup>
                    </Form>

                </ModalBody>
            </Modal>
            </>

        );
        
    }
}
export default Header;
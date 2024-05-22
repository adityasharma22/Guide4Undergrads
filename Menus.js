import React from "react";
import { Link } from "react-router-dom";
import { ListGroup , ListGroupItem } from "reactstrap";
const Menus = () =>{
    return(
<ListGroup>
    {/* <ListGroupItem tag="a" href="/" action>home</ListGroupItem>
    <ListGroupItem tag="a" href="/add-course" action>Add course</ListGroupItem>
    <ListGroupItem tag="a" href="/view-courses" action>view courses</ListGroupItem>
    <ListGroupItem tag="a" href="#!" action>About</ListGroupItem>
    <ListGroupItem tag="a" href="#!" action>Contact</ListGroupItem> */}
    <Link className="list-group-item list-group-item-action" 
    tag="a" to="/" action>
    Home
    </Link>
    <Link className="list-group-item list-group-item-action"
    tag="a" to="/add-course" action>
    Add your Blog
    </Link>
    <Link className="list-group-item list-group-item-action" 
    tag="a" to="/view-courses" action>
    View All Blogs
    </Link>
    <Link className="list-group-item list-group-item-action" 
    tag="a" to="/contact" action>
    Contact
    </Link>
    <Link className="list-group-item list-group-item-action" 
    tag="a" to="/about" action>
    About
    </Link>
    
</ListGroup>

    );
};
export default Menus;
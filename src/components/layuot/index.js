import React,{Component,Fragment} from "react";
import {button} from "react-bootstrap";
import Sidenav from "../sidenav";
import './theme.css';
import Topnav from "../Topnav";

class Layout extends Component{
    constructor(props) {
        super(props);
    }
    render(){

        return(
            <Fragment>
                <div id='wrapper'>

                <Topnav></Topnav>
                <Sidenav></Sidenav>
                    <div style={{position:"absolute",left:"300px",border:"1px solid black"}}>
                        {this.props.children}
                    </div>

                </div>
            </Fragment>
        )
    }
}
export default Layout;
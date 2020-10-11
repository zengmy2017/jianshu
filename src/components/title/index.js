import React,{Component,Fragment} from "react";
import {button} from "react-bootstrap";
import Sidenav from "../sidenav";

import Topnav from "../Topnav";

class Title extends Component{
    constructor(props) {
        super(props);
    }

componentDidMount() {

    document.title=this.props.title+"--HAPPYMALL";

}



    render(){

        return(
            <Fragment>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1 className='page-header'>{this.props.title}</h1>
                    </div>
                </div>

            </Fragment>
        )
    }
}
export default Title;
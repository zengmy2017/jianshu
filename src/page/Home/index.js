import React,{Component,Fragment} from "react";
import {button} from "react-bootstrap";
import Title from "../../components/title";

class Home extends Component{

    render(){
        return(
   <Fragment>
           <Title title='首页'></Title>
    <div className='row'>
        <div className='col-md-12'>body</div>

    </div>

   </Fragment>
        )
    }
}
export default Home;

import React,{Component,Fragment} from 'react';
import Home from "./page/Home";
import {BrowserRouter, Route,Switch} from "react-router-dom";
import Layout from "./components/layuot";



function App() {
  return (
      <Fragment>
          <BrowserRouter>
          <Layout>
            <Switch>
              <Route path='/' exact component={Home}></Route>
           </Switch>
          </Layout>
          </BrowserRouter>
      </Fragment>


  );
}

export default App;

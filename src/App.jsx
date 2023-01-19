import React,{Component} from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import ShowUsers from "./components/ShowUsers";
import Users from "./components/Users";
import {route} from "./Router";
import "./App.css";
import EditUser from "./components/EditUser";

export default class App extends Component{
    
    constructor(props){
        super(props);
        this.id = window.localStorage.getItem('hash').split("/")[1];
        this.views = {
            home:<Home/>,
            showuser:<ShowUsers/>,
            createuser:<Users/>,
            ["edituser/"+this.id]:<EditUser userId={this.id}/>
        }

    }

    componentDidMount(){
        console.log("This method is Running from App.jsx")

    }

    renderViews = () => {
        console.log(route);
        return this.views[route];
    }

    render = () =>{
        
        return (
            <React.Fragment>
                <Header/>
                {this.renderViews()}
            </React.Fragment>
        )
    }
}


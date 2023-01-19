import React,{Component} from "react";

export default class Header extends Component{
    render = () =>{
        return (
            <div>
                <a href="#home">Home</a>
                <a href="#createuser">create User</a>
                <a href="#showuser">Show User</a>
            </div>
        )
    }
}
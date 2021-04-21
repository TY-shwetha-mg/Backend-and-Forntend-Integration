import React from 'react';
import { BrowserRouter as Router, Route, NavLink,Switch } from 'react-router-dom'

function Sample() {

    // function myFunction() {
    //     var x = document.getElementById("myInput");
    //     if (x.type === "password") {
    //       x.type = "text";
    //     } else {
    //       x.type = "password";
    //     }
    //   }

    return (
        <div>
            <form>
                <div className="form-group col-md-4 offset-md-4">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group col-md-4 offset-md-4">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="myInput" placeholder="Password" />
                </div>
                {/* <div class="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={myFunction} />
                    <label class="form-check-label" for="exampleCheck1" >Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-primary ">Sign in</button>
                <NavLink to="register">Create an account</NavLink>
                {/* <button className="btn btn-primary ml-4">Create an account</button> */}
            </form>
        </div>
    )
}

export default Sample

/**
 * Author: Kailash kumar
 */
import React from 'react';

class Sidebar extends React.Component {
    render() {

        return (
            <div className="side-menu">

                <nav className="navbar navbar-default" role="navigation">

                    <div className="side-menu-container">


                        <ul className="nav">
                            <li>
                                <input className="form-control" type="text" placeholder="Type something..."/>
                            </li>
                            <li><a href="#"><span className="glyphicon glyphicon-send"></span> Dashbaord</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-plane"></span> Seller</a></li>
                        </ul>
                    </div>
                </nav>

            </div>
        );
    }
}

export default Sidebar;
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header>
                <div className="consistent-header">
                    <h1>HEADER!!!!</h1>
                </div>
                <div className="links-box">
                    <NavLink exact to="/" className="home-link">Home</NavLink>
                    <NavLink to="/characters" className="main-page-link">Add New Character</NavLink>
                </div>
            </header>
         );
    }
}
 
export default Header;
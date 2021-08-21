import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header>
                <div className="consistent-header">
                    <h1>SPACE PEEPS!</h1>
                    <h2>Meet the peeps - Create your own peep!</h2>
                </div>
                <div className="links-box">
                    <NavLink exact to="/" className="home-link">Home</NavLink>
                    <NavLink to="/createCharacter" className="main-page-link">Add New Character</NavLink>
                </div>
            </header>
         );
    }
}
 
export default Header;
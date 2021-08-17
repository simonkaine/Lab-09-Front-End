import { Component } from 'react';
import { getCharacter } from './fetch-utils';

class CharacterDetails extends Component {
    state = {  }
    componentDidMount = async () => {
        const characterId = this.props.match.params.id;
        const characterData = await getCharacter(characterId);
        this.setState({ ...characterData });
    }
    render() { 
        return ( 
            <>
            <h1>{this.state.name}</h1>
            <span>Is this person bad?</span> { this.state.bad ? "Yes" : "No" }
            </>
         );
    }
}
 
export default CharacterDetails;
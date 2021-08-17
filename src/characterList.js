import { Component } from 'react';
import { getCharacters } from './fetch-utils';

class CharacterList extends Component {
    state = { characters: [] }
        componentDidMount = async () => {
            const CharacterData = await getCharacters();
            this.setState({ characters: CharacterData })
        }
    render() { 
        return ( 
            <>
            <h1>List Of Characters</h1>
            <div className="list-of-characters"> 
                {this.state.characters.map((char) =>
                <h3>{char.name}</h3>
                )}
            </div>
            </>
         );
    }
}
 
export default CharacterList;
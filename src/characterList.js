import { Component } from 'react';
import { getCharacters } from './fetch-utils';
import { Link } from 'react-router-dom';

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
                {this.state.characters.map((char) =>
                    <div className="list-of-characters"> 
                    <h3>
                        <Link to={`/characters/${char.id}`}>{char.name}</Link>
                    </h3>
                    </div>
                )}
            </>
         );
    }
}
 
export default CharacterList;
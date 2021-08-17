import { Component } from 'react';
import { getCharacter } from './fetch-utils';

class CharacterDetails extends Component {
    state = { id: 0, name: '', bad: true }
    componentDidMount = async () => {
        const characterId = this.props.match.params.id;
        const characterData = await getCharacter(characterId);
        this.setState({ ...characterData });
    }
    render() { 
        return ( 
            <>
            <h1>{this.state.name}</h1>
            {/* <span>Is this person bad?</span> { this.state.bad ? "Yes" : "No" } */}
                <form>
                    <div className="details-data">

                        <label>Is this person bad?</label>
                        <select onChange={(e) => {
                                this.setState({ bad: e.target.value });
                            }} value={this.state.bad ? "true" : "false"}>
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                        </select>
                        
                    </div>
                </form>
            </>
         );
    }
}
 
export default CharacterDetails;
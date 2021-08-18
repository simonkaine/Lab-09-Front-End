import { Component } from 'react';
import { getCharacter, getBreeds } from './fetch-utils';

class CharacterDetails extends Component {
    state = { id: 0, name: '', bad: false, species: '' }

    componentDidMount = async () => {
        const characterId = this.props.match.params.id;
        const characterData = await getCharacter(characterId);
        const speciesData = await getBreeds();
        this.setState({ ...characterData, speciesData });
        console.log(this.state)
    }

    render() { 
        return ( 
            <>
            <h1>{this.state.name}</h1>

                <form>

                    <div className="details-data">
                        <label>Character: </label>
                        <input onChange={(event) => {
                            this.setState({ name: event.target.value});
                        }} type="text" value={this.state.name}>
                        </input>
                    </div>

                    <div className="details-data">
                        <label>Is this person bad? </label>
                        <select 
                                value={this.state.bad}
                                onChange={ async (e) => {
                                await this.setState({ bad: e.target.value });
                            }}>
                                <option value={true}>yes</option>
                                <option value={false}>no</option>  
                        </select>
                    </div>

                    <div className="details-data">
                        <label>Species: </label>
                            <select onChange= { async (e) => {
                                await this.setState({ species: e.target.value }); 
                                }} value={this.state.species}>
                                <option value="human">Human</option>
                                <option value="plutonian">Plutonian</option>
                                <option value="martian">Martian</option>
                            </select>
                    </div>

                </form>
            </>
         );
    }
}
 
export default CharacterDetails;
import { Component } from 'react';
import {createCharacters, getBreeds} from './fetch-utils';

class CreateCharacter extends Component {
    state = { name: '', bad: false, species: '' }

    componentDidMount = async () => {
        // leave out character GetCharacter and update
        const speciesData = await getBreeds();
        this.setState({ speciesData });
    }

    getSpeciesId = () => {
        const speciesObject = this.state.speciesData.find(
            (breed) => breed.name === this.state.species
        );
        return speciesObject.id;
    }

    handleClickEvent = async (e) => {
        e.preventDefault()

        console.log(this.state.id)
        const newCharacterData = {
            name: this.state.name,
            bad: this.state.bad, 
            species_id: this.getSpeciesId() 
        };
        console.log(newCharacterData)
        await createCharacters(newCharacterData);
        this.props.history.push('/');
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

                    <button onClick={this.handleClickEvent}>Submit!</button>

                </form>
            </>
         );
    }
}
 
export default CreateCharacter;
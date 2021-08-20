import { Component } from 'react';
import { getCharacter, getBreeds, updateCharacter, deleteCharacter } from './fetch-utils';

class CharacterDetails extends Component {
    state = { id: 0, name: '', bad: false, species: '' }

    componentDidMount = async () => {
        const characterId = this.props.match.params.id;
        const characterData = await getCharacter(characterId);
        const speciesData = await getBreeds();
        this.setState({ ...characterData, speciesData });
        console.log(this.state)
    }

    getSpeciesId = () => {
        // get species id by mapping through speciesData, return it, use in handleclick
        const speciesObject = this.state.speciesData.find(
            (breed) => breed.name === this.state.species
        );
        return speciesObject.id;
    }

    handleClickEvent = async (e) => {
        e.preventDefault()
        // get the species_id from the list of breeds + enter it as value into new data set
        // gather up all my new species data from state
        console.log(this.state.id)
        const newCharacterData = {
            id: this.state.id,
            name: this.state.name,
            bad: this.state.bad, 
            species_id: this.getSpeciesId() 
        };
        await updateCharacter(newCharacterData);
    }

    handleDeleteEvent = async (e) => {
        e.preventDefault()
        console.log(this.state.id)
        const newCharacterData = {
            id: this.state.id,
            name: this.state.name,
            bad: this.state.bad, 
            species_id: this.getSpeciesId() 
        };
        await deleteCharacter(newCharacterData);
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
                    <button onClick={this.handleDeleteEvent}>DELETE</button>

                </form>
            </>
         );
    }
}
 
export default CharacterDetails;
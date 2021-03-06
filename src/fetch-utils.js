const URL = 'https://whispering-sands-41690.herokuapp.com';

export const getCharacters = async () => {
    const resp = await fetch(`${URL}/characters`);
    const data = await resp.json();
    return data;
};

export const getCharacter = async (id) => {
    const resp = await fetch(`${URL}/characters/${id}`);
    const data = await resp.json();
    return data;
};

export const getBreeds = async (id) => {
    const resp = await fetch(`${URL}/breeds`);
    const data = await resp.json();
    return data;
};

export const updateCharacter = async (charObject) => {
    const resp = await fetch(`${URL}/characters/${charObject.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(charObject),
    });
    const data = await resp.json();
    return data;
};

export const createCharacters = async (charObject) => {
    const resp = await fetch(`${URL}/characters/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(charObject),
    });
    const data = await resp.json();
    return data;
};

export const deleteCharacter = async (charObject) => {
    const resp = await fetch(`${URL}/characters/${charObject.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(charObject),
    });
    const data = await resp.json();
    return data;
};

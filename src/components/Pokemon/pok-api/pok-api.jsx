export function fetchPok(name) {
    return fetch(`http://pokeapi.co/api/v2/pokemon/${name}`).then(resp => {
        if (resp.ok) {
            return resp.json();
        }
        return Promise.reject(new Error(`There is no ${name} pokemon`));
    });
}
export async function load() {
    const response = await fetch(
        'https://fdnd.directus.app/items/person/238'
    );

    const data = await response.json();

    return {
        person: data.data
    };
}
export async function fetchData() {
    try {
        const url = 'https://restcountries.com/v3.1/all';
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error en el fetching de datos', error);
        throw error; // Re-throw the error so it can be caught by the caller
    }
}

// Call fetchData function to start fetching data
export const dataPromise = fetchData();

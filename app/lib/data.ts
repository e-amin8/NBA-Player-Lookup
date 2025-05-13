import { Games, SearchResult } from "./definitions";
// import { Player } from './definitions';

function getApiKey(): string {
    const key = process.env.KEY;
    console.log(key);
    if(!key) {
        throw new Error('API key error - check .env.local file');
    }

    return key;
}

export async function fetchSearch(query: string) {
    const res = await fetch(`/api/playerSearch?query=${query}`);
    if (!res.ok) throw new Error("Failed to fetch player data");
    const data = await res.json()
    console.log(data);
    return data.response || [];
}

export async function fetchID(id: number) {
    const url = 'https://api-nba-v1.p.rapidapi.com/players?id='+id;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': getApiKey(),
            'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
        }
    };

    const fetchIDy = async () => {
        const response = await fetch(url, options);
        const data: SearchResult = await response.json();

        console.log("Searching player ID: " + id);

        return data.response[0];
    }
    return fetchIDy();
}

export async function fetchPlayerSeasonStats(id: number, season: string) {
    const res = await fetch(`/api/seasonSearch?playerId=${id}&season=${season}`);
    if (!res.ok) throw new Error("Failed to fetch player stats");
    const data = await res.json();
    console.log("Returned season stats:", data); // <--- ADD THIS
    return data; // Assuming the response structure matches
}

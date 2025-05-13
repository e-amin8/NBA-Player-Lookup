import { Games, SearchResult } from "./definitions";
// import { Player } from './definitions';

export async function fetchSearch(query: string) {
    const url = 'https://api-nba-v1.p.rapidapi.com/players?search='+query;
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'efd5dad86amsh191b5ac339bfc84p14d357jsn06b7efbe421c',
		'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
	    }
    };

    const fetchSearchy = async () => {
        const response = await fetch(url, options);
        const data: SearchResult = await response.json();

        console.log("Searching query: " + query);

        return data.response;
    }
    return fetchSearchy();

}

export async function fetchID(id: number) {
    const url = 'https://api-nba-v1.p.rapidapi.com/players?id='+id;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'efd5dad86amsh191b5ac339bfc84p14d357jsn06b7efbe421c',
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
    const url = 'https://api-nba-v1.p.rapidapi.com/players/statistics?id=' + id + '&season=' + season;
    const options = {
	    method: 'GET',
	    headers: {
            'x-rapidapi-key': 'efd5dad86amsh191b5ac339bfc84p14d357jsn06b7efbe421c',
            'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
	    }
    };

    const fetchPlayerSeasonStatsy = async () => {
        const response = await fetch(url, options);
        const data = await response.json();
        const games: Games = data;
        console.log("Searching for stats (id: " + id + " season: " + season + ")");

        return games;
    }
    return fetchPlayerSeasonStatsy();
}

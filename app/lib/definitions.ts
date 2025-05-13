export interface SearchResult {
    results: number;
    response: [{
        id: number, 
        firstname: string, 
        lastname: string, 
        nba: {start: number, pro: number}, 
        height: {feets: number, inches: number, meters: number}, 
        weight: {pounds: number, kilograms: number}
    }];
}

export interface Player {
    id: number,
    firstname: string,
    lastname: string,
    nba: {start: number, pro: number}
    height: {feets: number, inches: number}, 
    weight: {pounds: number}
}

export interface Games {
    results: number;
    response: [{
        player: {id: number, firstname: string, lastname: string},
        team: {name: string, nickname: string, code: string},
        points: number,
        pos: string,
        min: string,
        fgm: number,
        fga: number,
        fgp: string,
        ftm: number,
        fta: number,
        ftp: string,
        tpm: number,
        tpa: number,
        tpp: string,
        offReb: number,
        defReb: number,
        totReb: number,
        assists: number,
        pFouls: number,
        steals: number,
        turnovers: number,
        blocks: number,
        plusMinus: string
    }];
}

export interface Averages {
    pointsAvg: number;
    assistsAvg: number;
    rebAvg: number;
}
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const playerId = searchParams.get(`playerId`);
    const season = searchParams.get('season');

    if (!playerId || !season) {
        return NextResponse.json({ error: 'Missing player id or season' }, { status: 400 });
    }

    try {
        const response = await fetch(`https://api-nba-v1.p.rapidapi.com/players/statistics?id=${playerId}&season=${season}`, {
            headers: {
                'x-rapidapi-key': process.env.KEY!,
                'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
            },
        });

        const data = await response.json();
        return NextResponse.json(data);
    } catch(error) {
        console.error('API error:', error);
        return NextResponse.json({ error: 'Failed to fetch player stats' }, { status: 500 });
    }
}
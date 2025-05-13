import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get(`query`);

    if(!query) {
        return NextResponse.json({ error: 'Missing query' }, { status: 400 });
    }

    try {
        const response = await fetch(`https://api-nba-v1.p.rapidapi.com/players?search=${query}`, {
            headers: {
                'x-rapidapi-key': process.env.KEY!,
                'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
            },
        });

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('API ERROR: ', error);
        return NextResponse.json({error: 'Failed to fetch data'}, {status: 500});
    }
}
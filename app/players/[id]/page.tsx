'use client';

import React, { useEffect, useState } from 'react';
import { fetchID, fetchPlayerSeasonStats } from '@/app/lib/data';
import { Player, Games, Averages } from '@/app/lib/definitions';
import { calcAverages } from '@/app/lib/utils';
import PlayerSeasonChart from '@/app/ui/PlayerSeasonChart';

interface PlayerDetailsProps {
  params: { id: string };
}

const PlayerDetails: React.FC<PlayerDetailsProps> = ({ params }) => {
  const playerId = parseInt(params.id, 10); // Convert id to a number

  const [season, setSeason] = useState<string>('2024'); // State for selected season
  const [stats, setStats] = useState<Games>(); // State for player stats
  const [averages, setAverages] = useState<Averages>();

  useEffect(() => {
    if (playerId && season) {
        // Fetch stats for player ID & season
        fetchPlayerSeasonStats(playerId, season)
            .then((data) => {
                setStats(data);
                setAverages(calcAverages(data));
            })
            .catch((error) => console.error('Error fetching player data: ', error));    
    }
  }, [playerId, season]);

  const seasons = ['2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015'];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-center font-bold mb-4">Statistics: {stats?.response[0].player.firstname + " " + stats?.response[0].player.lastname}</h1>
      <h2 className="font-bold mb-2">Select a season from the dropdown to view stats</h2>
      <div className="mt-4">
        <label htmlFor='season' className='mr-2'>Select Season:</label>
        <select
            id='season'
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            className='border rounded px-2 py-1'
        >
            <option value='' disabled>Select a season</option>
            {seasons.map((season) => (
                <option key={season} value={season}>{season}</option>
            ))}
        </select>
      </div>
      <div className="mb-32 mt-8 grid place-items-center text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 mx-auto">
        <div className="group rounded-lg border border-transparent text-center px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">Points</h2>
          <p className="m-0 max-w-[30ch] text-lg opacity-50">
            {averages?.pointsAvg}
          </p>
        </div>
        <div className="group rounded-lg border border-transparent text-center px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">Assists</h2>
          <p className="m-0 max-w-[30ch] text-lg opacity-50">
            {averages?.assistsAvg}
          </p>
        </div>
        <div className="group rounded-lg border border-transparent text-center px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">Rebounds</h2>
          <p className="m-0 max-w-[30ch] text-lg opacity-50">
            {averages?.rebAvg}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        {!stats ? (
            <p>Loading...</p>
        ): (
            <PlayerSeasonChart games={stats} />
        )}
      </div>
    </div>
  );
};

export default PlayerDetails;

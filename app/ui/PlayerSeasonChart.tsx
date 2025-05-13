'use client';

import React from 'react';
import { Games } from '../lib/definitions';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

interface PlayerSeasonChartProps {
    games: Games;
}

const PlayerSeasonChart: React.FC<PlayerSeasonChartProps> = ({ games }) => {

    const labels = games.response.map((_, index) => "Game " + index);
    const pointsData = games.response.map(game => game.points);
    const assistsData = games.response.map(game => game.assists);
    const rebData = games.response.map(game => game.totReb);


    const data = {
        labels,
        datasets: [
            {
                label: 'Points',
                data: pointsData,
                borderColor:'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
            {
                label: 'Assists',
                data: assistsData,
                borderColor: 'rgb(153, 102, 255)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
            },
            {
                label: 'Rebounds',
                data: rebData,
                borderColor: 'rgb(255, 159, 64)',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
            }
        ]
    };

    return (
        <div className="w-full h-96">
            <Line data={ data } />
        </div>
    );
};

export default PlayerSeasonChart;
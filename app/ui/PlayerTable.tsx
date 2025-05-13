import { useEffect, useState } from "react";
import { fetchSearch } from "../lib/data";
import { Player } from "../lib/definitions";
import Link from "next/link";

interface PlayerTableProps {
    query: string;
}

const PlayerTable: React.FC<PlayerTableProps> = ({ query }) => {
    const [players, setPlayers] = useState<Player[]>([]);

    useEffect(() => {
        const fetchy = async() => {
            setPlayers(await fetchSearch(query));
        };
        fetchy().catch((error) => console.error('Error fetching data: ', error));
    }, [query]);

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Year Drafted
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Height
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Weight
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {players.map((player) => (
                    <tr key={player.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <Link href={`/players/${player.id}`} className="text-indigo-600 hover:text-indigo-900">
                            {player.firstname + " " + player.lastname}
                        </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{player.nba.start}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{player.height.feets + "' " + player.height.inches}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{player.weight.pounds}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default PlayerTable;
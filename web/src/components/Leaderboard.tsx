import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { getGuildChannelStats } from '../services/neatqueue-service';
import { classNames } from '../util/tailwind';
import LeaderboardItem from './LeaderboardItem';
import DownloadCSV from './DownloadCSV';

type SortKey =
    | 'mmr'
    | 'wins'
    | 'losses'
    | 'totalgames'
    | 'streak'
    | 'peak_mmr'
    | 'peak_streak'
    | 'winrate';
const sortKeys: SortKey[] = [
    'mmr',
    'wins',
    'losses',
    'totalgames',
    'streak',
    'peak_mmr',
    'peak_streak',
    'winrate',
];
type StatsData = {
    mmr: number;
    wins: number;
    losses: number;
    totalgames: number;
    streak: number;
    peak_mmr: number;
    peak_streak: number;
    winrate: number;
};

type PlayerStat = {
    id: string;
    name: string;
    data: StatsData;
};

const isSortKey = (key: string): key is SortKey => {
    return sortKeys.includes(key as SortKey);
};

const displaySortKey = (key: string) => {
    if (key === 'mmr') return 'MMR';
    if (key === 'totalgames') return 'Games';
    if (key === 'winrate') return 'Win Rate';
    if (key === 'peak_mmr') return 'Peak MMR';
    if (key === 'peak_streak') return 'Peak Streak';
    if (key === 'streak') return 'Streak';
    if (key === 'wins') return 'Wins';
    if (key === 'losses') return 'Losses';

    return key;
};

const displaySortKeyMobile = (key: string) => {
    if (key === 'mmr') return 'MMR';
    if (key === 'totalgames') return 'Games';
    if (key === 'winrate') return 'WR';
    if (key === 'peak_mmr') return 'Peak MMR';
    if (key === 'peak_streak') return 'Peak Streak';
    if (key === 'streak') return 'Streak';
    if (key === 'wins') return 'Wins';
    if (key === 'losses') return 'Losses';

    return key;
};

const Leaderboard = ({
    passedGuildId = '',
    passedChannelId = '',
}: {
    passedGuildId?: string;
    passedChannelId?: string;
}) => {
    let { guildID, channelID } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const urlParamSort = searchParams.get('sort');

    const [month, setMonth] = useState('alltime');
    const [sortKey, setSortKey] = useState<SortKey>(
        urlParamSort && isSortKey(urlParamSort) ? urlParamSort : 'mmr'
    );
    const [stats, setStats] = useState<{ [month: string]: PlayerStat[] }>();

    if (guildID === undefined) guildID = passedGuildId;
    if (channelID === undefined) channelID = passedChannelId;

    useEffect(() => {
        if (guildID && channelID)
            getGuildChannelStats(guildID, channelID)
                .catch(() => console.log('Error fetching leaderboard data'))
                .then(setStats);
    }, []);

    useEffect(() => {
        if (stats) setMonth(Object.keys(stats)[0]);
    }, [stats]);

    const changeSort = (sortKey: SortKey) => {
        setSortKey(sortKey);
        let updatedSearchParams = new URLSearchParams(searchParams.toString());
        updatedSearchParams.set('sort', sortKey.toLowerCase());
        setSearchParams(updatedSearchParams.toString());
    };

    const scrollChangeSort = (scrollRight: boolean) => {
        const idx = sortKeys.indexOf(sortKey);
        const nextIdx = scrollRight
            ? (idx + 1) % sortKeys.length
            : (idx - 1 + sortKeys.length) % sortKeys.length;
        changeSort(sortKeys[nextIdx]);
    };

    const dateOptions = { year: 'numeric', month: 'short' };

    return (
        <div className="grid grid-cols-10 mx-auto max-w-7xl min-h-screen">
            <div className="col-span-1">
                <ul className="grid-cols-1 text-center md:grid hidden">
                    {stats &&
                        Object.keys(stats).length > 1 &&
                        Object.keys(stats).map((m) => (
                            <li
                                key={m}
                                onClick={() => setMonth(m)}
                                className={classNames(
                                    month === m
                                        ? 'bg-red-500/80'
                                        : 'bg-violet-900/80',
                                    'px-2 py-1 shadow-xl text-lg mb-1 mr-3 cursor-pointer'
                                )}
                            >
                                <h1>
                                    {m === 'alltime'
                                        ? 'All Time'
                                        : new Date(
                                              m + '-15'
                                          ).toLocaleDateString(
                                              'en-US',
                                              /* @ts-ignore */
                                              dateOptions
                                          )}
                                </h1>
                            </li>
                        ))}
                </ul>
            </div>

            <div className="col-span-8">
                <div className="md:flex hidden flex-row mb-3 justify-center gap-1">
                    {sortKeys.map((key) => (
                        <button
                            key={key}
                            onClick={() => changeSort(key)}
                            className={classNames(
                                'btn-primary',
                                sortKey === key ? 'translate-y-1' : ''
                            )}
                        >
                            <h1>{displaySortKey(key)}</h1>
                        </button>
                    ))}
                    <DownloadCSV data={stats} />
                </div>

                <div className="md:hidden flex flex-row mb-3 justify-center gap-1">
                    <button
                        className="btn-primary"
                        onClick={() => scrollChangeSort(false)}
                    >
                        {'<'}
                    </button>
                    <div className="btn-style">
                        {displaySortKeyMobile(sortKey)}
                    </div>
                    <button
                        className="btn-primary"
                        onClick={() => scrollChangeSort(true)}
                    >
                        {'>'}
                    </button>
                    <div className="ml-4">
                        <DownloadCSV data={stats} />
                    </div>
                </div>

                <div className="bg-violet-900/80 px-3 py-3 font-medium flex flex-row text-lg mb-3 shadow-xl rounded">
                    <div className="my-auto mx-3 basis-5">
                        <div />
                    </div>
                    <h1
                        className={`${sortKey === 'mmr' ? 'basis-2/4' : 'basis-3/4'}`}
                    >
                        Name
                    </h1>
                    {sortKey === 'mmr' && <h1 className="basis-1/4">MMR</h1>}
                    <h3 className="basis-1/4 md:block hidden">
                        {sortKey === 'mmr'
                            ? 'Win - Loss'
                            : displaySortKey(sortKey)}
                    </h3>
                    <h3 className="basis-1/4 md:hidden block">
                        {sortKey === 'mmr'
                            ? 'W/L'
                            : displaySortKeyMobile(sortKey)}
                    </h3>
                </div>
                {stats &&
                    stats[month] !== undefined &&
                    stats[month]
                        .sort((a, b) => b?.data[sortKey] - a?.data[sortKey])
                        .map((player: any, idx: number) => (
                            <LeaderboardItem
                                key={`${player.id}-${sortKey}`}
                                sortKey={sortKey}
                                rank={idx + 1}
                                player={player}
                            />
                        ))}
            </div>
        </div>
    );
};

export default Leaderboard;

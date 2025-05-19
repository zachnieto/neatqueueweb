import { Parser } from '@json2csv/plainjs';

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

const DownloadCsv = ({ data }: { data: any }) => {
    const handleDownload = () => {
        try {
            // Sync parsing should be fine until theres a 20k+ players fetch
            const parser = new Parser();

            const unwindData = data['alltime'].map((player: PlayerStat) => {
                return {
                    id: player.id,
                    name: player.name,
                    ...player.data,
                };
            });

            const csv = parser.parse(unwindData);

            const blob = new Blob([csv], { type: 'text/csv' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'lb_data.csv';
            document.body.appendChild(a);
            a.click(); // Firefox support

            setTimeout(() => {
                URL.revokeObjectURL(url);
                document.body.removeChild(a);
            }, 100);
        } catch (err) {
            console.error('CSV parsing failed:', err);
        }
    };

    return (
        <button className="btn-primary" onClick={handleDownload}>
            CSV
        </button>
    );
};

export default DownloadCsv;

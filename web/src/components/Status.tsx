import { useEffect, useState } from 'react';
import { getStatus } from '../services/neatqueue-service';
import { NodeStatus } from '../types';

const Status = () => {
    const [statuses, setStatuses] = useState<NodeStatus[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [overallStatus, setOverallStatus] = useState<string>('HEALTHY');
    const [overallStatusColor, setOverallStatusColor] =
        useState<string>('text-yellow-400');

    useEffect(() => {
        getStatus()
            .then(setStatuses)
            .catch(() => setStatuses([]))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        const healthies = statuses.filter((s) => s.status === 'ONLINE').length;

        if (healthies === statuses.length) {
            setOverallStatus('Healthy');
            setOverallStatusColor('text-green-400');
        } else if (healthies === 0) {
            setOverallStatus('Offline');
            setOverallStatusColor('text-red-400');
        } else {
            setOverallStatus('Degraded');
            setOverallStatusColor('text-yellow-400');
        }
    }, [statuses]);

    return (
        <div className="h-screen flex justify-center items-center">
            {!loading && (
                <div className="flex flex-col items-center gap-5">
                    <h1 className="w-fit text-6xl text-center bg-black/75 p-10 rounded-xl">
                        Status:{' '}
                        <span className={overallStatusColor}>
                            {overallStatus}
                        </span>
                    </h1>

                    <div className="flex justify-around items-center gap-5">
                        {statuses.map((status) => (
                            <div className="text-6xl text-center bg-black/75 p-10 rounded-xl">
                                <h1>Node {status.id}</h1>
                                <h1
                                    className={
                                        status.status === 'ONLINE'
                                            ? 'text-green-400'
                                            : 'text-red-400'
                                    }
                                >
                                    {status.status}
                                </h1>
                                <h1 className="text-3xl">
                                    Shards: {status.shards}
                                </h1>
                                <h1 className="text-3xl">
                                    Servers: {status.guilds}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Status;

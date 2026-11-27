import { useState, useEffect } from 'react';

const SystemBanner=()=> {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="system-banner">

            <div>
                <h3>Public Infrastructure Issue Prioritization Platform</h3>
                <p>Monitor and prioritize public infrastructure issues</p>
            </div>

            <div className="system-info">
                <p>🟢 System Online</p>

                <p>
                    {time.toLocaleDateString()}
                </p>

                <p>
                    {time.toLocaleTimeString()}
                </p>
            </div>

        </div>
    );
}

export default SystemBanner;
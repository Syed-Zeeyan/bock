import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';

const Reels = () => {
    const [reels, setReels] = useState([]);
    const { user } = useSelector(store => store.auth);

    useEffect(() => {
        fetchReels();
    }, []);

    const fetchReels = async () => {
        try {
            // const res = await axios.get('http://localhost:8000/api/v1/reels');
            const res = await axios.get(`${process.env.BASE_URL}/reels`);

            setReels(res.data.reels);
        } catch (error) {
            console.error("Error fetching reels:", error);
        }
    };

    return (
        <div className="reels-container p-4">
            {reels.map((reel) => (
                <div key={reel._id} className="reel mb-8">
                    <div className="video-container">
                        <ReactPlayer
                            url={reel.videoUrl}
                            controls
                            width="100%"
                            height="auto"
                        />
                    </div>
                    <div className="reel-actions mt-2 flex gap-4">
                        <button>Like</button>
                        <button>Comment</button>
                        <button>Share</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Reels;
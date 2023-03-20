import { useState, useEffect } from 'react';

function VideoLikes({ videoId, apiKey }) {
    const [likes, setLikes] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchLikes() {
        try {
            setLoading(true);
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${apiKey}`
            );
            const data = await response.json();
            return data.items[0].statistics.likeCount;
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchLikes().then(newLikes => {
            setLikes(newLikes);
        });
    }, [videoId, apiKey]);

    function handleRecountLikes() {
        fetchLikes().then(newLikes => {
            if (newLikes > likes) {
                alert('Likes increased!');
            }
            setLikes(newLikes);
        });
    }

    return (
        <div>
            <p>Total Likes: {likes !== null ? likes : 'Loading...'}</p>
            <button onClick={handleRecountLikes} disabled={loading}>
                {loading ? 'Recounting Likes...' : 'Recount Likes'}
            </button>
        </div>
    );
}

export default VideoLikes;

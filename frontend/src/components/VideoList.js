import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/videos/')
      .then(response => {
        setVideos(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the videos!', error);
      });
  }, []);

  return (
    <div>
      <h1>Video List</h1>
      <ul>
        {videos.map(video => (
          <li key={video.id}>
            <h2>{video.title}</h2>
            <p>{video.description}</p>
            <video width="320" height="240" controls>
              <source src={video.video_file} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;

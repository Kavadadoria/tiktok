import axios from './axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './Video';

function App() {
//   const [videos, setVideos] = useState([]);

// useEffect(() => {
//   async function fetchPosts() {
//     const response = await axios.get("/v2/posts");
//     setVideos(response.data);

//     return response;
//   }

//   fetchPosts();
// }, []);

// console.log(videos);

  return (
    // BEM naming convention
    <div className="app">
     <div className="app__videos">
        <Video url="https://player.vimeo.com/external/467819715.sd.mp4?s=a26407997e8fee5bf0bd73c4ebc95938f2be1fdf&profile_id=165&oauth2_token_id=57447761="
        channel="khushbuvadadoria"
        description="YOOO this works!"
        song="99 problems but REACT AINT ONE!"
        likes={123}
        messages={456}
        shares={789}
      />
        <Video url="https://player.vimeo.com/external/467819715.sd.mp4?s=a26407997e8fee5bf0bd73c4ebc95938f2be1fdf&profile_id=165&oauth2_token_id=57447761="
        channel="khushbuvadadoria"
        description="YOOO this works!"
        song="99 problems but REACT AINT ONE!"
        likes={999}
        messages={456}
        shares={789}
      />
      </div>

      

      
    </div>
  );
}

export default App;

import React from 'react';
import {useParams} from "react-router-dom";

const SingleMovie = () => {
  const { id } = useParams();
  return (
    <>
    <div>
      Our Single Movie {id}
      The Titanic movie is a blockbuster film directed, written, co-produced, and co-edited by James Cameron. It was released in 1997 and is considered one of the most successful and iconic films in the history of cinema. The movie blends a fictional love story with real-life events surrounding the tragic sinking of the RMS Titanic, which was a British passenger liner that famously sank on its maiden voyage in April 1912.
      </div>
      </>
  );
  
}

export default SingleMovie
import React, { useEffect, useState } from 'react';
import "./GridLayout.css"
import MovieCard from '../MovieCard/MovieCard';
import axios from 'axios';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
import InfiniteScroll from 'react-infinite-scroll-component';
import TopLoader from '../TopLoader/TopLoader';
import Spinner from '../Spinner/Spinner';
import TagFacesSharpIcon from '@mui/icons-material/TagFacesSharp';
import WavingHandIcon from '@mui/icons-material/WavingHand';

const serverURL = process.env.REACT_APP_NODEJS_URL;

const GridLayout = (props) => {

  // regular variables
  let offset = 0;

  // states
  const [ data, setData ] = useState([]);
  const [ progress, setProgress ] = useState(10)
  const [ limit, setLimit ] = useState(12);
  const [ hasMore, setHasMore ] = useState(true);

  const loadMore = () => {
    setProgress(40)
    setLimit(2*limit);
    axios.get(`${serverURL}/movies/all?limit=${limit*2}&offset=${offset}`).then((response) => {
      setData(response.data.data);
      setProgress(100)
      if(response.data.data.length < limit){
        setHasMore(false);
      }
    })
  }


  useEffect(() => {
    setProgress(40)
    axios.get(`${serverURL}/movies/all?limit=${limit}&offset=${offset}`).then((response) => {
      setData(response.data.data);
      setProgress(100)
    })
  }, []);

  return (
    <>
    <TopLoader progress={progress} setProgress={setProgress} />
    <div className='spacing-container'>
    </div>
    <InfiniteScroll
      dataLength={data.length+100} //This is important field to render the next data
      next={loadMore}
      hasMore={hasMore}
      loader={<Spinner />}
      endMessage={
        <p style={{ textAlign: 'center', fontSize:"2rem", paddingTop:"3rem", paddingBottom:"3rem", color:"white", backgroundColor:"#262525", justifyContent:"center", alignItems:"center" }}>
          <TagFacesSharpIcon style={{ fontSize:"5rem"}} /><WavingHandIcon style={{ fontSize:"3rem", marginLeft:"0.3rem"}}  />
        </p>
      }
    >
     <div className="wrapper">
        {data.map((item, index)=>{
          return <MovieCard key={item._id} movie={{...item}} />
        })}
    </div> 
    </InfiniteScroll>
    </>
  )
}

export default GridLayout

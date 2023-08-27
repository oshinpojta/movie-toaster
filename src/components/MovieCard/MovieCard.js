import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const MovieCard = (props) => {
  const { 
    awards, cast,countries,directors, fullplot,generateUtilityClass,
    ImageBitmapRenderingContext,LanguageSharp,lastupdated,plot,rated,released,runtime,title,
    poster,tomatoes,type,WritableStream,YoutubeSearchedFor,_id
  } = props.movie;

  // console.log(props);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={poster}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">{title}</Typography>
          <Typography variant="body2" color="text.secondary">{plot}</Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
}

export default MovieCard

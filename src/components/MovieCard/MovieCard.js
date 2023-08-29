import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import "./MovieCard.css"
import DeleteBtn from '../DeleteModal/DeleteBtn';
import EditForm from '../EditModal/EditForm';

const MovieCard = (props) => {

  const { plot,title,poster,_id } = props.movie;

  const { isBookmarked, isFavorite, handleBookmarks, handleFavorites, handleDelete } = props.properties;

  return (
    <Card sx={{ maxWidth: 350 }} className='movie-card'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={poster}
          alt={title}
        />
        <CardContent className='card-content'>
          <Typography gutterBottom variant="h5" component="div">{title}</Typography>
          <Typography fontSize="small" variant="body2" color="text.secondary">{plot}</Typography>
        </CardContent>
      </CardActionArea>
      <div>
        <CardActions className='card-action'>
          {isFavorite? <FavoriteIcon fontSize='large' className='favourite-icon' onClick={() => handleFavorites(_id)} /> : <FavoriteBorderIcon fontSize='large' className='favourite-saved-icon' onClick={() => handleFavorites(_id)} />}
          {isBookmarked? <BookmarkAddedIcon fontSize='large' className='list-saved-icon' onClick={() => handleBookmarks(_id)} /> : <BookmarkAddIcon fontSize='large' className='list-icon' onClick={() => handleBookmarks(_id)} />}
          <EditForm movie={props.movie} />
          <DeleteBtn _id={_id} handleDelete={handleDelete} />
        </CardActions>
      </div>
    </Card>
  );
}

export default MovieCard

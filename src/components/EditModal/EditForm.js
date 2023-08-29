import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import "./EditForm.css";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 750,
  height : 800,
  bgcolor: 'background.paper',
//   border: '2px solid #000',
  boxShadow: 34,
  p: 2,
  borderRadius : '2% 4%',
  margin : "4rem",
  overflow : "scroll",
  textAlign : "center",
  fontFamily: "monospace"
};

export default function EditForm(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { 
    _id ,title, genres, plot, awards, cast,countries,directors, fullplot,generateUtilityClass,
    ImageBitmapRenderingContext,LanguageSharp,lastupdated,rated,released,runtime,
    poster,tomatoes,type,WritableStream,YoutubeSearchedFor
  } = props.movie;

  return (
    <div className='edit-container'>

        {/* edit icon */}
      <BorderColorIcon fontSize='large' className='edit-icon' onClick={handleOpen} />
      
       {/* open modal */}
      <Modal 
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='edit-modal'
      >
        <Box className="edit-box" sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h1><strong>Edit Movie Details</strong></h1>
          </Typography>
          <Typography className='edit-form-typography' id="modal-modal-description" sx={{ mt: 2 }}>
            <form className='edit-form'>
                <label>Title</label>
                <input type='text' value={title} placeholder='Title'/>
                <label>Full Plot</label>
                <textarea rows="10" cols="110">{fullplot}</textarea>
                <label>Cast</label>
                <input type='text' value={cast.toString()} placeholder='Cast'/>
                <label>Poster URL</label>
                <input type='text' value={poster} placeholder='Poster URL'/>
                <label>Rated</label>
                <input type='text' value={rated} placeholder='Rated'/>
                <label>Directors</label>
                <input type='text' value={directors.toString()} placeholder='Directors'/>
                <label>Type</label>
                <input type='text' value={type} placeholder='Type'/>
                <label>Runtime</label>
                <input type='text' value={runtime} placeholder='Runtime'/>
                <label>Countries</label>
                <input type='text' value={countries.toString()} placeholder='Countries'/>
                <label>Genres</label>
                <input type='text' value={genres.toString()} placeholder='Genres'/>
                <label>Released On</label>
                <input type='datetime-local' value={new Date(released).toISOString().slice(0,19)} placeholder='Released On'/>
                <div className='form-buttons'>
                    <input type="button" className='cancel' value="Cancel" />
                    <input type="button" className='save' value="Save" />
                </div>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import "./AddForm.css";
import AppContext from '../../contexts/AppContext';
import axios from 'axios';

const serverURL = process.env.REACT_APP_NODEJS_URL;

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
  fontFamily: "monospace",
  "@media screen and (max-width : 900px)" : {
    top: '25%',
    left: '25%',
    transform: 'translate(-30%, -25%)',
    width: 500,
    height : 650
  },
  "@media screen and (max-width : 600px)" : {
    top: '28%',
    left: '22%',
    transform: 'translate(-30%, -30%)',
    width: 400,
    height : 550
  }
}

const addButtonStyle = {
  width : "60px",
  height: "60px",
  color:"crimson",
  // marginLeft : "1rem",
  position:"relative",
  transition : "0.4s ease",
  '&:hover': {
    color: "#b00089",
    width:"63px",
    height:"63px"
 },
 "@media screen and (max-width : 700px)" : {
    width:"50px",
    height:"50px",
    // marginLeft : "3rem",
 }
}

export default function AddForm(props) {

  const { setProgress, getMovies } = React.useContext(AppContext);
  const [open, setOpen] = React.useState(false);
  const [ formState, setFormState ] = React.useState({
    title:"", 
    genres : "", awards : "", 
    languages : "", cast : "",
    countries : "",directors :"", 
    fullplot : "",rated : "",
    released : "",runtime : "",
    poster : "",type : ""
  });

  const { title, genres, awards, languages, cast,countries,directors, fullplot,rated,released,runtime,
    poster,type
  } = formState;


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCancel = () => setOpen(false);
  const handleUpdate = () => {

    let body = {...formState};
    body.countries = typeof body.countries === "string" ? body.countries.split(",").map((item) => item.trim()) : body.countries;
    body.directors = typeof body.directors === "string" ? body.directors.split(",").map((item) => item.trim()) : body.directors;
    body.genres = typeof body.genres === "string" ? body.genres.split(",").map((item) => item.trim()) : body.genres;
    body.cast = typeof body.cast === "string" ? body.cast.split(",").map((item) => item.trim()) : body.cast;
    body.languages = typeof body.languages === "string" ? body.languages.split(",").map((item) => item.trim()) : body.languages;
    body.plot = body.fullplot.slice(0, body.fullplot.length > 200 ? 195: body.fullplot.length) + (body.fullplot.length > 200 ? " ...": "");

    setProgress(10);
    axios.post(`${serverURL}/movies/add`, body).then( response => {
      if(response && response.data.data) { 
        console.log(response.data);
        getMovies()
        setOpen(false);
      };
    }).catch( err  => {
      console.log(err)
      setProgress(100);
    })
  }

  return (
    <div className='add-container'>

        {/* add icon */}
        <div>
          <AddCircleOutlineIcon fontSize='large' className='edit-icon' onClick={handleOpen} sx={addButtonStyle} />
        </div>
      
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
            <h1><strong>Add Movie Details</strong></h1>
          </Typography>
          <Typography className='edit-form-typography' id="modal-modal-description" sx={{ mt: 2 }}>
            <form className='edit-form'>
                <label>Title</label>
                <input type='text' value={title} id="updateTitle" placeholder='Title' onChange={(e) => setFormState({ ...formState, title : e.target.value })}/>
                <label>Full Plot</label>
                <textarea rows="10" cols="110" id="updateTextArea" defaultValue={fullplot} onChange={(e) => setFormState({ ...formState, fullplot : e.target.value })} ></textarea>
                <label>Cast</label>
                <input type='text' id="updateCast" value={cast ? cast.toString() : ""} placeholder='Cast' onChange={(e) => setFormState({ ...formState, cast : e.target.value })}/>
                <label>Languages</label>
                <input type='text' id="updateLanguage" value={languages ? languages.toString() : ""} placeholder='Languages' onChange={(e) => setFormState({ ...formState, languages : e.target.value })}/>
                <label>Poster URL</label>
                <input type='text' value={poster} placeholder='Poster URL' onChange={(e) => setFormState({ ...formState, poster : e.target.value })}/>
                <label>Rated</label>
                <input type='text' value={rated} placeholder='Rated' onChange={(e) => setFormState({ ...formState, rated : e.target.value })}/>
                <label>Directors</label>
                <input type='text' value={directors ? directors.toString() : ""} placeholder='Directors' onChange={(e) => setFormState({ ...formState, directors : e.target.value })}/>
                <label>Type</label>
                <input type='text' value={type} placeholder='Type' onChange={(e) => setFormState({ ...formState, type : e.target.value })}/>
                <label>Runtime</label>
                <input type='text' value={runtime} placeholder='Runtime' onChange={(e) => setFormState({ ...formState, runtime : e.target.value })}/>
                <label>Countries</label>
                <input type='text' value={countries ? countries.toString() : ""} placeholder='Countries' onChange={(e) => setFormState({ ...formState, countries : e.target.value })}/>
                <label>Genres</label>
                <input type='text' value={genres ? genres.toString() : ""} placeholder='Genres' onChange={(e) => setFormState({ ...formState, genres : e.target.value })}/>
                <label>Released On</label>
                <input type='datetime-local' value={ released ? new Date(released).toISOString().slice(0,19) : ""} placeholder='Released On' onChange={(e) => setFormState({ ...formState, released : e.target.value })}/>
                <div className='form-buttons'>
                    <input type="button" className='cancel' value="Cancel" onClick={handleCancel} />
                    <input type="button" className='save' value="Add Movie" onClick={() => handleUpdate()}/>
                </div>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

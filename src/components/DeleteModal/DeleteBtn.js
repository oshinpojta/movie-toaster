import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import "./DeleteBtn.css"

const DeleteBtn = (props) => {

    const { _id, handleDelete } = props;

  return (
    <>
        <DeleteIcon fontSize='large' className='delete-icon' data-bs-toggle="modal" data-bs-target="#exampleModal"  />
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Are you sure you want to delete this ?</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => handleDelete(_id)}>Confirm</button>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default DeleteBtn

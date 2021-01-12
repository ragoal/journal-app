import React from 'react'
import { startSaveNote, startUploading } from '../../actions/notes'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes)
    const handleSave = ()=>{
        dispatch(startSaveNote(active));
        Swal.fire({
            position: 'top-right',
            icon: 'success',
            title: 'Note saved',
            width: 200,            
            imageHeight: 200,
            imageWidth:200,
            showConfirmButton: false,
            timer: 1500
          })
    }

    const handlePictureClick = ()=>{
        document.querySelector('#fileSelector').click();
    }
    const handleFileChange = (e)=>{
        const file = e.target.files[0];
        if (file){
            dispatch(startUploading(file));
        }
        
    }

    return (
        <div className="notes__appbar">
            <span>28 ago 2020</span>

            <input  
                    id="fileSelector"
                    type="file"
                    style={{display:'none'}}
                    onChange={handleFileChange}
            />

            <div>
                <button 
                    className="btn"
                    onClick={handlePictureClick}
                >
                    Picture
                </button>
                <button 
                    className="btn"
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    )
}

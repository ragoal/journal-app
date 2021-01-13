import { db } from "../firebase/firebase-config";
//import { useState } from "react";
import { types } from "../types/types";
import { loadNotes } from "../helpers/loadNotes";
import { fileUpload } from "../helpers/fileUpload";
import Swal from "sweetalert2";
//import { authReducer } from "../reducers/authReducer";



export const startNewNote = ()=>{
    
    return async (dispatch, getState)=>{
        
        const {uid} = getState().auth
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }
        const doc = await db.collection(`${ uid }/journal/notes`).add(newNote);
        dispatch(activateNote(doc.id, newNote));
        dispatch(pushNewNote(doc.id, newNote));
    }  
}

export const pushNewNote = (id, note)=>({
    type:types.notesAddNew,
    payload:{
        id,
        ...note
    }
})

export const activateNote = (id, note)=>({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }

})

export const startLoadingNotes = (uid)=>{
    return async (dispatch)=>{
        const notes = await loadNotes(uid);
        
        dispatch(setNotes(notes));
    }
}

export const setNotes = (notes)=>({
    type: types.notesLoad,
    payload: notes
})


export const startSaveNote =  (note) =>{
    return  async(dispatch, getState)=>{

        const {uid} = getState().auth;
        if (!note.url){
            delete note.url;
        }

        const noteToFirestore = {...note};
        delete noteToFirestore.id;
        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
        dispatch(refreshNote(note.id, noteToFirestore));
    }
}

export const refreshNote = (id, note)=>({
    type: types.notesUpdated,
    payload:{
        id,
        note: {...note , id}
    }
})

export const startUploading = (file)=>{
    return async (dispatch, getState)=>{
            const {active:activeNote} = getState().notes;

            Swal.fire({
                title:'Uploading...',
                text:'Please wait...',
                allowOutsideClick:false,
                showConfirmButton: false,
                timer: 1500,
                onBeforeOpen:()=>{
                    Swal.showLoading();
                }
            });

            const fileUrl = await fileUpload(file);
            activeNote.url = fileUrl;
            dispatch(startSaveNote(activeNote))

            Swal.close();
            Swal.fire({
                imageUrl: fileUrl,
                icon: 'success',
                title: 'Image saved', 
                showConfirmButton: false,
                timer: 1500               
            })
    }
}

export const startDeleting = (id)=>{
    return async (dispatch, getState)=>{
        const uid = getState().auth.uid;

        await db.doc(`${uid}/journal/notes/${id}`).delete();

        dispatch(deleteNote(id));
        Swal.fire({
            title:'Note delete',
            icon:'info',
            width: 200,
            timer:500,
            showConfirmButton:false
        })

    }
}

export const deleteNote = (id)=>({
    type:types.notesDelete,
    payload: id
})

export const logoutNotesCleaning = ()=>({
    type: types.notesLogoutCleaning
})
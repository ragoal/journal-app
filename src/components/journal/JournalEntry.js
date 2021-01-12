import React from 'react'
import moment from 'moment'
import { activateNote } from '../../actions/notes';
import { useDispatch } from 'react-redux';

export const JournalEntry = ({id, date, title, body, url}) => {
    
    const noteDate = moment(date);
    const dispatch = useDispatch()

    const handleNoteClick = ()=>{
        dispatch(activateNote(id, {date, title, body, url}))
    }


    return (
        <div 
            className="journal__entry pointer"
            onClick={handleNoteClick}
        >
           { url &&
                <div 
                        className="journal__entry-picture"
                        style={{
                                backgroundSize:'cover',
                                backgroundImage:`url(${url})`
                            }}

                >
                </div>
           }
           <div className="journal__entry-body">
                <p className="journal__entry-title">
                    { title }
                </p>
                <p className="journal__entry-content">
                    { body }
                </p>
           </div>
           <div className="journal__entry-date-box">
                <span>
                   { noteDate.locale('es').format('dddd')}
                </span>
                <h4>{ noteDate.locale('es').format('Do')}</h4>

           </div>
        </div>
    )
}

import React from 'react'
import './EmailRow.css'

import { useNavigate } from 'react-router-dom'; //router dom V.6 //
import { useDispatch } from 'react-redux';
import { selectEmail } from './features/emailSlice';

import { Checkbox, IconButton } from '@mui/material'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';

function EmailRow({ id, subject, message, time }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();//
    //emailslice
    const openEmail = () => {
        dispatch(selectEmail({ id, subject, message, time }));
        // click openEmail to go each Email page
        navigate('/email')
    }

    return (
        <div onClick={openEmail} className="emailRow">
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarOutlineIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>
            
            <div className="emailRow__subject">
                <h3>{subject}</h3>
            </div>
            <div className="emailRow__message">
                <h4>{message}</h4>
            </div>
            <div className="emailRow__time" >
                <h4>{time}</h4>
            </div>
            
        </div>

    )
}
export default EmailRow
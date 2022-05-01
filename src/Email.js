import React from 'react';
import './Email.css';
import { useNavigate } from 'react-router-dom';

import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { selectOpenEmail } from './features/emailSlice';
import { useSelector } from 'react-redux';

function Email() {
  //after setup Emailrows nevigate > then change hard caode of email display with emailslice
  const navigate = useNavigate();

  const openedEmail = useSelector(selectOpenEmail)

  const goBackToEmailList = () => {
    navigate('/')
  }

  return (
    <div className="email">
      <div className="email__tools">
        <div className="email__toolsLeft">
          <IconButton onClick={goBackToEmailList}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="email__toolsRight">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>

      <div className="email__body">
        <div className="email__bodyHeader">
          <h2>{openedEmail?.subject}</h2>
          <LabelImportantIcon className='email__important' />
        <p className='email__time'>{openedEmail?.time }</p>
        </div>
        <div className="email__message">
          <p>{openedEmail?.message}</p>
        </div>
      </div>
    </div>
    )
}

export default Email
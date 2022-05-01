import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/emailSlice';

import { Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';

function Sidebar() {
    const dispatch = useDispatch();


    return (
        <div className="sidebar">
            <Button
                onClick={() => dispatch(openSendMessage())}
                startIcon={<AddIcon fontSize='large' />}
                className='sidebar__compose'           
            >
                COMPOSE
            </Button>
            <div className="sidebar__sidebarOption">
                <SidebarOption Icon={InboxIcon} title='Inbox' number={54} selected={ true }/>
                <SidebarOption
                    Icon={StarIcon}
                    title='Starred'
                    number={12} />
                <SidebarOption
                    Icon={AccessTimeIcon}
                    title='Snoozed'
                    number={2} />
                <SidebarOption
                    Icon={LabelImportantIcon}
                    title='Important' 
                    number={20} />
                <SidebarOption
                    Icon={SendIcon}
                    title='Sent'
                    number={18} />
                <SidebarOption
                    Icon={InsertDriveFileIcon}
                    title='Drafts'
                    number={2} />
                <SidebarOption
                    Icon={ExpandMoreIcon}
                    title='More' />
            </div>
            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>

                </div>
            </div>
        </div>
    )
}

export default Sidebar
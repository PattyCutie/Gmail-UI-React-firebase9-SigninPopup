import React from 'react';
import './Header.css';

import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import { useDispatch, useSelector } from 'react-redux';
import { auth, signOut } from './firebase';
import { selectUser, logout} from './features/userSlice';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  // user sign out
  const signOutOfApp = () => {
    signOut(auth).then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className='header'>
      <div className='header__left'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
          alt=""
        />
        <h6>CLONE</h6>
      </div>

      <div className='header__middle'>
        <SearchIcon className='header__searchIcon' />
        <input
          type="text"
          placeholder='Search mail'          
        />
        <IconButton>
          <ArrowDropDownIcon className='header__inputCaret' />
        </IconButton>
      </div>

      <div className='header__right'>
        <IconButton>
          <AppsIcon className='header__appIcon' />
        </IconButton>
        <IconButton>
          <NotificationsIcon className='header__notify' />
        </IconButton>
        <IconButton>
          <SettingsIcon className='header__setting' />
        </IconButton>
        <IconButton onClick={signOutOfApp}>
          <Avatar className='header__avatar' src={user?.photoUrl}  />
        </IconButton>
      </div>
    </div>
  )
}

export default Header
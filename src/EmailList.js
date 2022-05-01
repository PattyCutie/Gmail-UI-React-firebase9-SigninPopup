import React, { useEffect, useState } from 'react';
import Section from './Section'
import './EmailList.css';

import { Checkbox, IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RedoIcon from '@mui/icons-material/Redo';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import SellIcon from '@mui/icons-material/Sell';
import EmailRow from './EmailRow';
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  db,
} from './firebase';

function EmailList() {
  const [emails, setEmails] = useState([]);
  const colRef = collection(db, 'emails');
  const q = query(colRef, orderBy('timestamp', 'desc'));

  //get post once on page reload
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setEmails(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="emailList__settingRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={InboxIcon} title='Primary' color='red' selected />
        <Section Icon={PeopleIcon} title='Social' color='#1a73e8' />
        <Section Icon={SellIcon} title='Promotions' color='green' />
      </div>

      <div className="emaiList__list">
        {emails.map(({ id, data: { recipient, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            to={recipient}
            subject={subject}
            message={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}

          />
        ))}
        <EmailRow
          subject="EUROLOTTO"
          message="You Won Euro lotto !!! "
          time="Wed, 27 Apr 2022 16:33:39 GMT"
        />

        <EmailRow
          subject="GitHub"
          message="Hey this clone made by Patty"
          time="Wed, 27 Apr 2022 16:33:39 GMT"
        />

        <EmailRow
          subject="Space X"
          message="Get the ticket to the moon on your vacation"
          time="Wed, 27 Apr 2022 16:33:39 GMT"
        />
        <EmailRow
          subject="EUROLOTTO"
          message="You Won Euro lotto !!! "
          time="Wed, 27 Apr 2022 16:33:39 GMT"
        />

        <EmailRow
          subject="GitHub"
          message="Hey this clone made by Patty"
          time="Wed, 27 Apr 2022 16:33:39 GMT"
        />

        <EmailRow
          subject="Space X"
          message="Get the ticket to the moon on your vacation"
          time="Wed, 27 Apr 2022 16:33:39 GMT"
        />
        <EmailRow
          subject="EUROLOTTO"
          message="You Won Euro lotto !!! "
          time="Wed, 27 Apr 2022 16:33:39 GMT"
        />
        <EmailRow
          subject="GitHub"
          message="Hey this clone made by Patty"
          time="Wed, 27 Apr 2022 16:33:39 GMT"
        />

        <EmailRow
          subject="Space X"
          message="Get the ticket to the moon on your vacation"
          time="Wed, 27 Apr 2022 16:33:39 GMT"
        />
        <EmailRow
          subject="EUROLOTTO"
          message="You Won Euro lotto !!! "
          time="Wed, 27 Apr 2022 16:33:39 GMT"
        />

        <EmailRow
          subject="GitHub"
          message="Hey this clone made by Patty"
          time="Wed, 27 Apr 2022 16:33:39 GMT"
        />

        <EmailRow
          subject="Space X"
          message="Get the ticket to the moon on your vacation"
          time="Wed, 27 Apr 2022 16:33:39 GMT"
        />
        <EmailRow
          subject="EUROLOTTO"
          message="You Won Euro lotto !!! "
          time="Wed, 27 Apr 2022 16:33:39 GMT"
        />

        <EmailRow
          subject="GitHub"
          message="Hey this clone made by Patty"
          time="Wed, 27 Apr 2022 16:33:39 GMT"
        />

        <EmailRow
          subject="Space X"
          message="Get the ticket to the moon on your vacation"
          time="Wed, 27 Apr 2022 16:33:39 GMT"
        />
        <EmailRow
          subject="EUROLOTTO"
          message="You Won Euro lotto !!! "
          time="Wed, 27 Apr 2022 16:33:39 GMT"
        />
        <EmailRow
          subject="GitHub"
          message="Hey this clone made by Patty"
          time="Wed, 27 Apr 2022 16:33:39 GMT"
        />

        <EmailRow
          subject="Space X"
          message="Get the ticket to the moon on your vacation"
          time="Wed, 27 Apr 2022 16:33:39 GMT"
        />
      </div>

      {/* These lines below are before we connect to firebas and useEffect**
      <div className="emailList__list">
        <EmailRow
          subject="EUROLOTTO"
          message="You Won Euro lotto !!! "
          time="10pm"
        />
      </div>*/}

    </div>
  )
}

export default EmailList
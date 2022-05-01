import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import Header from './Header';
import Sidebar from './Sidebar';
import Email from './Email';
import EmailList from './EmailList';
import SendEmail from './SendEmail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectSendMessageIsOpen } from './features/emailSlice';
import { selectUser, login } from './features/userSlice';
import { onAuthStateChanged, auth } from './firebase';

function App() {
  //we can improve the Ui by changing the details and converse this app to be a customer contact message ui 
  //(** change 'to(email)' with from(sender name and email) **) 
  //send message popup
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  //manage user
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          displaName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,

        }))
      } else {
        console.log("user is not login")
        // once user is sign out
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <Router>
      {!user ? (<Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/" element={<EmailList />} />
              <Route path="/email" element={<Email />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <SendEmail />}
        </div>
      )}
    </Router>
  );
}

export default App;

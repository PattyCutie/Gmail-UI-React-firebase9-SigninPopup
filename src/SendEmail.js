import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import './SendEmail.css'
import { closeSendMessage } from './features/emailSlice';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import {
  db,
  collection,
  addDoc,
  serverTimestamp,

} from './firebase';

function SendEmail() {
  const colRef = collection(db, 'emails');
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    addDoc(colRef, {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: serverTimestamp(),
    });
      dispatch(closeSendMessage());
  };

  console.log(errors);

  return (
    <div className="sendEmail">
      <div className="sendEmail__header">
        <h3>New Message </h3>
        <CloseIcon
          className='sendEmail__close'
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('to', { required: true })}
          type="email"
          placeholder='To'
        />
        {errors.to && (<p className='sendEmail__error'>Please enter recipient's address!!</p>)}
        <input
          {...register('subject', { required: true })}          
          type="text"
          placeholder="Subject"
        />
        {errors.subject && (<p className='sendEmail__error'>Please enter the subject!!</p>)}
        <input
          {...register('message', { required: true })}
          className="sendEmail__message"          
          type="text"
          rows="10"
          placeholder="Write message..."
        />
        {errors.message && (<p className='sendEmail__error'>Please enter the message!!</p>)}
        
        <div className="sendEmail__options">
          <Button            
            className="sendEmail__send"
            type="submit"
            variant="contained"
          >            
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}
export default SendEmail
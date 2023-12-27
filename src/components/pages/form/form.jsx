'use client';

import React, { useState } from 'react';

import errorIcon from '../../../../public/images/error.svg';
import loaderIcon from '../../../../public/images/loader.svg';
import successIcon from '../../../../public/images/success.svg';
import Button from '../../shared/button/button';
import Input from '../input/input';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [requestState, setRequestState] = useState('normal');
  const [placeholder, setPlaceholder] = useState('Your business email...');
  const [errorMessage, setErrorMessage] = useState('');

  const simulateRequest = () => {
    setRequestState('loading');
    setErrorMessage('');

    setTimeout(() => {
      if (Math.random() > 0.5) {
        setRequestState('success');
        setEmail('');
      } else {
        setRequestState('error');
        setEmail('');
        setPlaceholder('Oops! Something went wrong');
      }
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setErrorMessage('Email is required field');
    } else {
      simulateRequest();
    }
  };

  return (
    <>
      <form
        className="relative justify-center items-center max-w-full flex"
        style={{ width: '504px', height: '60px' }}
        noValidate
        onSubmit={handleSubmit}
      >
        <Input
          size="lg"
          theme="primary"
          placeholder={requestState === 'error' ? placeholder : 'Your business email...'}
          value={email}
          className="focus:outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />
        {requestState === 'normal' && (
          <Button size="lg" theme="primary" className="absolute top-50% right-2">
            Free Trial
          </Button>
        )}
        {requestState === 'loading' && (
          <img src={loaderIcon} alt="Loading" className="absolute top-50% right-2" />
        )}
        {requestState === 'success' && (
          <img src={successIcon} alt="Success" className="absolute top-50% right-2" />
        )}
        {requestState === 'error' && (
          <img src={errorIcon} alt="Error" className="absolute top-50% right-2" />
        )}
      </form>
      {errorMessage && (
        <p className="font-sans text-base text-secondary-4 mt-2 ml-4">{errorMessage}</p>
      )}
    </>
  );
};

export default EmailForm;

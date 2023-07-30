import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='/adduser'>
      <button className='btn'>Add User</button>
    </Link>
  );
}
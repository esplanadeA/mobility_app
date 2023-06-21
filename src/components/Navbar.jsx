import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import { images } from '../assets';

const Navbar = () => {
  return (
    <Stack>
      <Link to="/">
        <img
          src={images.Logo}
          alt="logo"
          style={{
            width: '48px',
            height: '48px',
          }}
        />
      </Link>
      <Stack>
        <Link to="/">Home</Link>
        <a href="#exercise">Exercise</a>
      </Stack>
    </Stack>
  );
};

export default Navbar;

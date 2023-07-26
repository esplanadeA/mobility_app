import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
// import ExerciseCard from './ExerciseCard';
// import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
    <Typography variant="h3">showing result</Typography>
    <Stack
      direction="row"
      sx={{ gap: { lg: '107px', xs: '50px' } }}
      flexWrap="wrap"
      justifyContent="center"
    >
      {console.log(exercises)}
      <p>{exercises.map((exercise, idx) => exercise.name)}</p>
    </Stack>
  </Box>;
};

export default Exercises;

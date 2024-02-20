import React, { useEffect, useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import 'react-horizontal-scrolling-menu/dist/styles.css';
// import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

// arrows from material
const LeftArrow = () => {
  const { scrollPrev, isFirstItemVisible } = useContext(VisibilityContext);

  return (
    <Typography disabled={isFirstItemVisible} onClick={scrollPrev} className="left-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext, isLastItemVisible } = useContext(VisibilityContext);
  return (
    <Typography disabled={!isLastItemVisible} onClick={scrollNext} className="right-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      // console.log(item);
      <Box key={item.id || item} itemID={item.id || item} title={item.id || item} m="0 40px">
        {bodyParts ? (
          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        ) : (
          <ExerciseCard exercise={item} />
        )}
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;

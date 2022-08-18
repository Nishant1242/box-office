import React from 'react';
import ShowCard from './ShowCard';
import NotFound from '../../images/NotFound.png';
import { FlexGrid } from '../styled';

const ShowGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : NotFound}
          summary={show.summary}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;

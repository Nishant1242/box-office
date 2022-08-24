import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const Show = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results => {
      setShow(results);
      console.log(show);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return <div> this is show pages</div>;
};
export default Show;

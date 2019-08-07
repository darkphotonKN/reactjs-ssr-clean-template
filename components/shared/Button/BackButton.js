import React from 'react';
// use nextjs router for back functionality
import Router from 'next/router';

const BackButton = ({}) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <hr className="divider-bold" />
      </div>
      <div className="col-md-12 mt-5 text-center">
        <div className="back-button-wrap" onClick={() => Router.back()}>
          <button className="back-button">回上頁</button>
        </div>
      </div>
    </div>
  );
};

export default BackButton;

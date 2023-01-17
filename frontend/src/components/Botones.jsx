import React from 'react'
import { Link } from 'react-router-dom';

const Botones = () => {
  return (
    <>
      <div className="p-2 ">
        <Link to="" className="btn btn-info align-baseline">
          <i className="fa fa-edit "></i>
        </Link>
      </div>
      <div className="p-2 ">
        
        <Link to="" className="btn btn-danger align-baseline">
          <i className="fa fa-trash "></i>
        </Link>
      </div>
    </>
  );
}

export default Botones
import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

const Botones = () => {



  return (
    <>
      <div className="p-2 ">
        <Link
          to="/formulario"
          className="btn btn-info align-baseline"
        >
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
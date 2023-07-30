// PageLoader.js
import React from 'react';
import { useSelector } from "react-redux";
import '../pageLoader.css';

const PageLoader = () => {
  const isLoading = useSelector((state) => state.loader.loading);

  return (
    <>
    </>
  );
};

export default PageLoader;

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductActionThunk } from '../../redux/ProductReducer';

const useHomePageData = () => {
  const { arrProduct } = useSelector(state => state.productReducer);
  const dispatch = useDispatch();
  const getProductApi = async () => {
    const actionThunk = getAllProductActionThunk;
    dispatch(actionThunk);
  }
  useEffect(() => {
    getProductApi();
  }, []);



  return { data: arrProduct };
}

export default useHomePageData
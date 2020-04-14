import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { store } from '../store/index'; 

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}){
  const signed = useSelector(state => state.auth.signed);

  if(!signed && isPrivate){
    return <Redirect to="/"/>
  }

  if(signed && !isPrivate){
    return <Redirect to="/dashboard"/>
  }

  return (
    <Route {...rest} component={Component}/>
  )
}
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Importa el hook useSelector
import Register from '../pages/Register';
import MangaDetails from '../pages/MangaDetail';
import Mangas from '../pages/Mangas';
import MangaForm from '../components/MangasForm';
import AdminPanel from '../pages/AdminPanel';
import { LS } from '../utils/localStorageUtil';
import Newrole from '../pages/New-role';

const ProtectedRoute = () => {
  const token = LS.get('token');

  const isLoggedIn = () => {
    return token
  };

  if (isLoggedIn()) {
    return <Navigate to={'/NotAllow'} />;
  }

  return <Register />;
};
const ProtectedRouteNewRole = () => {
  const token = LS.get('token');

  const isLoggedIn = () => {
    return token
  };

  if (!isLoggedIn()) {
    return <Navigate to={'/NotAllow'} />;
  }

  return <Newrole />;
};


const ProtectedRouteMangas = () => {
  const token = LS.get('token');

  const isLoggedIn = () => {
    return token
  };

  if (!isLoggedIn()) {
    return <Navigate to={'/NotAllow'} />;
  }

  return <Mangas />;
};

const ProtectedRouteMangaDetail = () => {
  const token = LS.get('token');

  const isLoggedIn = () => {
    return token
  };

  if (!isLoggedIn()) {
    return <Navigate to={'/NotAllow'} />;
  }

  return <MangaDetails />;
};

const ProtectedRouteNewManga = () => {
  const token = LS.get('token');

  const isLoggedIn = () => {
    return token
  };

  if (!isLoggedIn()) {
    return <Navigate to={'/NotAllow'} />;
  }

  return <MangaForm />;
};

const ProtectedAdminPanel = () => {
  const token = LS.get('token');
  const userRole = useSelector(state => state.auth.user?.role); // Obtén el rol del usuario desde el store

  const isLoggedIn = () => {
    return token && userRole === 3;
  };

  if (!isLoggedIn()) {
    return <Navigate to={'/NotAllow'} />;
  }

  return <AdminPanel />;
};


export { ProtectedRoute, ProtectedRouteMangas, ProtectedRouteMangaDetail, ProtectedRouteNewManga, ProtectedAdminPanel,ProtectedRouteNewRole };

import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../views/Layout';
import { lazy } from 'react';

const HomeView = lazy(()=> import ('../views/HomeView'))
const MoviesView =lazy(()=> import ('../views/MoviesView'))
const MoviesDetailsView = lazy(()=> import ('../views/MoviesDetalsView'))
const CastList = lazy(()=> import ('../views/CastListView'))
const Reviews = lazy(()=> import ('../views/ReviewsView'))

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="movies" element={<MoviesView />} />
        <Route path="movies/:movieId" element={<MoviesDetailsView />}>
          <Route path='cast' element={<CastList/>}/>
          <Route path='reviews' element={<Reviews/>}/>
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Test } from '../Test';

const RoutesContainer = () => (
  <Routes>
    <Route element={<div><Outlet /></div>}>
      <Route
        path="/"
        element={(<Test />)}
      />
    </Route>
    <Route path="*" element={<div>NotFound</div>} />
  </Routes>
);

export default RoutesContainer;

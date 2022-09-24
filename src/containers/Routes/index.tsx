import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Swap } from "../Swap/Swap";
import { Pool } from "../Pool/Pool";
import { AddLiquidity } from "../Add-Liquidity/AddLiquidity";

const RoutesContainer = () => (
  <Routes>
    <Route
      element={
        <div>
          <Outlet />
        </div>
      }
    >
      <Route path="/" element={<Swap />} />
      <Route path="/pool" element={<Pool />} />
      <Route path="/add-liquidity" element={<AddLiquidity />} />
    </Route>
    <Route path="*" element={<div>NotFound</div>} />
  </Routes>
);

export default RoutesContainer;

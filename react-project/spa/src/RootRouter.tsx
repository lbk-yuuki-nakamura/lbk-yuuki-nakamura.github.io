import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from './Home';
import { Sample1 } from './Sample1';
import { Sample2 } from './Sample2';

export const RootRouter: React.VFC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sample01" element={<Sample1 />} />
    <Route path="/sample02" element={<Sample2 />} />
  </Routes>
);

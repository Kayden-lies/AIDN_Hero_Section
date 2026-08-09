/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MatrixSettings } from './types';
import { CubeMatrixCanvas } from './components/CubeMatrixCanvas';

const SETTINGS: MatrixSettings = {
  gridCols: 244, // 144 + 50 on left + 50 on right
  gridRows: 200, // 80 + 60 on top + 60 on bottom
  cubeSize: 0.165,
  cubeGap: 0.009,
};

export default function App() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#030407] select-none">
      <CubeMatrixCanvas settings={SETTINGS} />
    </main>
  );
}

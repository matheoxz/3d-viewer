// components/ModelViewer.tsx
"use client"
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import RotatingModel from './RotatingModel';

interface ModelViewerProps {
  modelUrl: string;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ modelUrl }) => {
  return (
    <div className="model-viewer">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingModel modelUrl={modelUrl} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ModelViewer;

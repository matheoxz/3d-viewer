// components/ModelThumbnail.tsx
"use client"
import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import RotatingModel from './RotatingModel';

interface ModelThumbnailProps {
  modelUrl: string; // URL of the model (e.g. '/3d-objects/model1.glb')
}

const ModelThumbnail: React.FC<ModelThumbnailProps> = ({ modelUrl }) => {
  return (
    <div className="model-thumbnail">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingModel modelUrl={modelUrl} />
      </Canvas>
    </div>
  );
};

export default ModelThumbnail;

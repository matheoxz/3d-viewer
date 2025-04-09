// components/RotatingModel.tsx

import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';

const RotatingModel: React.FC<{ modelUrl: string }> = ({ modelUrl }) => {
    const { scene } = useGLTF(modelUrl) as any; // useGLTF works with .glb models
    const groupRef = useRef<THREE.Group>(null);
  
    // Normalize the model to fit into a unit cube
    useEffect(() => {
      if (groupRef.current) {
        // Ensure matrices are updated so that the bounding box is accurate
        groupRef.current.updateWorldMatrix(true, true);
  
        // Create a bounding box for the group and compute its size
        const box = new THREE.Box3().setFromObject(groupRef.current);
        const size = new THREE.Vector3();
        box.getSize(size);
  
        // Find the largest dimension (x, y, or z)
        const maxAxis = Math.max(size.x, size.y, size.z);
  
        // Compute a scale factor such that the largest dimension becomes 1
        const scale = 1 / maxAxis;
  
        // Apply the scale to the group
        groupRef.current.scale.set(scale * 1.9, scale * 1.4, scale * 1.4); // Adjust the scale factor as needed
  
        console.log('Model loaded:', modelUrl);
        console.log('Max axis:', maxAxis);
        console.log('Model size:', size, 'Scale factor:', scale);
        console.log('Bounding box:', box.min, box.max);
  
        // To center the model, calculate the center of the bounding box.
        const center = new THREE.Vector3();
        box.getCenter(center);
        groupRef.current.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
      }
    }, [scene]);
  
    // Rotate the model on every frame
    useFrame(() => {
      if (groupRef.current) groupRef.current.rotation.y += 0.01;
    });
  
    return (
      <group ref={groupRef}>
        <primitive object={scene} />
      </group>
    );
  };

  export default RotatingModel;
/// <reference types="vite/client" />
import type { Object3DNode, MaterialNode } from '@react-three/fiber';
import type { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import type * as THREE from 'three';

declare module '*.glb';
declare module '*.png';

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: Object3DNode<MeshLineGeometry, typeof MeshLineGeometry>;
    meshLineMaterial: Omit<MaterialNode<MeshLineMaterial, typeof MeshLineMaterial>, 'resolution' | 'repeat'> & {
      resolution?: [number, number] | THREE.Vector2;
      useMap?: number;
      repeat?: [number, number] | THREE.Vector2;
    };
  }
}

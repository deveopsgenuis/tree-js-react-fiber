import { useGLTF, useScroll } from "@react-three/drei";
import * as THREE from 'three';
import gsap from "gsap";
import { forwardRef } from "react";



const gradientShaderMaterial = new THREE.ShaderMaterial({
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 0.065);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    uniform vec3 topColor;
    uniform vec3 bottomColor;
    void main() {
      gl_FragColor = vec4(mix(bottomColor, topColor, vUv.y), 0.065);
    }
  `,
  uniforms: {
    topColor: { value: new THREE.Color('rgb(0, 0,0)') },     // Define the top color of the gradient
    bottomColor: { value: new THREE.Color('rgb(0, 0,0)') },  // Define the bottom color of the gradient
  },
});

import React, { useLayoutEffect, useRef } from "react";


export const Model = forwardRef((props, ref) => {

  const { nodes, materials } = useGLTF("./public/models/mob.glb");

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load('./public/header-xxxxl.svg');
  const textureTwo = textureLoader.load('./public/cards.svg');


  // Set texture filtering properties
  textureTwo.minFilter = THREE.LinearFilter;
  textureTwo.magFilter = THREE.LinearMipMapLinearFilter


  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearMipmapLinearFilter;

  return (
<scene>
<directionalLight
  position={[0, 10, 0]}
  intensity={-0.5}
  castShadow
  shadow-mapSize-width={2048}
  shadow-mapSize-height={2048}
  shadow-camera-left={-10}
  shadow-camera-right={10}
  shadow-camera-top={10}
  shadow-camera-bottom={-10}
/>
      <group position={[-0.075, 2.5, 0.265]} scale={0.18} >
        <mesh position={[2.029, 17.945, -0.210]} rotation={[-0.387, -0.346, -0.192]} scale={[9.832, 1.686, 1]} receiveShadow>
          <planeBufferGeometry args={[1, 1]} />
          <meshPhongMaterial map={texture} transparent />
        </mesh>
        <mesh position={[3.029, 14.945, 2.0101]} rotation={[-0.387, -0.346, -0.192]} scale={[9.832, 4.286, 1]} receiveShadow>
          <planeBufferGeometry args={[1, 1]} />
          <meshPhongMaterial map={textureTwo} transparent />
        </mesh>

        <mesh geometry={nodes['001_Screen'].geometry} material={gradientShaderMaterial} position={[0.069, -0.315, 1.965]} rotation={[Math.PI / 2, 0, 0]} scale={0.009} />

        <mesh geometry={nodes['002_Flash'].geometry} material={materials} position={[0.069, -0.315, 1.965]} rotation={[Math.PI / 2, 0, 0]} scale={0.137} />
        <mesh geometry={nodes['003_Back_Panel'].geometry} material={materials['Rear Glass 1_7fdfec86-b5e4-493c-a357-c9640777bde3']} position={[0.069, -0.315, 1.965]} rotation={[Math.PI / 2, 0, 0]} scale={0.137} />
        <mesh geometry={nodes['004_Main_Body'].geometry} material={materials['Body 1_b1f4a169-0812-41a8-9cd6-7cb04d36d549']} position={[0.069, -0.315, 1.965]} rotation={[Math.PI / 2, 0, 0]} scale={0.137} />
        <mesh geometry={nodes['005_Ports'].geometry} material={materials['Ports 1_cc9a512f-511e-4f50-9bef-77f54c40f318']} position={[0.069, -0.315, 1.965]} rotation={[Math.PI / 2, 0, 0]} scale={0.137} />
        <mesh geometry={nodes['006_Side_Button'].geometry} material={materials['Power Button 1_8df2732c-a7c4-4aee-a39d-ab786f8e97f4']} position={[0.069, -0.315, 1.965]} rotation={[Math.PI / 2, 0, 0]} scale={0.137} />
        <mesh geometry={nodes['007_Front_Frame'].geometry} material={materials['Front Glass 1_8b99746d-7a5e-47ed-9a2c-4c99448826fc']} position={[0.069, -0.315, 1.965]} rotation={[Math.PI / 2, 0, 0]} scale={0.137} />
        <mesh geometry={nodes['008_Camera_Rim'].geometry} material={materials['Camera Rim 1_6792e99d-824e-4004-a1cf-6e41d5ef1d10']} position={[0.069, -0.315, 1.965]} rotation={[Math.PI / 2, 0, 0]} scale={0.137} />
        <mesh geometry={nodes['009_Camera_Body'].geometry} material={materials['Camera Body 1_468a4040-f9e9-45a6-895b-035fceb79516']} position={[0.069, -0.315, 1.965]} rotation={[Math.PI / 2, 0, 0]} scale={0.137} />
        <mesh geometry={nodes['010_Cameras'].geometry} material={materials['Camera Lenses 1_f3fea960-fe21-42b0-88da-749564c4aeb5']} position={[0.069, -0.315, 1.965]} rotation={[Math.PI / 2, 0, 0]} scale={0.137} />
        <mesh geometry={nodes['011_Camers_Lenses'].geometry} material={materials['Camera Glass 1_b36d1b91-8c7b-416a-8b18-33b994007f9b']} position={[0.069, -0.315, 1.965]} rotation={[Math.PI / 2, 0, 0]} scale={0.137} />
        <mesh geometry={nodes['012_Camera_Lenses_Out'].geometry} material={materials['Camera Rims 1_f016c3b0-feb8-4caa-b773-c3a510bfd5b9']} position={[0.069, -0.315, 1.965]} rotation={[Math.PI / 2, 0, 0]} scale={0.137} />
      </group>

</scene>
  );
} )

useGLTF.preload("./public/models/mob.glb");

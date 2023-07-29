import { useGLTF } from '@react-three/drei'

export const Office = (props) => {

  const { nodes, materials } = useGLTF("./models/phone.glb");



  /* Set texture filtering properties
  textureTwo.minFilter = THREE.LinearFilter;
  textureTwo.magFilter = THREE.LinearMipMapLinearFilter


  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearMipmapLinearFilter;
*/

  return (
<scene>
<directionalLight
  position={[0, 10, 0]}
  intensity={1}
  castShadow
  shadow-mapSize-width={2048}
  shadow-mapSize-height={2048}
  shadow-camera-left={-10}
  shadow-camera-right={10}
  shadow-camera-top={10}
  shadow-camera-bottom={-10}
/>
<group {...props} dispose={null} position={[0.05, -4.001, 0.363]} scale={0.15}>
      <mesh geometry={nodes.Asset_3.geometry} material={materials.scifi_smooth_vinyl} position={[-0.182, 33.675, 0.363]} rotation={[1.568, 0.031, 0.063]} scale={[0.01, 0.004, 0.01]} />
      <mesh geometry={nodes.Asset_5.geometry} material={materials.resin_epoxy} position={[-2.142, 33.601, 0.039]} rotation={[1.568, 0.031, 0.063]} scale={[0.008, 0.01, 0.01]} />
      <mesh geometry={nodes.Asset_4.geometry} material={materials.colored_powder_3d_print} position={[1.146, 33.702, 0.163]} rotation={[1.568, 0.031, 0.063]} scale={0.012} />
      <mesh geometry={nodes.Asset_6.geometry} material={materials.colored_powder_3d_print} position={[2.046, 33.769, 0.223]} rotation={[1.568, 0.031, 0.063]} scale={0.01} />
      <mesh geometry={nodes.Asset_7.geometry} material={materials.scifi_smooth_vinyl} position={[-1.807, 33.556, -0.629]} rotation={[1.568, 0.031, 0.063]} scale={0.01} />
      <mesh geometry={nodes.Screen.geometry} material={materials.screen_printed_glass} position={[-1.147, 11.816, -4.414]} rotation={[1.899, 0.084, -1.482]} scale={10.056} />
      <mesh geometry={nodes.Flash.geometry} material={materials['Flash 1_668c1d23-a602-465d-892b-fb34e93651c6']} position={[-1.145, 11.793, -4.414]} rotation={[1.899, 0.084, -1.482]} scale={10.056} />
      <mesh geometry={nodes.Back_Panel.geometry} material={materials.scifi_smooth_vinyl} position={[-1.145, 11.793, -4.414]} rotation={[1.899, 0.084, -1.482]} scale={10.056} />
      <mesh geometry={nodes.Main_Body.geometry} material={materials.scifi_smooth_vinyl} position={[-1.145, 11.793, -4.414]} rotation={[1.899, 0.084, -1.482]} scale={10.056} />
      <mesh geometry={nodes.Ports.geometry} material={materials['Ports 1_cc9a512f-511e-4f50-9bef-77f54c40f318']} position={[-1.145, 11.793, -4.414]} rotation={[1.899, 0.084, -1.482]} scale={10.056} />
      <mesh geometry={nodes.Side_Button.geometry} material={materials.scifi_hull_grid_panel} position={[-1.145, 11.793, -4.414]} rotation={[1.899, 0.084, -1.482]} scale={10.056} />
      <mesh geometry={nodes.Front_Frame.geometry} material={materials.scifi_smooth_vinyl} position={[-1.145, 11.793, -4.414]} rotation={[1.899, 0.084, -1.482]} scale={10.056} />
      <mesh geometry={nodes.Camera_Rim.geometry} material={materials.scifi_hull_grid_panel} position={[-1.145, 11.793, -4.414]} rotation={[1.899, 0.084, -1.482]} scale={10.056} />
      <mesh geometry={nodes.Camera_Body.geometry} material={materials.scifi_hull_grid_panel} position={[-1.145, 11.793, -4.414]} rotation={[1.899, 0.084, -1.482]} scale={10.056} />
      <mesh geometry={nodes.Cameras.geometry} material={materials['Camera Lenses 1_f3fea960-fe21-42b0-88da-749564c4aeb5']} position={[-1.145, 11.793, -4.414]} rotation={[1.899, 0.084, -1.482]} scale={10.056} />
      <mesh geometry={nodes.Camers_Lenses.geometry} material={materials['Camera Glass 1_b36d1b91-8c7b-416a-8b18-33b994007f9b']} position={[-1.145, 11.793, -4.414]} rotation={[1.899, 0.084, -1.482]} scale={10.056} />
      <mesh geometry={nodes.Camera_Lenses_Out.geometry} material={materials['Camera Rims 1_f016c3b0-feb8-4caa-b773-c3a510bfd5b9']} position={[-1.145, 11.793, -4.414]} rotation={[1.899, 0.084, -1.482]} scale={10.056} />
      <directionalLight
  position={[0, 10, 0]}
  intensity={0.5}
  castShadow
  shadow-mapSize-width={2048}
  shadow-mapSize-height={2048}
  shadow-camera-left={-10}
  shadow-camera-right={10}
  shadow-camera-top={10}
  shadow-camera-bottom={-10}
/>
    </group>

</scene>
  );
}

useGLTF.preload("./models/phone.glb");

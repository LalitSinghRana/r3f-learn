import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { angleToRadian } from "../../utils/angle";
import gsap from "gsap";
import * as THREE from "three";
import { Car } from "./Car";

const Three = () => {
  
  // const orbitControlsRef = useRef(null);
  // useFrame((state) => {
  //   if (!!orbitControlsRef.current) {
  //     const { x, y } = state.mouse;
  //     orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadian(45));
  //     orbitControlsRef.current.setPolarAngle(
  //       (y + 0.5) * angleToRadian(90 - 30)
  //     );
  //   }
  // });

  // useEffect(() => {
  //   if (!!orbitControlsRef.current) {
  //     console.log("Three ~ orbitControlsRef.current", orbitControlsRef.current);
  //   }
  // }, [orbitControlsRef.current]);
  
  const ballRef = useRef(null);
  useEffect(() => {
    if (!!ballRef.current) {
      console.log(ballRef.current);

      // Timeline
      const timeline = gsap.timeline();

      timeline.to(ballRef.current.position, {
        x: 1,
        duration: 3,
      });
      timeline.to(ballRef.current.position, {
        y: 0.5,
        duration: 3,
        ease: "bounce.out"
      }, "<");
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls
        // ref={orbitControlsRef}
        minPolarAngle={angleToRadian(45)}
        maxPolarAngle={angleToRadian(80)}
      />

      {/* Car */}
      <Car />

      {/* Ball */}
      <mesh position={[-2, 3.5, 0]} castShadow ref={ballRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color={"#f0f0f0"}
          metalness={0.6}
          roughness={0.2}
        />
      </mesh>

      {/* Floor */}
      <mesh rotation={[-angleToRadian(90), 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color={"#f0f0f0"} />
      </mesh>

      {/* Ambient Light */}
      {/* <ambientLight args={["#ffffff", 1]} /> */}

      {/* Directional light */}
      <spotLight
        args={["#ffffff", 1.5, 7, angleToRadian(45), 0.4]}
        position={[-3, 1, 0]}
        castShadow
      />

      {/* Environment */}
      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 1, 1]} />
          <meshBasicMaterial color={"#2266cc"} side={THREE.BackSide} />
        </mesh>
      </Environment>
    </>
  );
};

export default Three;

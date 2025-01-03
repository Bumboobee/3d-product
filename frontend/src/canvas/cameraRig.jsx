import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";

import state from "../store";
import PropTypes from "prop-types";
import { useRef } from "react";

const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    const isBreakPoint = window.innerWidth < 1260;
    const isMobile = window.innerWidth < 600;

    //set the initial position of the model
    let targetPosition = [-0.4, 0, 2];

    if (snap.intro) {
      if (isBreakPoint) targetPosition = [0, 0, 2];
      if (isMobile) targetPosition = [0, 0.2, 2.8];
    } else {
      if (isMobile) targetPosition = [0, 0.0, 2.8];
      else targetPosition = [0, 0, 2];
    }

    //Set the model position smoothly
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    //set the model rotation smoothly
    easing.dampE(group.current.rotation, [state.pointer.y / 10, -state.pointer.x / 5, 0], delta);
  });

  return <group ref={group}>{children}</group>;
};

CameraRig.propTypes = {
  children: PropTypes.node,
};

export default CameraRig;

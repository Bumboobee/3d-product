import { useSnapshot } from "valtio";

import state from "../store";
import Propytypes from "prop-types";

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state);

  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: "transparent", opacity: 1 };

  return (
    <div
      key={tab.name}
      className={`tab-btn ${isFilterTab ? "rounded-full glassmorphism" : "rounded-4"}`}
      onClick={handleClick}
      style={activeStyles}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        className={`${isFilterTab ? "w-2/3 h-2/3" : "w-11/12 h-11/12 object-contain"}`}
      />
    </div>
  );
};

Tab.propTypes = {
  tab: Propytypes.object.isRequired,
  isFilterTab: Propytypes.bool.isRequired,
  isActiveTab: Propytypes.bool.isRequired,
  handleClick: Propytypes.func.isRequired,
};

export default Tab;

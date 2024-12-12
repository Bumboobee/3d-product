import state from "../store";
import { useSnapshot } from "valtio";
import Propytypes from "prop-types";

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };

  return (
    <button
      className={`px-4 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

CustomButton.propTypes = {
  type: Propytypes.string,
  title: Propytypes.string,
  customStyles: Propytypes.string,
  handleClick: Propytypes.func,
};

export default CustomButton;

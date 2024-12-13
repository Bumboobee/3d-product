import CustomButton from "./customButton";

import PropTypes from "prop-types";

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input type="file" id="file-upload" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
        <label htmlFor="file-upload" className="filepicker-label !text-gray-200">
          Upload de Arquivo
        </label>

        <p className="mt-2 text-gray-300/80 text-xs truncate italic">{file === "" ? "Sem arquivo selecionado" : file.name}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton type="outline" title="Logo" handleClick={() => readFile("logo")} customStyles="text-xs" />
        <CustomButton type="filled" title="Estampa" handleClick={() => readFile("full")} customStyles="text-xs" />
      </div>
    </div>
  );
};

FilePicker.propTypes = {
  file: PropTypes.string,
  setFile: PropTypes.func,
  readFile: PropTypes.func,
};

export default FilePicker;

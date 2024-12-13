import CustomButton from "./customButton";
import PropTypes from "prop-types";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Pergunte a IA o que você deseja criar..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea !text-xs rounded-sm p-2 w-full text-gray-200 placeholder:text-gray-300/80 placeholder:italic"
      />

      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton type="outline" title="Gerando Imagem..." customStyles="text-xs" />
        ) : (
          <>
            <CustomButton type="outline" title="Logo" customStyles="text-xs" handleClick={() => handleSubmit("logo")} />

            <CustomButton
              type="filled"
              title="Estampa"
              customStyles="text-xs"
              handleClick={() => handleSubmit("full")}
            />
          </>
        )}
      </div>
    </div>
  );
};

AIPicker.propTypes = {
  prompt: PropTypes.string.isRequired,
  setPrompt: PropTypes.func.isRequired,
  generatingImg: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default AIPicker;

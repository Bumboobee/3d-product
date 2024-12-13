import { useSnapshot } from "valtio";
import { CustomButton } from "../components";
import { motion, AnimatePresence } from "framer-motion";
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from "../config/motion";

import state from "../store";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro ? (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img src="./256x256.svg" alt="logo" className="w-16 h-16 object-contain" />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text uppercase !text-gray-100">
                Vamos <br className="xl:block hidden" />{" "}
                <span className="italic" style={{ color: snap.color }}>
                  Criar?
                </span>
              </h1>
            </motion.div>

            <motion.div className="flex flex-col gap-5" {...headContentAnimation}>
              <p className="max-w-md font-normal text-gray-400 text-base">
                Crie sua camiseta única e exclusiva com nossa ferramenta inovadora de personalização em 3D.{" "}
                <strong>Solte sua imaginação</strong> e mostre seu estilo ao mundo.
              </p>

              <CustomButton
                type="filled"
                title="Customizar"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      ) : (
        <></>
      )}
    </AnimatePresence>
  );
};
export default Home;

import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: "#06b6d4",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: "./256x256.svg",
    fullDecal: "./256x256.svg",
});

export default state;

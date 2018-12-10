import chroma from "chroma-js";

console.clear();

const n = 12;
const hues = {
  "Unnamed 15": 15,
  "Red": 30,
  "Burnt orange": 45,
  "Orange": 60,
  "Brown": 75,
  "Tan": 90,
  "Unnamed 105": 105,
  // "Unnamed 120": 120,
  // "Unnamed 135": 135,
  "Green": 150,
  // "Unnamed 165": 165,
  "Sea green": 180,
  "Teal": 195,
  "Aqua": 210,
  // "Unnamed 225": 225,
  "Sky blue": 240,
  // "Unnamed 255": 255,
  // "Unnamed 270": 270,
  "Blue": 285,
  "Indigo": 300,
  "Purple": 315,
  "Magenta": 330,
  "Pink": 345,
  "Unnamed 360": 360,
};

const colors = Object.entries(hues).map(([name, h]) => ({
  name,
  color: chroma.hcl(h, 100, 50),
}));

colors.forEach(color => {
  log(color.color, color.name);
});

colors.forEach(color => {
  var { color, name } = color;
  color = chroma(color).set("hcl.l", 75);
  log(color, `Bright ${name}`);
});


const scales = colors.map(color => {
  return ({
    name: color.name,
    scale: chroma.scale(["white", color.color])
      .mode("hcl")
      .domain([0, 100])
  });
});

scales.forEach(scale => {
  log(scale.scale(10), `${scale.name} 10`);
  log(scale.scale(20), `${scale.name} 20`);
  log(scale.scale(30), `${scale.name} 30`);
  log(scale.scale(40), `${scale.name} 40`);
  log(scale.scale(50), `${scale.name} 50`);
  log(scale.scale(60), `${scale.name} 60`);
  log(scale.scale(70), `${scale.name} 70`);
  log(scale.scale(80), `${scale.name} 80`);
  log(scale.scale(90), `${scale.name} 90`);
  log(scale.scale(100), `${scale.name} 100`);
});

function log(color, msg) {
  const LUMINANCE_THRESHOLD = 0.40;
  color = chroma(color);
  const text = color.luminance() <= LUMINANCE_THRESHOLD ? "white" : "black";
  console.log(
    `%c${msg}`,
    `
      background: ${color};
      color: ${text};
      padding: 4px;
      border-radius: 4px;
    `
  );
}

/*============================================================================*\
  COLORS
\*============================================================================*/

export const none = "transparent";

export const black = "#22292f";
export const greyDarkest = "#3d4852";
export const greyDarker = "#606f7b";
export const greyDark = "#8795a1";
export const grey = "#b8c2cc";
export const greyLight = "#dae1e7";
export const greyLighter = "#f1f5f8";
export const greyLightest = "#f8fafc";
export const white = "#ffffff";

export const redDarkest = "#3b0d0c";
export const redDarker = "#621b18";
export const redDark = "#cc1f1a";
export const red = "#e3342f";
export const redLight = "#ef5753";
export const redLighter = "#f9acaa";
export const redLightest = "#fcebea";

export const orangeDarkest = "#462a16";
export const orangeDarker = "#613b1f";
export const orangeDark = "#de751f";
export const orange = "#f6993f";
export const orangeLight = "#faad63";
export const orangeLighter = "#fcd9b6";
export const orangeLightest = "#fff5eb";

export const yellowDarkest = "#453411";
export const yellowDarker = "#684f1d";
export const yellowDark = "#f2d024";
export const yellow = "#ffed4a";
export const yellowLight = "#fff382";
export const yellowLighter = "#fff9c2";
export const yellowLightest = "#fcfbeb";

export const greenDarkest = "#0f2f21";
export const greenDarker = "#1a4731";
export const greenDark = "#1f9d55";
export const green = "#38c172";
export const greenLight = "#51d88a";
export const greenLighter = "#a2f5bf";
export const greenLightest = "#e3fcec";

export const tealDarkest = "#0d3331";
export const tealDarker = "#20504f";
export const tealDark = "#38a89d";
export const teal = "#4dc0b5";
export const tealLight = "#64d5ca";
export const tealLighter = "#a0f0ed";
export const tealLightest = "#e8fffe";

export const blueDarkest = "#12283a";
export const blueDarker = "#1c3d5a";
export const blueDark = "#2779bd";
export const blue = "#3490dc";
export const blueLight = "#6cb2eb";
export const blueLighter = "#bcdefa";
export const blueLightest = "#eff8ff";

export const indigoDarkest = "#191e38";
export const indigoDarker = "#2f365f";
export const indigoDark = "#5661b3";
export const indigo = "#6574cd";
export const indigoLight = "#7886d7";
export const indigoLighter = "#b2b7ff";
export const indigoLightest = "#e6e8ff";

export const purpleDarkest = "#21183c";
export const purpleDarker = "#382b5f";
export const purpleDark = "#794acf";
export const purple = "#9561e2";
export const purpleLight = "#a779e9";
export const purpleLighter = "#d6bbfc";
export const purpleLightest = "#f3ebff";

export const pinkDarkest = "#451225";
export const pinkDarker = "#6f213f";
export const pinkDark = "#eb5286";
export const pink = "#f66d9b";
export const pinkLight = "#fa7ea8";
export const pinkLighter = "#ffbbca";
export const pinkLightest = "#ffebef";

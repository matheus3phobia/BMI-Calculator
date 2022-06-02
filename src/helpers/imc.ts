export type Level = {
  title: string;
  color: string;
  icon: "down" | "up";
  imc: number[];
  yourIMC?: number;
};

export const levels = [
  { title: "Magreza", color: "#97a3ab", icon: "down", imc: [0.1, 18.5] },
  { title: "Normal", color: "#0ead69", icon: "up", imc: [18.6, 24.9] },
  { title: "Sobrepeso", color: "#e2b036", icon: "down", imc: [25, 30] },
  { title: "Obesidade", color: "#c3423f", icon: "down", imc: [30.1, 99] },
] as Level[];

export const calculateIMC = (weight: number, height: number) => {
  const imc = weight / (height * height);

  for (let i in levels) {
    if (imc >= levels[i].imc[0] && imc <= levels[i].imc[1]) {
      let levelCopy: Level = {...levels[i]};
      levelCopy.yourIMC = parseFloat(imc.toFixed(2));
      return levels[i];
    }
  }

  return null;
};

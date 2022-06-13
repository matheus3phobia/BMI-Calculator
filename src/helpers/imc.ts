export type Level = {
  title: string;
  color: string;
  icon: "down" | "up";
  imc: number[];
  yourIMC?: number;
};

export const levels = [
  { title: "Thinness", color: "#97a3ab", icon: "down", imc: [0.1, 18.5] },
  { title: "Normal", color: "#0ead69", icon: "up", imc: [18.6, 24.9] },
  { title: "Overweight", color: "#e2b036", icon: "down", imc: [25, 30] },
  { title: "Obesity", color: "#c3423f", icon: "down", imc: [30.1, 99] },
] as Level[];

export const calculateIMC = (weight: number, height: number) => {
  const imc = weight / (height * height);

  if (imc < 18.5) return levels[0];
  if (imc < 24.9 && imc >= 18.5) return levels[1];
  if (imc < 30 && imc >= 24.9) return levels[2];
  return levels[3];
};

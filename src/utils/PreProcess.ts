export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

export const makeGuessingWord = (word: string): string[] => {
  return word
    .replace("'", "")
    .split(" ")
    .map((w) =>
      w
        .split("")
        .map((char) => (Math.random() > 0.5 ? "_" : char))
        .join("")
    );
};

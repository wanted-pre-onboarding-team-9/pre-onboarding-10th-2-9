const UP_ARROW_KEY = 38;
const DOWN_ARROW_KEY = 40;

export type keydownHandlerProps = {
  e: { keyCode: number };
  activeNumber: number;
  setActiveNumber: React.Dispatch<React.SetStateAction<number>>;
  recommendedKeywords: [{ name: string; id: number }];
};

export const keydownHandler = ({
  e,
  activeNumber,
  setActiveNumber,
  recommendedKeywords,
}: keydownHandlerProps) => {
  if (e.keyCode === UP_ARROW_KEY) {
    if (activeNumber === 0) return;
    setActiveNumber((prev: number) => prev - 1);
  }

  if (e.keyCode === DOWN_ARROW_KEY) {
    if (activeNumber === recommendedKeywords.length - 1) return;
    setActiveNumber((prev: number) => prev + 1);
  }
};

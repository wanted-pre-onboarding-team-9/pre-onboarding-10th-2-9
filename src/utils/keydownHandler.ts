import { RecommendedKeywords } from '../@types/search';
import { DOWN_ARROW_KEY, UP_ARROW_KEY } from './const';

export type keydownHandlerProps = {
  e: { keyCode: number };
  activeNumber: number;
  setActiveNumber: React.Dispatch<React.SetStateAction<number>>;
  recommendedKeywords: RecommendedKeywords[];
};

export const keydownHandler = ({
  e,
  activeNumber,
  setActiveNumber,
  recommendedKeywords,
}: keydownHandlerProps) => {
  if (!recommendedKeywords) return;

  if (e.keyCode === UP_ARROW_KEY) {
    if (activeNumber === 0) return;
    setActiveNumber((prev: number) => prev - 1);
  }

  if (e.keyCode === DOWN_ARROW_KEY) {
    if (activeNumber === recommendedKeywords.length - 1) return;
    setActiveNumber((prev: number) => prev + 1);
  }
};

import { RecommendedKeywords } from '../@types/search';
import { DOWN_ARROW_KEY, ENTER_KEY, UP_ARROW_KEY } from './const';

export type keydownHandlerProps = {
  e: { key: string };
  activeNumber: number;
  setActiveNumber: React.Dispatch<React.SetStateAction<number>>;
  recommendedKeywords: RecommendedKeywords[];
  replaceKeyword: (activeNumber: number) => void;
};

export const keydownHandler = ({
  e,
  activeNumber,
  setActiveNumber,
  recommendedKeywords,
  replaceKeyword,
}: keydownHandlerProps) => {
  if (!recommendedKeywords) return;

  if (e.key === UP_ARROW_KEY) {
    if (activeNumber === 0) {
      setActiveNumber((prev: number) => recommendedKeywords.length - 1);
      return;
    }
    setActiveNumber((prev: number) => prev - 1);
  }

  if (e.key === DOWN_ARROW_KEY) {
    if (activeNumber === recommendedKeywords.length - 1) {
      setActiveNumber((prev: number) => 0);
      return;
    }
    setActiveNumber((prev: number) => prev + 1);
  }

  if (e.key === ENTER_KEY) {
    replaceKeyword(activeNumber);
    setActiveNumber(0);
  }
};

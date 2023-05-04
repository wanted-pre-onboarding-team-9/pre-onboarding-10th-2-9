import { RecommendedKeywords } from '../@types/search';
import { ARROW_DOWN, ARROW_UP } from './const';

export type keydownHandlerProps = {
  e: { key: string };
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
  if (e.key === ARROW_UP) {
    if (activeNumber === 0) return;
    setActiveNumber((prev: number) => prev - 1);
  }
  if (e.key === ARROW_DOWN) {
    if (activeNumber === recommendedKeywords.length - 1) return;
    setActiveNumber((prev: number) => prev + 1);
  }
};

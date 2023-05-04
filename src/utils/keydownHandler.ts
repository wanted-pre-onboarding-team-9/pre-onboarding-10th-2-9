import { RecommendedKeywords } from '../@types/search';
import { ARROW_DOWN_KEY, ARROW_UP_KEY } from './const';

export type keydownHandlerProps = {
  e: React.KeyboardEvent<HTMLInputElement>;
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
  if (e.nativeEvent.isComposing) return;

  if (e.key === ARROW_UP_KEY) {
    if (activeNumber === 0) return;
    setActiveNumber((prev: number) => prev - 1);
  }

  if (e.key === ARROW_DOWN_KEY) {
    if (activeNumber === recommendedKeywords.length - 1) return;
    setActiveNumber((prev: number) => prev + 1);
  }
};

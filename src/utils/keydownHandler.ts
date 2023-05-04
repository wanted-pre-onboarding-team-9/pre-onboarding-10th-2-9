import { RecommendedKeywords } from '../@types/search';
import { ARROW_DOWN, ARROW_UP, ENTER } from './const';

export type keydownHandlerProps = {
  e: React.KeyboardEvent<HTMLInputElement>;
  activeNumber: number;
  setActiveNumber: React.Dispatch<React.SetStateAction<number>>;
  recommendedKeywords: RecommendedKeywords[];
  modifyKeyword: (newKeyword: string) => void;
};

export const keydownHandler = ({
  e,
  activeNumber,
  setActiveNumber,
  recommendedKeywords,
  modifyKeyword,
}: keydownHandlerProps) => {
  if (e.nativeEvent.isComposing) return;
  if (!recommendedKeywords.length) return;
  if (e.key === ARROW_UP) {
    if (activeNumber === 0) return;
    setActiveNumber((prev: number) => prev - 1);
  }
  if (e.key === ARROW_DOWN) {
    if (activeNumber === recommendedKeywords.length - 1) return;
    setActiveNumber((prev: number) => prev + 1);
  }
  if (e.key === ENTER) {
    modifyKeyword(recommendedKeywords[activeNumber].name);
  }
};

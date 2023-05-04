import { RecommendedKeywords } from '../@types/search';
import { ARROW_DOWN_KEY, ARROW_UP_KEY, ENTER_KEY } from './const';

export type keydownHandlerProps = {
  e: React.KeyboardEvent<HTMLInputElement>;
  activeNumber: number;
  setActiveNumber: React.Dispatch<React.SetStateAction<number>>;
  recommendedKeywords: RecommendedKeywords[];
  changeInputText: (selectedText: string) => void;
};

export const keydownHandler = ({
  e,
  activeNumber,
  setActiveNumber,
  recommendedKeywords,
  changeInputText,
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

  if (e.key === ENTER_KEY) {
    changeInputText(recommendedKeywords[activeNumber].name);
  }
};

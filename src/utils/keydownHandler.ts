import { KeydownHandlerProps } from '../@types/props';
import { ARROW_DOWN, ARROW_UP, ENTER } from './const';

const keydownHandler = ({
  e,
  activeNumber,
  setActiveNumber,
  recommendedKeywords,
  modifyKeyword,
}: KeydownHandlerProps) => {
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

export default keydownHandler;

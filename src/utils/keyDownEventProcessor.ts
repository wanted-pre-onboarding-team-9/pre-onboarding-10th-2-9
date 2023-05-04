import { FocusedState, RecommendedWord } from '../@types/types';

const keyDownEventProcessor = (
  key: string,
  focusedState: FocusedState,
  data: RecommendedWord[],
) => {
  const minIndex = 0;
  const maxIndex = data.length - 1;

  if (key === 'ArrowDown') {
    if (focusedState.isFirstMoving) {
      return { isFirstMoving: false, focusedIndex: 0 };
    }

    const currentIndex = focusedState.focusedIndex + 1;

    return currentIndex > maxIndex
      ? { ...focusedState, focusedIndex: 0 }
      : { ...focusedState, focusedIndex: currentIndex };
  }

  if (key === 'ArrowUp') {
    if (focusedState.isFirstMoving) {
      return { isFirstMoving: false, focusedIndex: maxIndex };
    }

    const currentIndex = focusedState.focusedIndex - 1;

    return currentIndex < minIndex
      ? { ...focusedState, focusedIndex: maxIndex }
      : { ...focusedState, focusedIndex: currentIndex };
  }

  return focusedState;
};

export default keyDownEventProcessor;

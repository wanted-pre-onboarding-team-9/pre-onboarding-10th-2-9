import { KEYBOARD } from './const';

export const calcActiveIndex = (
  key: typeof KEYBOARD.ARROW_DOWN | typeof KEYBOARD.ARROW_UP,
  currentIndex: number,
  maxIndex: number,
) => {
  switch (key) {
    case KEYBOARD.ARROW_DOWN:
      if (currentIndex === maxIndex) {
        return -1;
      }
      return currentIndex + 1;

    case KEYBOARD.ARROW_UP:
      if (currentIndex === -1) {
        return maxIndex;
      }
      return currentIndex - 1;

    default:
      return currentIndex;
  }
};

export default {};

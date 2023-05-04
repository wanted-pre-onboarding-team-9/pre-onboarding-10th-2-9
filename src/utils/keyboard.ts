import { DOWN_ARROW_KEY, UP_ARROW_KEY } from './const';

export const calcActiveIndex = (
  key: React.KeyboardEvent<HTMLInputElement>['key'],
  currentIndex: number,
  maxIndex: number,
) => {
  switch (key) {
    case DOWN_ARROW_KEY:
      if (currentIndex === maxIndex) {
        return 0;
      }
      return currentIndex + 1;

    case UP_ARROW_KEY:
      if (currentIndex === 0) {
        return maxIndex;
      }
      return currentIndex - 1;

    default:
      return undefined;
  }
};

export default {};

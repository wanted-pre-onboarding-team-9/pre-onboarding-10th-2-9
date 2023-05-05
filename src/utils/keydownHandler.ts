export type Props = {
  keyValue: string;
  currentIndex: number;
  maxIndex: number;
};

export const keydownHandler = ({ keyValue, currentIndex, maxIndex }: Props): number => {
  switch (keyValue) {
    case 'ArrowDown':
      return currentIndex < maxIndex ? currentIndex + 1 : -1;

    case 'ArrowUp':
      return currentIndex > -1 ? currentIndex - 1 : maxIndex;

    case 'Enter':
      return -1;
    default:
      return -1;
  }
};

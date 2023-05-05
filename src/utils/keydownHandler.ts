export type Props = {
  keyValue: string;
  currentWordInfo: {
    currentIndex: number;
    currentWord: string;
  };
  maxIndex: number;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
};

export const keydownHandler = ({
  keyValue,
  currentWordInfo,
  maxIndex,
  setKeyword,
}: Props): number => {
  const { currentIndex, currentWord } = currentWordInfo;
  switch (keyValue) {
    case 'ArrowDown':
      return currentIndex < maxIndex ? currentIndex + 1 : -1;

    case 'ArrowUp':
      return currentIndex > -1 ? currentIndex - 1 : maxIndex;

    case 'Enter':
      setKeyword(currentWord);
      return -1;
    default:
      return -1;
  }
};

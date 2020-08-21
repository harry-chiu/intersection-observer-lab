const colorTranslator = page => {
  switch (page) {
    case 1:
      return '#000000';
    case 2:
      return '#111111';
    case 3:
      return '#333333';
    case 4:
      return '#EF9A9A';
    case 5:
      return '#E57373';
    case 6:
      return '#F44336';
    default:
      return '#ff0000';
  }
};

export default colorTranslator;

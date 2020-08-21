const backgroundTranslator = page => {
  switch (page) {
    case 1:
      return '#ffffff';
    case 2:
      return '#cccccc';
    case 3:
      return '#aaaaaa';
    case 4:
      return '#666666';
    case 5:
      return '#393939';
    case 6:
      return '#212121';
    default:
      return '#000000';
  }
};

export default backgroundTranslator;

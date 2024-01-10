const ElementHelper = {
  // only work if the element setter only takes 1 parameter (not object)
  render({ elementName, setterName, elementClasses = [], data }) {
    const element = document.createElement(`${elementName}`);
    elementClasses.forEach((elementClass) => {
      if (elementClass) element.classList.add(elementClass);
    });
    element[setterName] = data;

    return element;
  },
};

export default ElementHelper;

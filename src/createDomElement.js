const createDomElement = (typeName, className = 'default', text = '') => {
    let element = document.createElement(`${typeName}`);
    element.classList.add(`${className}`);
    element.textContent = text;
    return element;
}

export default createDomElement;
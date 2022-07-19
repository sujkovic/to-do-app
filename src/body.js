import createDomElement from './createDomElement';
import Task from './task';

const body = () => {
    document.querySelector('.sidebar-body-wrapper').append(createDomElement('div', 'body'));
}

export default body;
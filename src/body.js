import createDomElement from './createDomElement';
import Task from './task';

const body = () => {
    document.querySelector('.sidebar-body-wrapper').append(createDomElement('div', 'body'));
    let task1 = new Task('Ballin', 'we ball', '1/1/23', 3);
    task1.renderToBody();
    console.log(task1.desc);
}

export default body;
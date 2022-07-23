import createDomElement from './createDomElement';
import Check from './check.png';
import moment from 'moment';

const header = () => {
    let left = createDomElement('span');
    let header = createDomElement('header');
    let middle = createDomElement('div', 'middle');
    let headerTitle = createDomElement('span', 'headerTitle', 'To Do');
    let headerLogo = new Image();
    let date = createDomElement('span', 'headerDate', moment().format(`dddd, MMMM Do`));
    headerLogo.src = Check;
    middle.append(headerTitle);
    middle.append(headerLogo);
    header.append(left);
    header.append(middle);
    header.append(date);
    document.querySelector('body').append(header);
}

export default header;
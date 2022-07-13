import createDomElement from './createDomElement';
import Check from './check.png';

const header = () => {
    let header = createDomElement('header');
    let headerTitle = createDomElement('span', 'headerTitle', 'To Do');
    let headerLogo = new Image();
    headerLogo.src = Check;
    header.append(headerTitle);
    header.append(headerLogo);
    document.querySelector('body').append(header);
}

export default header;
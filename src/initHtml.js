import header from './header';
import sidebar from './sidebar';
import body from './body';
import createDomElement from './createDomElement';

const initHtml = () => {
    header();
    document.querySelector('body').append(createDomElement('div', 'sidebar-body-wrapper'));
    sidebar();
    //body();
}

export default initHtml;
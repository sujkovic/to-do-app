import createDomElement from './createDomElement';

const sidebar = () => {
    let sidebar = createDomElement('div', 'sidebar');
    let sidebarTitle = createDomElement('div', 'sidebarTitle', 'Lists');
    sidebar.append(sidebarTitle);
    document.querySelector('.sidebar-body-wrapper').append(sidebar);
}

export default sidebar;
import createDomElement from './createDomElement';
import Project from './project';
import Notebook from './notebook';

const sidebar = () => {
    let sidebar = createDomElement('div', 'sidebar');
    let sidebarTitle = createDomElement('div', 'sidebarTitle', 'Notebook');
    let addProjectBtn = createDomElement('button', 'addProjectBtn', 'Add Project');
    let notebookWrapper = createDomElement('div', 'notebookWrapper');
    addProjectBtn.addEventListener('click', () => {
        let project = new Project(prompt('Enter project name'));
        if (project.name !== null) {
            window.notebook.addProject(project);
            window.notebook.unRenderSidebar();
            window.notebook.renderToSidebar();
        }
    })
    sidebar.append(sidebarTitle);
    sidebar.append(notebookWrapper);
    sidebar.append(addProjectBtn);

    document.querySelector('.sidebar-body-wrapper').append(sidebar);
}

export default sidebar;
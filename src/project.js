import createDomElement from './createDomElement';
import task from './task';

class Project {
    constructor(name) {
        this.name = name;
        this.projects = [];
    }
    addTask = (task) => {
        this.projects.push(task);
    }
    removeTask = (index) => {
        this.projects = this.projects.splice(index, 1);
    }
    renderToBody = () => {
        this.projectWrapper = createDomElement('div', 'bodyProjectWrapper');
        this.projectTitle = createDomElement('div', 'bodyProjectTitle', `${this.name}`);
        document.querySelector('.body').append(this.projectTitle);
        document.querySelector('.body').append(this.projectWrapper);
        for (let i = 0; i < this.projects.length; i++) {
            this.projects[i].renderToBody();
        }
    }
    renderToSideBar = () => {
        this.projectSidebarWrapper = createDomElement('div', 'sidebarProjectWrapper', `${this.name}`);

    }
}

export default Project;
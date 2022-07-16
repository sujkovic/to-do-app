import createDomElement from './createDomElement';

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
        this.projectTitle = createDomElement('div', 'bodyProjectTitle' `${this.name}`);
        for (let i = 0; i < this.projects.length; i++) {
            this.projects[i].renderToBody;
        }
    }
}

export default Project;
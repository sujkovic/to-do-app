import createDomElement from './createDomElement';
import project from './project';

class Notebook {
    constructor() {
        this.notebook = [];
    }
    addProject = (project) => {
        this.notebook.push(project);
    }
    removeProject = (name) => {
        this.notebook = this.notebook.filter(project => project.name !== name);
    }
    renderToSidebar = () => {
        for (let i = 0; i < this.notebook.length; i++) {
            this.notebook[i].renderToSideBar();
        }
    }
    unRenderSidebar = () => {
        while (document.querySelector('.notebookWrapper').firstChild) {
            document.querySelector('.notebookWrapper').firstChild.remove();
        }
    }
}

export default Notebook;
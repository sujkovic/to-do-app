import createDomElement from './createDomElement';
import Task from './task';
import Trashcan from './trashcan.png';

class Project {
    constructor(name) {
        this.name = name;
        this.project = [];
    }
    addTask = (task) => {
        this.project.push(task);
    }
    removeTask = (name) => {
        this.project = this.project.filter(task => task.title !== name);
    }
    renderToBody = () => {
        document.querySelector('.sidebar-body-wrapper').append(createDomElement('div', 'body'));
        this.projectWrapper = createDomElement('div', 'bodyProjectWrapper');
        this.projectTitle = createDomElement('div', 'bodyProjectTitle', `${this.name}`);
        document.querySelector('.body').append(this.projectTitle);
        document.querySelector('.body').append(this.projectWrapper);
        for (let i = 0; i < this.project.length; i++) {
            if (this.project[i].priority === 1) {
                this.project[i].renderToBody();
            }
        }
        for (let i = 0; i < this.project.length; i++) {
            if (this.project[i].priority === 2) {
                this.project[i].renderToBody();
            }
        }
        for (let i = 0; i < this.project.length; i++) {
            if (this.project[i].priority === 3) {
                this.project[i].renderToBody();
            }
        }

        this.renderAddTaskBtn();
    }
    unRenderBody = () => {
        document.querySelector('.body').remove();
    }
    renderToSideBar = () => {
        this.sidebarProject = createDomElement('div', 'sidebarProject',);
        this.sidebarProjectName = createDomElement('div', 'sidebarProjectName', `${this.name}`);
        this.renderTrashcan();
        this.sidebarProject.append(this.sidebarProjectName);
        this.sidebarProject.append(this.trashcan);
        this.sidebarProject.addEventListener('click', () => {
            this.unRenderBody();
            this.renderToBody();
            window.curProject = this;
        });
        document.querySelector('.notebookWrapper').append(this.sidebarProject);
    }
    renderTrashcan = () => {
        this.trashcan = new Image();
        this.trashcan.src = Trashcan;
        this.trashcan.classList.add('trashcanBtn');
        this.trashcan.classList.add('trashcanBtnActive');
        this.trashcan.classList.toggle('trashcanBtnActive');
        this.sidebarProject.addEventListener('mouseenter', () => {
            this.trashcan.classList.toggle('trashcanBtnActive');
        });
        this.sidebarProject.addEventListener('mouseleave', () => {
            this.trashcan.classList.toggle('trashcanBtnActive');
        });
        this.trashcan.addEventListener('click', () => {
            this.sidebarProject.remove();
            window.notebook.removeProject(this.name);
        });
    }
    renderAddTaskBtn = () => {
        this.addTaskBtn = createDomElement('button', 'addTaskBtn', 'Add Task');
        this.addTaskBtn.addEventListener('click', () => {
            console.log(`length before adding: ${this.project.length}`);
            let myTask = new Task(prompt('Enter Task Title'), prompt('Enter due date'), prompt('Enter priority (1-3)'));
            if (myTask.title !== '' && myTask.due !== '' && (myTask.priority === 1 || myTask.priority === 2 || myTask.priority === 3)) {
                this.addTask(myTask);
                this.unRenderBody();
                this.renderToBody();
            }
        }, false);
        document.querySelector('.body').append(this.addTaskBtn);
    }
}

export default Project;
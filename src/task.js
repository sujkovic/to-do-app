import createDomElement from './createDomElement';
import Trashcan from './trashcan.png';

class Task {
    constructor(title, due, priority) {
        this.title = title;
        this.complete = false;
        this.due = due;
        this.priority = parseInt(priority);
    }
    renderToBody = () => {
        this.domElementWrapper = createDomElement('div', 'bodyTaskWrapper');
        this.domElementTitle = createDomElement('div', 'bodyTaskTitle', `${this.title}`);
        this.domElementDue = createDomElement('div', 'bodyTaskDue', `${this.due}`);
        this.renderTrashcan();
        this.domElementWrapper.append(this.domElementTitle);
        this.domElementWrapper.append(this.domElementDue);
        this.domElementWrapper.append(this.trashcan);
        document.querySelector('.bodyProjectWrapper').append(this.domElementWrapper);
    }
    renderTrashcan = () => {
        this.trashcan = new Image();
        this.trashcan.src = Trashcan;
        this.trashcan.classList.add('trashcanBtn');
        this.trashcan.classList.add('trashcanBtnActive');
        this.trashcan.classList.toggle('trashcanBtnActive');
        this.domElementWrapper.addEventListener('mouseenter', () => {
            this.trashcan.classList.toggle('trashcanBtnActive');
        });
        this.domElementWrapper.addEventListener('mouseleave', () => {
            this.trashcan.classList.toggle('trashcanBtnActive');
        });
        this.trashcan.addEventListener('click', () => {
            this.domElementWrapper.remove();
            window.curProject.removeTask(this.title);
        });
    }

}

export default Task;
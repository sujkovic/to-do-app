import createDomElement from './createDomElement';

class Task {
    constructor(title, desc, due, priority) {
        this.title = title;
        this.desc = desc;
        this.due = due;
        this.priority = priority;
    }
    renderToBody = () => {
        this.domElementWrapper = createDomElement('div', 'bodyTaskWrapper');
        this.domElementTitle = createDomElement('div', 'bodyTaskTitle', `${this.title}`);
        this.domElementDue = createDomElement('div', 'bodyTaskDue', `${this.due}`);
        this.domElementDesc = createDomElement('div', 'bodyTaskDesc', `${this.title}`);
        this.domElementWrapper.append(this.domElementTitle);
        this.domElementWrapper.append(this.domElementDue);
        this.domElementWrapper.append(this.domElementDesc);
        document.querySelector('.body').append(this.domElementWrapper);
    }

}

export default Task;
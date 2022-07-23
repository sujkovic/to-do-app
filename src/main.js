import './style.css';
import initHtml from './initHtml';
import Task from './task';
import Project from './project';
import Notebook from './notebook';


initHtml();
window.notebook = new Notebook();   //  global notebook var
//  init defaults
let defaultProject = new Project('Welcome');
let task1 = new Task('Do chest and shoulders tuesday', '8/1/22', 3);
let task2 = new Task('Meet Joe for coffee at 4', '7/29/22', 2);
let task3 = new Task('Review hash tables', '7/28/22', 1);

defaultProject.addTask(task1);
defaultProject.addTask(task2);
defaultProject.addTask(task3);
window.notebook.addProject(defaultProject);

window.curProject = defaultProject;     //  global curProject var

defaultProject.renderToBody();
window.notebook.renderToSidebar();

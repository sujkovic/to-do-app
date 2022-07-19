import './style.css';
import initHtml from './initHtml';
import Task from './task';
import Project from './project';

initHtml();
let project1 = new Project('Balling project');
let task1 = new Task('Ballin', 'we ball', '1/1/23', 3);
let task2 = new Task('take dog mf to da veterinarian', 'we do not ball we do not ballwe do not ballwe do not ballwe do not ballwe do not ballwe do not ballwe do not ballwe do not ballwe do not ballwe do not ballwe do not ballwe do not ballwe do not ballwe do not ball', '2/3/33', 2);
project1.addTask(task1);
project1.addTask(task2);
project1.renderToBody();
console.log(task1.desc);
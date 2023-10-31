import './style.css';
import { layout, populateSidebar, populateTodoList } from "./view";
import { createCategory } from './category';

function importMaterialIcons() {
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
    document.head.appendChild(link);

}

let allCategory = createCategory('All');
allCategory.addTodo('Run', 'Run for 1 mile', Date.toString(), true);
allCategory.addTodo('Walk dogs', '', '', false);
allCategory.addTodo('Build project', '', Date.toString(), false);

importMaterialIcons();
layout();
populateSidebar(['All', 'Personal', 'Exercise', 'Work']);
populateTodoList(allCategory);
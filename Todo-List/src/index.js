import './style.css';
import { constructPageLayout, populateSidebar } from "./view";
import { createCategory } from './category';

function importMaterialIcons() {
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined';
    document.head.appendChild(link);

}

let allCategory = createCategory('All');
allCategory.addTodo('Run', 'Run for 1 mile', Date.toString(), true);
allCategory.addTodo('Walk dogs', '', '', false);
allCategory.addTodo('Build project', '', Date.toString(), false);

let exerciseCategory = createCategory('Exercise');
exerciseCategory.addTodo('Run', 'Run for 1 mile', Date.toString(), true);
exerciseCategory.addTodo('Lift Weights', '', '', false);
exerciseCategory.addTodo('Yoga', '', Date.toString(), false);

let categories = [allCategory, exerciseCategory];

importMaterialIcons();
constructPageLayout();
populateSidebar(categories);

let categoriesDiv = document.querySelector('div.categories :nth-child(1)');
categoriesDiv.click();
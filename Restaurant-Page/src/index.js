import './style.css';
import { home } from './home';
import { menu } from './menu';
import { contact } from './contact';

let body = document.querySelector('body');


let header = document.createElement('div');
body.appendChild(header);
header.classList.add('header');

let content = document.createElement('div');
body.appendChild(content);
content.classList.add('content');

let title = document.createElement('div');
header.appendChild(title);
title.classList.add('title');
title.textContent = 'Sushi Restaurant Name';

let tab_row = document.createElement('div');
header.appendChild(tab_row);
tab_row.classList.add('tab-row');

let home_tab = document.createElement('button');
tab_row.appendChild(home_tab);
home_tab.textContent = 'Home';
home_tab.addEventListener('click', (event) => {
    content.textContent = '';
    home();
});

let menu_tab = document.createElement('button');
tab_row.appendChild(menu_tab);
menu_tab.textContent = 'Menu';
menu_tab.addEventListener('click', (event) => {
    content.textContent = '';
    menu();
});

let contact_tab = document.createElement('button');
tab_row.appendChild(contact_tab);
contact_tab.textContent = 'Contact';
contact_tab.addEventListener('click', (event) => {
    content.textContent = '';
    contact();
});





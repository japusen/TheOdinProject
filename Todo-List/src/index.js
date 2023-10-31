import './style.css';
import { layout, populateSidebar, populateTodoList } from "./view";

layout();
populateSidebar(['All', 'Personal', 'Exercise', 'Work']);
populateTodoList('All', ['run', 'work', 'walk dogs', 'eat']);
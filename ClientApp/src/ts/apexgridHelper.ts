import { ApexGrid } from 'apex-grid';
//import "igniteui-webcomponents/themes/light/bootstrap.css";
//import { css, html, LitElement } from "lit";
//import { customElement, query, state } from "lit/decorators.js";
//import {
//    createProductInfo,
//    createUserSimple,
//    ProductInfo,
//    UserSimple,
//} from "./mock-data";

ApexGrid.register();
 
const grid = document.createElement('apex-grid');
 
grid.autoGenerate = true;
grid.data = [
    { id: 1, name: 'John Doe', age: 28 },
    { id: 2, name: 'Jane Smith', age: 34 }
];

document.querySelector('#app')?.appendChild(grid);
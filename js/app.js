
/* import {Tamplate} from "./app_init.js" */
import { msg } from "./app_init.js";
import { Template } from "./app_init.js";

document.addEventListener("DOMContentLoaded", e => {

    console.log(e.target);
    let elements = document.createElement("p");
    let target = document.querySelector("section");
    target.appendChild(elements);

    Template.printF();

    /* console.log(msg) */

    /* const json = JSON.stringify(City)
    console.log(json+"\n")
      for(let index in City){
    console.log(index+" "+City[index]+'\n')
    } */
});
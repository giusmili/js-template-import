import { Description } from "./app_init.js";
import { Tamplate } from "./app_init.js";
import { msg } from "./app_init.js";
import { City } from "./template.js";

document.addEventListener("DOMContentLoaded", e => {

    console.log(e.target);
    console.table(Description);
    Tamplate.printF();
    console.log(msg);

    const json = JSON.stringify(City);
    console.log(json + "\n");

    for (let index in City) {
        console.log(index + " " + City[index] + '\n');
    }
});
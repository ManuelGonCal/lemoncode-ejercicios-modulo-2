import ejercicio1 from "./ejercicio1/ejercicio1";
import ejercicio2 from "./ejercicio2/ejercicio2";
import ejercicio3 from "./ejercicio3/ejercicio3";
import ejercicio4 from "./ejercicio4/ejercicio4";
import ejercicio5 from "./ejercicio5/ejercicio5";

function executeEjercicio() {
    console.clear();
    const index = this.dataset.index;
    
    switch (index) {
        case "1": 
            ejercicio1();
            break;
        case "2": 
            ejercicio2();
            break;
        case "3-a":
            ejercicio3(true);
            break;
        case "3-b":
            ejercicio3(false);
            break;
        case "4":
            ejercicio4();
            break;
        case "5":
            ejercicio5();
            break;
    }
        
}

const buttons = document.querySelectorAll(".ejercicios-content__play");

buttons.forEach(button => {
    button.addEventListener("click", executeEjercicio);
})
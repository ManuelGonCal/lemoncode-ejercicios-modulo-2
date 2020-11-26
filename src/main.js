import ejercicio1 from "./ejercicio1/ejercicio1";
import ejercicio2 from "./ejercicio2/ejercicio2";

function executeEjercicio() {
    const index = this.dataset.index;
    
    switch (index) {
        case "1": ejercicio1();
        case "2": ejercicio2();
    }
        
}

const buttons = document.querySelectorAll(".ejercicios-content__play");

buttons.forEach(button => {
    button.addEventListener("click", executeEjercicio);
})
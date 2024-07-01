let tareas = [
  { id: 1, descripcion: "Llamar a papá", realizada: true },
  { id: 2, descripcion: "Comprar los regalos", realizada: false },
  { id: 3, descripcion: "Preparar la diapositiva", realizada: false },
  { id: 4, descripcion: "Hacer el informe", realizada: false },
];

let contadorId = tareas.length;

const lista = document.querySelector("tbody");
const btnAgregar = document.querySelector("#btn_agregar");
const inputNuevaTarea = document.querySelector("#input_nueva_tarea");
const totalTareas = document.querySelector("#totalTareas");
const completas = document.querySelector("#completas");

const actualizarEstadisticas = () => {
  totalTareas.innerText = tareas.length;
  let tareasRealizadas = 0;
  for (let tarea of tareas) {
    if (tarea.realizada) {
      tareasRealizadas++;
    }
  }
  completas.innerText = tareasRealizadas;
};

const actualizarTareas = () => {
  lista.innerHTML = "";
  for (let tarea of tareas) {
    let tareaHTML = `<tr>
            <td>${tarea.id}</td>
            <td>${tarea.descripcion}</td>
            <td><input type="checkbox" onclick="actualizar(${tarea.id})" ${
      tarea.realizada ? "checked" : ""
    }></td>
            <td><button class="borrar-tarea" onclick="eliminar(${
              tarea.id
            })">✖</button></td>
        </tr>`;
    lista.innerHTML += tareaHTML;
  }
};

const actualizar = (id) => {
  for (let tarea of tareas) {
    if (tarea.id === id) {
      tarea.realizada = !tarea.realizada;
    }
  }
  actualizarEstadisticas();
  actualizarTareas();
};

const eliminar = (id) => {
  tareas = tareas.filter((tarea) => tarea.id !== id);
  actualizarEstadisticas();
  actualizarTareas();
};

btnAgregar.addEventListener("click", () => {
  const descripcion = inputNuevaTarea.value.trim();
  if (descripcion) {
    contadorId++;
    tareas.push({ id: contadorId, descripcion, realizada: false });
    actualizarTareas();
    actualizarEstadisticas();
    inputNuevaTarea.value = "";
  }
});

actualizarTareas();
actualizarEstadisticas();

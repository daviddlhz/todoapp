# Todo App: Desarrollo de una Aplicación de Gestión de Tareas

## Objetivo
El objetivo de esta prueba técnica es evaluar tus habilidades como desarrollador full-stack en la construcción de una aplicación web sencilla para gestionar una lista de tareas.

## Requerimientos

### Backend (Python - Django)
Se ha desarrollado una API RESTful utilizando Django que expone los siguientes endpoints:

- `GET /tasks`: Obtener todas las tareas.
- `POST /tasks`: Crear una nueva tarea.
- `GET /tasks/{id}`: Obtener una tarea específica por su ID.
- `PUT /tasks/{id}`: Actualizar una tarea existente.
- `DELETE /tasks/{id}`: Eliminar una tarea.

**Modelo de datos**:
Cada tarea tiene los siguientes campos:
- `id` (autoincremental)
- `título`
- `descripción`
- `estado` (pendiente, completada)
- `fecha de creación`

**Autenticación**:
La API utiliza autenticación básica con un usuario y contraseña predefinidos.

### Frontend (Angular SSR)
La interfaz de usuario está diseñada para:
- Mostrar la lista de tareas en una tabla o lista.
- Permitir agregar nuevas tareas.
- Editar tareas existentes.
- Marcar tareas como completadas.
- Eliminar tareas.

**Tecnologías**:
- Angular (última versión)
- Bootstrap para el diseño

**Funcionalidad**:
- La aplicación es responsive y se adapta a diferentes tamaños de pantalla.
- La interfaz es clara y fácil de navegar.

**Características**:
- Cada tarea se muestra en una card que incluye:
  - Título
  - Descripción
  - Estado (pendiente, completada)
  - Fecha de creación
- Un icono de lápiz para editar la tarea, que al activarse oculta el lápiz y muestra dos iconos para guardar o cancelar los cambios.
- Un checkbox para marcar la tarea como completada, que subraya el texto de la card.
- Un formulario/modal para agregar nuevas tareas, que se activa con un botón.

## Criterios de Aceptación
- **Funcionalidad**: Todas las funcionalidades descritas deben estar implementadas correctamente.
- **Código**:
  - El código debe estar bien estructurado, limpio y comentado.
  - Se deben utilizar buenas prácticas de programación.
  - Se debe manejar los errores de forma adecuada.
- **Diseño**: La interfaz de usuario debe ser atractiva y fácil de usar.
- **Estructura**: Organiza el proyecto de manera clara y eficiente, utilizando una estructura de carpetas y archivos lógica.
- **README**: Incluye un archivo README con instrucciones claras sobre cómo clonar el repositorio, instalar las dependencias y ejecutar la aplicación.

## Consideraciones Adicionales
- **Versiones**: Utiliza las últimas versiones de las tecnologías elegidas.
- **Flexibilidad**: Puedes personalizar la aplicación con características adicionales (por ejemplo, filtros, ordenamiento, notificaciones).
- **Diseño**: Utiliza frameworks CSS como Bootstrap o Material UI para agilizar el desarrollo de la interfaz.

## Instalacion del proyecto

- Ejecutamos el siguiente comando para descargar el proyecto en nuestra maquina local
    ```bash
     git clone https://github.com/daviddlhz/todoapp.git
    ```

## Ejecución del Proyecto

### Configuración y Ejecución Simultánea del Backend y Frontend

Para correr ambos proyectos (frontend y backend) simultáneamente, sigue estos pasos:

1. **Instalar dependencias en ambos proyectos**:
   - En el directorio raiz del proyecto debemos ejecutar el comando:
     ```bash
     npm run install:all
     ```

2. **Ejecutar ambos proyectos**:
   - Luego de realizar las instalaciones de las dependencias de ambos proyectos ejecutaremos el siguiente comando:
     ```bash
     npm run start:all
     ```

De esta manera podremos ejecutar el proyecto y listo solamente probamos la app en la ruta de localhost que indica la consola.

#### Desarrollado por David De La Hoz




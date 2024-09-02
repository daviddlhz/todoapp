# Todo App

## Descripción

**Todo App** es una aplicación web de gestión de tareas que permite a los usuarios crear, editar, eliminar y marcar tareas como completadas. La aplicación está construida con una arquitectura de **frontend y backend** separada, utilizando **Angular** para la interfaz de usuario y **Django** para el backend. Este proyecto está diseñado para ofrecer una experiencia de usuario intuitiva y eficiente para la gestión de tareas diarias.

### Características

- **Interfaz de Usuario Amigable**: 
  - Muestra la lista de tareas en tarjetas elegantes y responsivas.
  - Permite agregar nuevas tareas mediante un formulario emergente.
  - Ofrece opciones para editar tareas existentes con un modo de edición intuitivo.
  - Permite marcar tareas como completadas, con visualización clara del estado de la tarea.
  - Proporciona la opción de eliminar tareas con una interfaz fácil de usar.

- **Backend Robusto**:
  - Expuesta mediante una API RESTful que soporta operaciones CRUD (Crear, Leer, Actualizar, Eliminar).
  - Implementa autenticación básica para asegurar el acceso a la API.
  - Utiliza Django, un framework de Python, para gestionar la lógica de negocios y las operaciones con la base de datos.

- **Responsive y Accesible**:
  - La interfaz está diseñada para ser completamente responsive, adaptándose a diferentes tamaños de pantalla y dispositivos.
  - Utiliza Bootstrap para asegurar una presentación consistente y profesional en todas las páginas.

- **Automatización y Configuración**:
  - Incluye un script de inicialización que aplica migraciones y crea un superusuario automáticamente.
  - Configurado para ejecutar ambos frontend y backend con un solo comando utilizando `npm` y `concurrently`.

### Tecnologías Utilizadas

- **Frontend**: Angular (con Angular SSR para SEO), Bootstrap.
- **Backend**: Django, Django REST Framework.
- **Base de Datos**: SQLite (por defecto en el entorno de desarrollo).

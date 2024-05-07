# proyectoweb1san
# Proyecto Blog Web

Este es un proyecto de blog web donde los usuarios pueden registrarse, iniciar sesión y ver el panel de control del blog.

## Funcionalidades

- **Registro de usuarios**: Los usuarios pueden registrarse proporcionando un nombre de usuario y una contraseña.
- **Inicio de sesión de usuarios**: Los usuarios pueden iniciar sesión con su nombre de usuario y contraseña.
- **Panel de control del blog**: Después de iniciar sesión, los usuarios pueden acceder a un panel de control donde pueden administrar su blog, como crear, editar y eliminar publicaciones.

## Tecnologías utilizadas

- **Frontend**: El frontend de la aplicación está construido con React.js y utiliza React Router para la navegación entre páginas.
- **Backend**: El backend de la aplicación está construido con Node.js y Express.js para el servidor web.
- **Base de datos**: Se utiliza una base de datos MySQL para almacenar la información de los usuarios y las publicaciones del blog.
- **Seguridad**: Las contraseñas de los usuarios se almacenan de forma segura utilizando el algoritmo de hash bcrypt.

## Estructura del proyecto

- **`/frontend`**: Contiene el código del frontend de la aplicación.
- **`/backend`**: Contiene el código del backend de la aplicación.
  - **`/routes`**: Contiene los archivos de enrutamiento para manejar las solicitudes HTTP.
  - **`/db.js`**: Contiene funciones para interactuar con la base de datos.
  - **`/passwordUtils.js`**: Contiene funciones relacionadas con el manejo seguro de contraseñas.
- **`/database`**: Contiene archivos relacionados con la configuración y la estructura de la base de datos MySQL.

## Configuración del proyecto

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias del frontend y del backend utilizando npm o yarn en las carpetas `/frontend` y `/backend`.
3. Configura la base de datos MySQL con las credenciales necesarias y ejecuta los scripts de creación de tablas proporcionados en la carpeta `/database`.
4. Ejecuta el servidor backend utilizando el comando `npm start` en la carpeta `/backend`.
5. Ejecuta la aplicación frontend utilizando el comando `npm start` en la carpeta `/frontend`.
6. Accede a la aplicación en tu navegador visitando la URL proporcionada por el servidor frontend.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, por favor, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tus cambios (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit de ellos (`git commit -am 'Agrega una nueva característica'`).
4. Sube tus cambios a tu repositorio en GitHub (`git push origin feature/nueva-caracteristica`).
5. Crea un nuevo Pull Request.

## Autores

- [Giovanni]

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

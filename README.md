# Prueba Tecnica FrontEnd

## Descripcion 
Crear una aplicación en  NextJs, Typescript y Framework de estilos TailwindCSS.

Crear un componente Stepper que reciba mediantes children un  conjunto de step indefinido, y intentar maquetar stepper que existe en enlace figma

Adjunto enlace el cual donde ya existe creado el componente y presenta la funcionalidad.

Utilizar librería de icono de font awesome
El desarrollador  es libre de utilizar librerías
No debe usar la librería material tailwind, la librería es como guia del funcionamiento que queremos que tenga el Stepper 
Icono que recibe el step debe ser dinámico como se refleja en la librería material tailwind

## Instalacion
````
npm install
npm run build
npm run build-storybook
npm run storybook
````
## Informacion
El proyecto corre por el puerto 6006

## Herramientas Usadas
- Eslint
- Prettier
- Husky
- Storybook
- FontAwsome

## Contenedor
````
docker pull jazzblack/prueba-promarketing
docker run -d -p 3000:4025 -p 6006:6006 --name prueba jazzblack/promarketing:2.0
````

# Backbone systems test

Repository containing a test project to apply for the front end vacancy at the startup Backbone systems.

<br/>
<img src="https://assets.website-files.com/6318e08ac4910dc571c44f02/6318e2d9ffc55451438398bf_BackboneSystems_Blanco.svg" alt="logo" width="100%" height="100"/>

# DEMO
### [demo](https://test-backbonesystems.vercel.app/)

## Setup

Get the code by either cloning this repository using git

```
git clone https://github.com/Ali-09/test-backbonesystems.git
```

... or [downloading source code](https://github.com/Ali-09/test-backbonesystems/archive/master.zip) code as a zip archive.

Once downloaded, preferably use the version of Node js that is in the .nvmrc file

If you use nvm, can you use this command

```bash
#windows(powershell)
nvm use $(Get-Content .nvmrc)
#mac or linux
nvm use
```

Create environment file .env.local for develop or .env for production following content
```
NEXT_PUBLIC_API_URL=<YOUR-BASE-API-URL>
```

Open the terminal in the project directory, and install dependencies with:

```bash
npm install
# or
yarn
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Packages

### [NextJS](https://nextjs.org) 
### [Material UI](https://mui.com/) 
### [Redux Toolkit](https://redux-toolkit.js.org) 
### [Axios](https://axios-http.com/)
### [React-hook-form](https://react-hook-form.com/)
### [Styled components](https://styled-components.com/)

## Observations
El proyecto tiene como base react con typescript y como framework del mismo nextjs,
se siguió la metodología de atomic design para el diseño de los componentes donde una
page tiene los atributos y funcionalidades principales, esta misma se la pasa a un
componente tipo template donde distribuye las props a cada componente de tipo organismo y
estás misma a los componentes que ocupen del tipo moleculas o atomos, para
la parte de framework ui se utilizó material ui, para el estado de se utilizó redux toolkit
para la creación de slices y asyncthunks para la parte de slide effects al momento de consultar
a la api, como cliente de peticiones se utilizo la libreria de axios creando una instancia para
mayor facilidad y limpieza a la hora de realizar las llamadas en código, esta misma instancia utiliza una variable de entorno donde obtiene como valor la url base de la api, el proyecto consta de dos custom hooks
uno para definir el tipado de los principales hooks a utilizar de la librería de react-redux y otro para realizar debouncing
para la parte de la funcionalidad de buscar en listado de contactos por correo, por último este proyecto para el tema de deploys se utilizó vercel como servicio de hosting y se en el mismo se tiene dos servicios de deploys, uno para main y otro para develop.

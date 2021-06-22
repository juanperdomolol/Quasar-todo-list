https://wayneoutthere.com/2020/04/06/getting-started-with-quasar-and-vuejs-on-ubuntu/
# Quasar App (youtube-todo)

A Quasar Framework app

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://v1.quasar.dev/quasar-cli/quasar-conf-js).


Primero, debe instalar esto ejecutando esto en su máquina de desarrollo Quasar:

npm install -g electron-installer-debian

Luego, crea la aplicación con las instrucciones de Quasar electron, pero para mí fue tan simple como ejecutar esto:

quasar build - m electron

Después de ejecutar eso, encontrará dos directorios, uno de los cuales todavía no sé qué hace. Los dos directorios eran "my-app-name-linux-x64" y "Unpackaged"

Luego creé un directorio en mi carpeta de proyecto de quasar en el nivel superior llamado 'instaladores'

Luego tomé el siguiente comando que saqué de la página de lectura anterior:

electron-installer-debian --src dist/app-linux-x64/ --dest dist/installers/ --arch amd64

Y ajusté el 'src' (fuente) para que apunte al directorio con el nombre de mi aplicación en la carpeta electron y el 'dest' (destino) al directorio del instalador que creé. Puedes hacer lo que quieras, pero el mío se ve así, por lo tanto:

electron-installer-debian --src dist/electron/my-app-name-linux-x64/ --dest installers/ --arch amd64

El resultado fue un archivo de instalación .deb completamente efectivo que se instaló sin problemas y realmente terminó el tutorial anterior con una nota alta.

Nota importante: tuve este error:

Creando el paquete (esto puede llevar un tiempo)
Error: no se pudo encontrar el binario de la aplicación Electron en “dist / electron / Quasar App-linux-x64 / my-app-name”. Es posible que deba volver a empaquetar la aplicación utilizando la opción "ejecutableName" de Electron Packager.

Esto tomó mucho tiempo para solucionar el problema, pero el problema no era más que abrir el archivo package.json y asegurarse de que las dos entradas siguientes coincidan y probablemente tengan guiones en los nombres (no he confirmado esa necesidad, pero funcionó con ellos, por lo que ¡Me apego a eso!)

"Nombre": "mi-aplicación",
"productName": "mi-aplicación",

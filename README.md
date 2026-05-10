# Proyecto TechLab Store - Pre-Entrega
**Alumno:** Troncoso Adolfo Jesús

Este proyecto es una herramienta de consola (CLI) desarrollada en **Node.js** que interactúa con la API de [FakeStore](https://fakestoreapi.com/) para gestionar productos (lectura, creación y eliminación).

## 🚀 Instalación
Antes de probar el programa, es necesario instalar las dependencias necesarias para las pruebas:
```bash
npm install
```

## 🛠️ Uso del programa
El programa se ejecuta a través de comandos en la terminal con el siguiente formato:
`npm run start <METODO> <RECURSO> [ARGUMENTOS]`

### 1. Consultar todos los productos (GET)
```bash
npm run start GET products
```

### 2. Consultar un producto específico por ID (GET)
```bash
npm run start GET products/7
```

### 3. Crear un nuevo producto (POST)
Se deben pasar el **título**, **precio** y **categoría** como argumentos extra:
```bash
npm run start POST products "Nuevo Producto" 25.5 "electronics"
```

### 4. Eliminar un producto (DELETE)
```bash
npm run start DELETE products/7
```

## 🧪 Pruebas (Testing)
El proyecto incluye un conjunto de pruebas automatizadas con **Mocha** y **Chai** para verificar el correcto funcionamiento de la lógica. Para ejecutarlas, usá el siguiente comando:
```bash
npm test
```

---
*Este proyecto fue realizado como parte de la Pre-Entrega de Backend.*

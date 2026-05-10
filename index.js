/**
 * index.js - Proyecto TechLab Store
 * 
 * Alumno: Troncoso Adolfo Jesús
 * 
 * Este programa es una herramienta de consola para gestionar los productos
 * de una tienda online conectándose a la API de FakeStore.
 */
// URL base de la API FakeStore
const API_URL = 'https://fakestoreapi.com/products';

/**
 * Función principal asíncrona para manejar la lógica del programa
 */
async function main() {
  try {
    // 1. Uso de destructuring y rest operator para capturar los argumentos
    // process.argv[0] es 'node', process.argv[1] es 'index.js'
    const[,, method, path, ...extraArgs] = process.argv;

    // Validación básica
    if (!method || !path) {
      console.log("❌ Error: Faltan argumentos.\nEjemplo de uso: npm run start GET products");
      return;
    }

    // 2. Uso de métodos de strings/arrays para separar la ruta y el posible ID
    const [resource, id] = path.split('/');

    if (resource !== 'products') {
      console.log("❌ Error: Esta herramienta solo soporta el recurso 'products'.");
      return;
    }

    // Evaluamos el método HTTP a utilizar
    switch (method.toUpperCase()) {
      
      case 'GET': {
        if (id) {
          // Consultar un Producto Específico
          const res = await fetch(`${API_URL}/${id}`);
          const product = await res.json();
          console.log(`\n📦 [INFO] Mostrando producto ${id}:\n`, product);
        } else {
          // Consultar Todos los Productos
          const res = await fetch(API_URL);
          const products = await res.json();
          console.log('\n📦 [INFO] Lista completa de productos:\n', products);
        }
        break;
      }

      case 'POST': {
        // Uso de destructuring sobre los argumentos extra (title, price, category)
        const [title, price, category] = extraArgs;

        if (!title || !price || !category) {
          console.log("❌ Error: Faltan datos del producto.\nEjemplo: npm run start POST products T-Shirt-Rex 300 remeras");
          return;
        }

        // Armamos el objeto combinando propiedades (podríamos usar spread operator si tuvieramos un objeto base)
        const newProduct = { title, price: parseFloat(price), category };

        const res = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newProduct)
        });
        
        const createdProduct = await res.json();
        console.log('\n✅ [ÉXITO] Nuevo producto creado:\n', createdProduct);
        break;
      }

      case 'DELETE': {
        if (!id) {
          console.log("❌ Error: Debes proporcionar un ID.\nEjemplo: npm run start DELETE products/7");
          return;
        }

        const res = await fetch(`${API_URL}/${id}`, {
          method: 'DELETE'
        });
        
        const deletedProduct = await res.json();
        console.log(`\n🗑️ [ÉXITO] Producto ${id} eliminado. Datos del producto eliminado:\n`, deletedProduct);
        break;
      }

      default:
        console.log(`❌ Error: Comando '${method}' no reconocido. Usa GET, POST o DELETE.`);
    }
  } catch (error) {
    console.error("\n❌ [ERROR CRÍTICO] Hubo un problema al comunicarse con la API:", error.message);
  }
}

// Ejecutamos la función principal
main();
# Ejercicio de Encriptación con bcryptjs

## Instrucciones

1. **Abrir el ejercicio base** que se compartió utilizando VS Code.
   - Instalar las dependencias del proyecto, ejecutando en la terminal el comando:
     ```bash
     npm install
     ```
   - Identificar los dos endpoints creados. El objetivo es desarrollar la lógica de estos endpoints.
   - Habilitar el archivo `.env` a partir del archivo `env.sample` que se encuentra en el proyecto.

2. **Endpoint `/encriptar`**
   - Este endpoint recibe un password plano mediante una petición POST y debe encriptarlo. Los pasos son:
     - Validar que la longitud del password sea mayor a 10 caracteres.
     - Si cumple con la condición, utilizar `bcryptjs.hash()` para encriptar la clave.
     - Configurar el valor de `SaltRounds` en 12 (este valor se define en el archivo `.env`).
     - Retornar un código de estado 201 con el mensaje `Generación de hash exitosa` y concatenar el hash generado.
     - Si no cumple la condición, retornar un mensaje en formato JSON que diga `Debe enviar una clave válida para encriptar`, con el código de estado 400.

3. **Endpoint `/comparar`**
   - Este endpoint es del tipo GET y compara el hash generado anteriormente con la clave enviada. 
     - Crea una constante llamada `hashGenerado`, que almacenará el hash estático del ejercicio.
     - Utiliza el método `bcryptjs.compare()` para comparar el hash y la clave.
     - Si la comparación es correcta, retornar un mensaje `Comparación exitosa` con código de estado 200.
     - Si no lo es, retornar un código 400 con el mensaje `No se ha podido validar la clave`.
     - Ambos mensajes deben ser en formato JSON.

4. **Prueba de los Endpoints**
   - Utiliza Postman o Thunder Client para probar los endpoints:
     1. Ejecuta el endpoint `/encriptar` para obtener el hash.
     2. Copia y pega el hash generado en el endpoint `/comparar`, junto con la clave original en formato plano, para validar la respuesta.

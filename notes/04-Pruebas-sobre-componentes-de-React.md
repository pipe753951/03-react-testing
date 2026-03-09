# #04. Pruebas sobre componentes de React

Para probar componentes de React con Vitest, se hace necesario utilizar Testing Library y `jsdom`.

## Configurar entorno

Primero, se hace la instalación de Testing Library siguiendo la documentación. Luego, en `vite.config.js`, se cambia la configuración de tipo Vite a tipo Vitest para garantizar la configuración del entorno de prueba, luego, se añade la configuración de `enviroment: "jsdom"` y `globals: true` en `test`. La primera es para configurar un entorno de JavaScript parecido al entorno de los navegadores (Con `document` y `window`), y la segunda es para poder utilizar Vitest globalmente en el proyecto sin necesidad de aplicar importaciones.

Por ejemplo:

```tsx
- import { defineConfig } from "vite";
+ import { defineConfig } from "vitest/config";
- import react from "@vitejs/plugin-react-swc";

- // https://vite.dev/config/
- export default defineConfig({
-   plugins: [react()],
+  test: { environment: "jsdom", globals: true },
- });
```

## Probar componentes

Para probar componentes de React, se utiliza la función `render` y la constante `screen`; Ambos de Testing Library. El primero sirve para imprimir en la DOM virtual de `jsdom` el componente, devuelve información acerca del documento impreso; el segundo es para manipular y hacer pruebas de la DOM virtual.

### `render().container`

Sirve para manipular el contenido impreso cómo si fuera un elemento de la DOM, lo que permite hacerlo de una manera similar a cómo se hace en la web.

> **⚠️ Advertencia:** Usarlo tiene desventajas, si bien permite lo mencionado anteriormente, no se actualiza si no es sólo cuando se imprime algo. Tal vez es porque imprime contenido estático que no cambiará pase lo que pase.

> **💡 Nota:** El instructor recomienda usarlo sólo cuando se desee probar contenido que no cambie.

### `screen`

Es una constante de Testing Library que permite manipular la DOM virtual, esto permite manejar eventos y contenido dinámico. Su uso es diferente a la DOM tradicional, lo que podría dar una curva de aprendizaje.

#### Formar de capturar elementos

Para capturar elementos con `screen`, se puede usar los métodos `get`, que son varios, entre ellos están:

1. `getByRole:` Obtiene elementos por el rol ó tipo de elemento.
2. `getByTestId:` Obtiene elementos por el atributo global `data-testid`.

# #01. Introducción a las pruebas automáticas

Se hablará sobre el testing, específicamente las pruebas automáticas.

## Ventajas

- Garantizan calidad.
- Detectan errores.
- Facilitan el mantenimiento.
- Aceleran el desarrollo con integraciones continuas, también conocidas como CI/CD.
- Hace que los despliegues sean más seguros, aunque no infalibles.

## La idea de las pruebas

Si alguien te quiere regalar un carro porque nunca ha sido probado, ni se sabe ninguna especificación, seguramente no lo aceptarías. Algo similar pasa con el desarrollo de software.

## Algunos tipos de pruebas

- **Unitarias:** Será el enfoque del curso. Se enfoca en partes atómicas, es decir, las partes más pequeñas de la aplicación.
- **Integración:** Prueba la reacción de varias partes en conjunto.
- **E2E - End to End:** La idea es ejecutar un flujo continuo como si fuera un proceso que realizaría el usuario.

### Las pruebas unitarias

1. Son las pruebas que el instructor recomienda, ya que facilita pruebas más grandes y complicadas
2. Deben ser atómicas, es decir, se debe tener la menor cantidad de dependencias.
3. Debe estar especializada en la pieza que se está probando.

### Las pruebas de integración

1. Estudia el funcionamiento de varias piezas en conjunto.
2. Estar pruebas no ser mayores a las unitarias.

### Pruebas E2E

1. Ejecutan un flujo de trabajo aislado.
2. Tiene un objetivo específico.
3. Prueba casos improbables

## Características de las pruebas automáticas

Estas características mencionadas por el instructor, menciona que deben ser respetado por toda prueba automática que se planea hacer:

1. Fáciles de escribir
2. Fáciles de leer.
3. Rápidas.
4. Flexibles.

> **💡 Nota:** Una característica parametrizable y no obligatoria es que las pruebas sean “Parametrizables”.

## El “Triple A”

---

Es una forma de organizar pruebas en tres etapas:

1. **Arrange** (Arreglar u organizar): Consiste en preparar las condiciones para hacer la prueba.
2. **Act** (Actuar): Consiste en hacer la prueba.
3. **Assert** (Afirmar o verificar): Consiste en analizar los resultados de la prueba.

## Mitos sobre las pruebas

1. _Hacen que mi aplicación no tenga errores_: Realmente, existen casos en que no se va a poder probar todo, porque a veces no se nos ocurrirá hacer todas las pruebas posibles. Esto hace que la aplicación sea propensa a errores.
2. _Las pruebas no pueden fallar_: En realidad, sí. Esto es porque las pruebas también es código que la gente escribe (e incluso la IA), que puede fallar al igual que el resto del código fuente. Por lo tanto, se recomienda revisar tanto la prueba cómo los resultados.
3. _Hacen más lenta mi aplicación_: Las pruebas no se incluyen en la construcción de producción de la aplicación. Por tanto, las pruebas no afectan las versiones de construcción en ningún aspecto.
4. _Es una pérdida de tiempo_: Sinceramente, aunque haga que sea necesario gastar más tiempo con las pruebas, las pruebas tienen una ventaja: Evita dolores de cabeza en el futuro. Al no hacer las pruebas, la aplicación se vuelve más propensa a errores y sí la aplicación ya está en producción, perderá más usuarios de lo común desde el punto que se descubra un error; especialmente sí es crítico. Entonces, al no hacer las pruebas, realmente toda la aplicación entra en riesgo de convertirse en una pérdida de tiempo. Además, resolver los problemas lleva tiempo. Todo esto se pudo haber evitado si se hubieran hecho las pruebas respectivas.
5. _Hay que probar todo_: Cómo lo mencioné en el mito #1, hay casos en que _todo_ no se puede probar, simplemente porque a veces no se nos ocurre todas las pruebas necesarias.

## La cobertura

La cobertura es un porcentaje que explica qué tanto código fue probado. Se recomienda llegar a una cobertura igual o cercana al 100% en lo posible. Hay que aclarar que un porcentaje alto de cobertura (Cómo 75%) no necesariamente es mejor que un porcentaje bajo restante (Cómo 25%), porque el porcentaje restante puede abarcar puntos críticos de la aplicación.

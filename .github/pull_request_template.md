## Photo or video showing UI changes (if any)

## Description

A few sentences describing the overall goals of the pull request's commits. Include relevant motivation and context. List any dependencies that are required for this change.

## Type of change

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] This change requires a documentation update.

# Keep this guide in mind to review and auto-review PR code.

## Nomenclatura y convenciones.

- Usar camelCase para nombrar variables y funciones.
- Usar PascalCase para nombrar componentes en React.
- Usar nombres descriptivos y coherentes para todas las variables, funciones, componentes y archivos. NO USAR UNA SOLA LETRA PARA NOMBRAR VARIABLES. ej.: `error => e` , `index => i`.
- Usar eslint y prettier para mantener la limpieza de errores. NO DEJAR WARNINGS DE ESLINT SIN SOLUCIONAR.
  Variabilizar todos los números y las cadenas de texto. NO INGRESAR MAGIC STRINGS, O MAGIC NUMBERS ej.:

  `'template_discount'` => `ACTION_TYPES.TEMPLATE_DISCOUNT`

  `if (age > 18)` => `if (age > AGE_ADULTHOOD)`

## Modularización y reutilización de código.

Es importante modularizar el código en módulos o componentes reutilizables para evitar la repetición de código y mejorar la legibilidad y mantenibilidad del proyecto.

- Separar la lógica de presentación y la lógica de datos en diferentes componentes en React.
- No usar `useEffect` dentro del componente sino moverlo a un custom hook ya sea dentro o fuera del archivo en cuestión.
- Usar funciones de utilidad o bibliotecas externas para evitar la repetición de código.
- Evitar uso de funciones impuras.

## Documentación y comentarios.

- Escribir comentarios claros y concisos para explicar el **porqué** y NO el **qué** de las secciones de código, sólo cuando sea realmente necesario. _En líneas generales una buena nomenclatura debería ser suficiente para la comprensión del código._

## Pruebas automatizadas.

- Usar el store real al desarrollar las pruebas en la medida de lo posible (evitar el uso de `'redux-mock-store'` ).
- Escribir pruebas para todas las funciones y componentes del proyecto.

# #06. Disparar eventos en elementos DOM

Para disparar eventos en elementos DOM para pruebas en Vitest, se utiliza la constante `fireEvent`, que contiene métodos que disparan eventos. Cada método recibe el elemento al cual se desea disparar el evento. Por ejemplo:

```tsx
fireEvent.click(button);
```

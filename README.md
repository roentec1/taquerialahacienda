[README.md](https://github.com/user-attachments/files/32263747/README.md)
# Taquería La Hacienda — Sitio Web

Sitio web profesional, moderno y responsive para **Taquería La Hacienda**, desarrollado exclusivamente con:

- HTML5
- CSS3
- JavaScript Vanilla (sin frameworks ni librerías)

## Características principales

- Diseño **Mobile First**, moderno y elegante con estética mexicana
- Menú digital completo con categorías y filtros
- **Carrito de compras funcional** con:
  - Agregar / quitar productos
  - Selectores de variantes (tamaño, carne, etc.)
  - Persistencia en `localStorage`
  - Cálculo automático de subtotal, envío y total
- Opción de **pedido a domicilio** ($30 MXN) o **pasar a recoger**
- Formas de pago: Efectivo / Transferencia
- Generación automática de mensaje estructurado y envío por **WhatsApp**
- Botón flotante de WhatsApp
- Indicador dinámico de **Abierto / Cerrado** según horario
- Secciones: Hero, Nosotros, Menú, Tlaquepaque, Promociones, Cómo pedir, Horarios, Contacto
- Animaciones suaves y microinteracciones
- SEO básico + Schema.org para restaurante
- Accesibilidad básica (aria-labels, contraste, labels)

## Estructura del proyecto

```
taqueria-la-hacienda/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── images/          (carpeta preparada para assets locales)
└── README.md
```

## Cómo usar

1. Abre `index.html` en cualquier navegador moderno.
2. O sirve la carpeta con un servidor local (recomendado):

```bash
# Ejemplo con Python
python -m http.server 8000

# Ejemplo con Node (npx)
npx serve .
```

3. Navega a `http://localhost:8000`

## Datos del negocio

| Campo              | Valor                                      |
|--------------------|--------------------------------------------|
| Nombre             | Taquería La Hacienda                       |
| Eslogan            | Aquí cada Taco es una Tradición!           |
| Fecha de creación  | 20 de octubre de 2024                      |
| Teléfono / WhatsApp| 81 1904 7379                               |
| Facebook           | [taqueria.la.hacienda.2025](https://www.facebook.com/taqueria.la.hacienda.2025) |
| Instagram          | Pendiente de agregar                       |
| Envío              | $30 MXN                                    |
| Formas de pago     | Efectivo, Transferencia                    |

## Horarios

- **Domingo a Jueves:** 5:00 PM — 1:00 AM
- **Viernes y Sábado:** 5:00 PM — 2:00 AM

El estado Abierto/Cerrado se calcula automáticamente con la hora local del navegador.

## Personalización futura

- **Instagram:** Reemplazar el enlace pendiente en el HTML.
- **Dirección / Google Maps:** Completar la sección “Visítanos”.
- **Datos bancarios:** Agregar en el aviso de transferencia.
- **Promociones:** Rellenar la sección de promociones con tarjetas reales.
- **Imágenes:** Sustituir los emojis de producto por fotografías reales en la carpeta `images/` y actualizar el HTML/JS.

## Notas técnicas

- El carrito se guarda en `localStorage` con la clave `taqueria_cart`.
- El número de WhatsApp se formatea como `528119047379`.
- Los mensajes se codifican correctamente con `encodeURIComponent()`.
- No se utilizan frameworks (React, Bootstrap, Tailwind, etc.).

---

Desarrollado para Taquería La Hacienda — 2024/2026

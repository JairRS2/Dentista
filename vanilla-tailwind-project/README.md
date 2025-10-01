# 🚀 Proyecto Vanilla con Tailwind CSS

Un proyecto base para desarrollo web usando HTML, JavaScript vanilla y Tailwind CSS.

## 📁 Estructura del Proyecto

```
vanilla-tailwind-project/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos personalizados
├── js/
│   └── script.js       # Funcionalidad JavaScript
├── assets/             # Imágenes y recursos
└── README.md           # Este archivo
```

## ✨ Características

- 🎨 **Tailwind CSS** - Framework CSS utility-first
- ⚡ **JavaScript Vanilla** - Sin dependencias externas
- 📱 **Responsive Design** - Adaptable a todos los dispositivos
- 🎯 **Componentes Interactivos** - Contador, navegación móvil, animaciones
- 🎪 **Efectos Visuales** - Animaciones, transiciones y efectos hover
- ♿ **Accesibilidad** - Diseño inclusivo con focus visible

## 🚀 Cómo Empezar

### Opción 1: Servidor Local Simple

1. **Abre una terminal en la carpeta del proyecto**
2. **Inicia un servidor HTTP simple:**

   **Con Python 3:**
   ```bash
   python -m http.server 8000
   ```

   **Con Python 2:**
   ```bash
   python -m SimpleHTTPServer 8000
   ```

   **Con Node.js (si tienes npm instalado):**
   ```bash
   npx http-server -p 8000
   ```

   **Con Live Server (VSCode Extension):**
   - Instala la extensión "Live Server"
   - Haz clic derecho en `index.html` → "Open with Live Server"

3. **Abre tu navegador en:**
   ```
   http://localhost:8000
   ```

### Opción 2: Abrir Directamente

También puedes abrir `index.html` directamente en tu navegador, aunque es recomendable usar un servidor local para evitar problemas con CORS y tener una experiencia más similar a producción.

## 🛠️ Tecnologías Utilizadas

### Tailwind CSS
- **CDN:** Se incluye desde el CDN oficial para desarrollo rápido
- **Configuración personalizada:** Colores y fuentes personalizadas
- **Responsive:** Breakpoints predefinidos para móvil, tablet y desktop

### JavaScript Vanilla
- **ES6+:** Sintaxis moderna de JavaScript
- **Modular:** Código organizado en funciones específicas
- **Event-driven:** Manejo de eventos del DOM
- **APIs nativas:** Intersection Observer, localStorage, etc.

## 🎯 Funcionalidades Implementadas

### 1. Navegación Responsiva
- Menú hamburguesa para dispositivos móviles
- Navegación horizontal para desktop
- Animaciones suaves en las transiciones

### 2. Hero Section
- Gradiente de fondo atractivo
- Botón CTA con efecto ripple
- Scroll suave hacia secciones

### 3. Sección de Características
- Cards con efectos hover
- Iconos SVG integrados
- Animaciones de entrada

### 4. Contador Interactivo
- Incrementar, decrementar y reiniciar
- Cambio de color según el valor
- Animaciones en cada acción

### 5. Efectos Visuales
- Animaciones de fade-in al hacer scroll
- Efecto parallax en el hero
- Transiciones suaves en elementos interactivos

## 🎨 Personalización

### Colores
Puedes modificar los colores en el archivo `index.html` dentro de la configuración de Tailwind:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#3B82F6',    // Azul principal
                secondary: '#10B981',  // Verde secundario
                accent: '#F59E0B'      // Amarillo acento
            }
        }
    }
}
```

### Estilos Personalizados
Agrega tus estilos en `css/style.css` para complementar las clases de Tailwind.

### Funcionalidad JavaScript
Modifica `js/script.js` para agregar nueva funcionalidad o personalizar la existente.

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🔧 Desarrollo

### Estructura de Archivos Recomendada

```
vanilla-tailwind-project/
├── index.html
├── pages/              # Páginas adicionales
├── css/
│   ├── style.css
│   └── components/     # Estilos por componente
├── js/
│   ├── script.js
│   ├── utils/          # Funciones utilitarias
│   └── components/     # JavaScript por componente
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
└── docs/               # Documentación
```

### Mejores Prácticas

1. **Usa clases semánticas** para componentes reutilizables
2. **Mantén el JavaScript modular** con funciones específicas
3. **Optimiza las imágenes** antes de agregarlas a assets/
4. **Utiliza variables CSS** para valores reutilizables
5. **Comenta tu código** para facilitar el mantenimiento

## 🚀 Próximos Pasos

### Funcionalidades a Agregar
- [ ] Formulario de contacto
- [ ] Galería de imágenes
- [ ] Modal/popup components
- [ ] Dark mode toggle
- [ ] Integración con APIs
- [ ] Local storage para preferencias

### Optimizaciones
- [ ] Lazy loading para imágenes
- [ ] Minificación de CSS y JS
- [ ] Service Worker para PWA
- [ ] Optimización SEO

## 📚 Recursos Útiles

- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [Can I Use - Compatibilidad de navegadores](https://caniuse.com/)
- [Web.dev - Mejores prácticas](https://web.dev/)

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaFuncionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/NuevaFuncionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**¡Feliz desarrollo! 🎉**

Si tienes preguntas o sugerencias, no dudes en abrir un issue o contactar al equipo de desarrollo.
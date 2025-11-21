# Guía para Completar los Componentes Faltantes

## Componentes Ya Creados ✅

1. ✅ IntroduccionComponent
2. ✅ OrigenNasaComponent  
3. ✅ LenguaNasaYuweComponent
4. ⚠️ MedicinaDiarreaComponent (solo .ts)

## Componentes Pendientes

Para completar la aplicación, necesitas crear los siguientes componentes siguiendo el mismo patrón:

### 5. MedicinaDiarreaComponent

**Archivo HTML**: `/src/app/components/medicina-diarrea/medicina-diarrea.component.html`

Debe incluir:
- Imagen de plantas medicinales
- 3 tipos de diarrea con tarjetas de colores diferentes:
  - Diarrea por Frío (azul) - plantas calientes
  - Diarrea por Calor (rojo) - plantas frescas  
  - Diarrea por Empacho (amarillo) - plantas específicas

### 6. MedicinaFiebreComponent

**Archivos**: 
- `/src/app/components/medicina-fiebre/medicina-fiebre.component.ts`
- `/src/app/components/medicina-fiebre/medicina-fiebre.component.html`
- `/src/app/components/medicina-fiebre/medicina-fiebre.component.css`

Debe incluir:
- Remedios para fiebre
- 3 tipos adicionales de diarrea (susto, lastimadura, parásitos)

### 7. UsoAnimalComponent

**Archivos**:
- `/src/app/components/uso-animal/uso-animal.component.ts`
- `/src/app/components/uso-animal/uso-animal.component.html`
- `/src/app/components/uso-animal/uso-animal.component.css`

Debe incluir:
- Array de animales con emoji, nombre, uso y propósito
- Tarjetas con gradientes de colores diferentes

### 8. RitualidadComponent

**Archivos**:
- `/src/app/components/ritualidad/ritualidad.component.ts`
- `/src/app/components/ritualidad/ritualidad.component.html`
- `/src/app/components/ritualidad/ritualidad.component.css`

Debe incluir:
- Rituales fundamentales (limpieza, potencialización, armonización)
- Festividades (Año Andino, Saakhelu, Sek Buy, Armonización del fuego)
- Imagen de ceremonia

### 9. HistoriasComponent

**Archivos**:
- `/src/app/components/historias/historias.component.ts`
- `/src/app/components/historias/historias.component.html`
- `/src/app/components/historias/historias.component.css`

Debe incluir:
- Historia de La Gaitana
- Origen del pueblo Nasa
- Cronología de la lucha territorial (1894, 1944-1945, 1965)

### 10. CronologiaComponent

**Archivos**:
- `/src/app/components/cronologia/cronologia.component.ts`
- `/src/app/components/cronologia/cronologia.component.html`
- `/src/app/components/cronologia/cronologia.component.css`

Debe incluir:
- Array de eventos históricos desde 500 d.C. hasta 2021
- Timeline visual con línea vertical
- Tarjetas alternadas (izquierda/derecha)

### 11. AgradecimientosComponent

**Archivos**:
- `/src/app/components/agradecimientos/agradecimientos.component.ts`
- `/src/app/components/agradecimientos/agradecimientos.component.html`
- `/src/app/components/agradecimientos/agradecimientos.component.css`

Debe incluir:
- Imagen de comunidad
- Agradecimientos a diferentes grupos
- Referencias bibliográficas
- Mensaje final de copyright

## Patrón de Componente Angular

Cada componente debe seguir este patrón:

### archivo.component.ts
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nombre-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nombre-componente.component.html',
  styleUrls: ['./nombre-componente.component.css']
})
export class NombreComponenteComponent {
  // Propiedades del componente
  datos: any[] = [];
  
  // Métodos si son necesarios
}
```

### archivo.component.html
```html
<div class="space-y-8">
  <!-- Contenido del componente -->
  <div *ngFor="let item of datos">
    {{item.nombre}}
  </div>
</div>
```

### archivo.component.css
```css
/* Estilos específicos del componente */
```

## Actualizar app.component.ts

Después de crear cada componente, debes importarlo en `app.component.ts`:

```typescript
import { NuevoComponente } from './components/nuevo-componente/nuevo-componente.component';

@Component({
  // ...
  imports: [
    CommonModule,
    IntroduccionComponent,
    OrigenNasaComponent,
    LenguaNasaYuweComponent,
    NuevoComponente  // Agregar aquí
  ],
  // ...
})
```

## Clases de Tailwind CSS Más Usadas

- **Contenedores**: `space-y-8`, `space-y-4`, `p-6`, `p-8`
- **Grids**: `grid`, `grid-cols-2`, `md:grid-cols-3`, `gap-4`
- **Flex**: `flex`, `items-center`, `justify-between`, `gap-3`
- **Colores**: `bg-orange-700`, `text-white`, `text-orange-800`
- **Gradientes**: `bg-gradient-to-r from-orange-50 to-amber-50`
- **Bordes**: `rounded-lg`, `border-l-4`, `border-orange-700`
- **Sombras**: `shadow-lg`, `shadow-md`
- **Responsive**: `md:`, `lg:` prefijos

## Directivas Angular Comunes

- `*ngFor="let item of items"` - Iterar arrays
- `*ngIf="condicion"` - Renderizado condicional
- `[src]="variable"` - Binding de propiedades
- `(click)="metodo()"` - Eventos
- `[class]="expresion"` - Clases dinámicas

## Siguiente Paso

1. Copiar el contenido HTML de los componentes React correspondientes
2. Adaptar la sintaxis a Angular (cambiar {} por {{}}, className por class, etc.)
3. Crear las propiedades necesarias en el archivo .ts
4. Importar el componente en app.component.ts
5. Probar en el navegador

¡La estructura base está lista! Solo falta completar los componentes HTML siguiendo los ejemplos ya creados.

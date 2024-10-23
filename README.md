# Zustand

# Índice
- [Qué es?](#qué-es)
- [Características principales de Zustand](#características-principales-de-zustand)
- [¿Cuándo se usa Zustand?](#cuándo-se-usa-zustand)
    - [¿Para qué tipo de aplicaciones puedes usarla?](#para-qué-tipo-de-aplicaciones-puedes-usarla)
    - [Diferencias entre client state y server state](#diferencias-entre-client-state-y-server-state)
- [Cómo usarlo](#cómo-usarlo)
    - [Instalación](#instalación)
    - [Creación de store](#creación-de-store)
    - [Usar - Mostrar el state en un componente](#usar---mostrar-el-state-en-un-componente)
- [Zustand vs Redux](#zustand-vs-redux)
    - [Redux - Desventajas](#redux---desventajas)
    - [Redux - Donde usarlo](#redux---donde-usarlo)
    - [Redux - Ventajas](#redux---ventajas)
    - [Zustand - Desventajas](#zustand---desventajas)
    - [Zustand - Ventajas](#zustand---ventajas)
    - [Zustand - Donde usarlo](#zustand---donde-usarlo)

---

## Qué es?

**Zustand** es una librería ligera de gestión de estado para aplicaciones React. Su objetivo es ser minimalista y más directa que otras soluciones como Redux, proporcionando una API sencilla para manejar el estado global o compartido de una aplicación sin el uso de boilerplate o configuraciones complejas.

## Características principales de Zustand:

1. **Simplicidad**: No requiere configuraciones pesadas ni mucho código adicional, lo que la hace fácil de aprender y rápida de implementar.
2. **Reactiva**: El estado en Zustand es reactivo, por lo que los componentes que lo utilizan se actualizan automáticamente cuando cambian los datos.
3. **Árbol de componentes independiente**: Evita los problemas de re-renderización innecesaria en todo el árbol de componentes, actualizando solo los componentes que dependen de una parte específica del estado.
4. **Persistencia**: Puedes persistir el estado en almacenamiento local o en una base de datos externa.
5. **Middleware**: Puedes usar middleware para extender o modificar el comportamiento del estado.

## ¿Cuándo se usa Zustand?

Se usa principalmente en aplicaciones que necesitan manejar un estado global o compartido entre varios componentes. Es una buena opción cuando:

- No necesitas la complejidad de Redux.
- Quieres una solución rápida y eficiente para el estado global.
- Quieres evitar problemas de rendimiento causados por la re-renderización de componentes.

### ¿Para qué tipo de aplicaciones puedes usarla?

Zustand es adecuada para cualquier tipo de aplicación que necesite gestionar estado global, como:

- **Aplicaciones web** con componentes distribuidos que dependen de un estado central.
- **Aplicaciones de dashboards** o de gestión donde múltiples componentes interactúan con los mismos datos.
- **Juegos** o aplicaciones interactivas donde el estado deba actualizarse de manera rápida y fluida.
- **Aplicaciones de redes sociales**, donde diferentes partes de la UI (como publicaciones, recomendaciones de amigos, notificaciones, etc.) dependen del mismo conjunto de datos.

### Diferencias entre **client state** y **server state**:

- **Client state**: Es el estado que se gestiona y almacena localmente en el navegador del usuario, usando herramientas como Zustand, Redux o el propio `useState` y `useReducer` de React. Este estado no se sincroniza automáticamente con el servidor y suele estar limitado a interacciones locales, como formularios, preferencias del usuario, o datos temporales que no es necesario persistir.
- **Server state**: Es el estado que proviene del servidor y se sincroniza a través de APIs, usualmente usando herramientas como React Query o SWR. Este estado puede estar almacenado en una base de datos, y debe ser gestionado con atención porque está sujeto a problemas de sincronización, latencia, y puede requerir cacheo o invalidación.

## Cómo usarlo

### Instalación

```bash
# NPM
npm install zustand
# Or, use any package manager of your choice.
```

### Creación de store

El término **"store"** se refiere al lugar donde se almacena y gestiona el estado global de tu aplicación. En pocas palabras, la **store** es un objeto que contiene el estado de la aplicación y las funciones que permiten modificar ese estado. 
En esencia, la **store** es un contenedor donde "guardas" o "almacenas" (de ahí el nombre) los datos que quieres compartir entre diferentes partes de tu aplicación.

En Zustand, se crea la store utilizando la función `create`, que toma un "set" y un "get" para definir cómo se manejara el estado.

Dentro de src creamos una carpeta llamada store. Y un archivo con nombre dependiendo el contexto para que se use. Yo voy a hacer un contador así que lo llamare `counterStore.ts`

```tsx
//src/store/CounterStore.ts

// create nos permite cerar un estado
import {create} from "zustand";

//persist guardara el estado en localstorage
import { persist } from "zustand/middleware";

//definimos el tipo de estado
type CounterState = {
    count: number
    incrementCount: () => void
    decrementCount: () => void
    resetCount: () => void
}

const useCounterStore = create(persist<CounterState>((set) => ({
    count:0, //estado inicial - initial state
    incrementCount: () => set((state) => ({count: state.count + 1})), // Acción para modificar el estado
    decrementCount: () => set((state) => ({count: state.count - 1})), // Acción para modificar el estado
    resetCount: () => set({count: 0}), // Acción para modificar el estado
}),{
    name: "counter" // key donde se guardara en localstorage
}));

export default useCounterStore
```

### Usar - Mostrar el state en un componente

Cremos un componente x donde se pueda ver el count e implementar sus acciones.

```tsx
import useCounterStore from "../store/counterStore";

export default function CounterPage() {
  const count = useCounterStore((state) => state.count);
  const incrementCount = useCounterStore((state) => state.incrementCount);
  const decrementCount = useCounterStore((state) => state.decrementCount);
  const resetCount = useCounterStore((state) => state.resetCount)
  
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <h1>Count: {count}</h1>
      <div className="flex gap-4">
        <button className="bg-blue-500 p-2 rounded-lg" onClick={incrementCount}>
          +
        </button>
        <button className="bg-blue-500 p-2 rounded-lg" onClick={decrementCount}>
          -
        </button>
        <button className="bg-blue-500 p-2 rounded-lg" onClick={resetCount}>
          0
        </button>

      </div>
    </div>
  );
}
```

## Zustand vs Redux

### Redux - Desventajas

- Mucho boilerplate: Para generar algo tienen que escribir mucho código repetitivo
- 20kb
- Complicado para principiantes
- Mucho código para pequeños cambios
- Muchos conceptos y Opinionado

### Reux - Donde usarlo

- Yo lo usaria para proyectos medianos pero tampoco muy grandes

### Redux - Ventajas

- Inmutabilidad por defecto

### Zustand - Desventajas

- Hay que hacer copias

### Zustand - Ventajas

- MUY SIMPLE: no tiene ni provider
- Sin configuración, 0 boilerplate
- 1 kb
- No opinionado

### Zustand - Donde usarlo

- Lo usaría siempre que pueda
- No lo usaría para aplicaciones MUY grandes y PARA TODO EL ESTADO GLOBAL.

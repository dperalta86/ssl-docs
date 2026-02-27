---
sidebar_position: 1
title: Autómatas Finitos
---

# Autómatas Finitos

Un **autómata finito (AF)** o máquina de estado finito es un mecanismo del modelo computacional que, dado un alfabeto, acepta cada cadena que pertenece a un lenguaje y rechaza toda cadena que no pertenezca a él.

## Elementos de un AF

Todo autómata finito está compuesto por cinco elementos:

- **Alfabeto (Σ):** conjunto de caracteres que el autómata puede leer
- **Conjunto de estados finitos (Q):** todos los estados posibles del autómata
- **Estado inicial (q0):** único estado desde donde arranca la lectura
- **Estados finales (F):** uno o más estados que indican aceptación de la cadena
- **Función de transición (T):** define a qué estado se pasa al leer cada carácter

Existen dos tipos de autómatas finitos: **determinísticos (AFD)** y **no determinísticos (AFND)**.

---

## Autómata Finito Determinístico (AFD)

### Definición

Un AF es **determinístico** cuando, dado un estado actual y un carácter leído, existe **exactamente un** estado de llegada posible. No hay ambigüedad: cada par (estado, carácter) lleva siempre al mismo lugar.

### Definición formal

Formalmente, un AFD es una **5-upla** `M = (Q, Σ, T, q0, F)` donde:

| Elemento | Descripción |
|----------|-------------|
| `Q` | Conjunto finito no vacío de estados |
| `Σ` | Alfabeto de caracteres reconocidos |
| `q0 ∈ Q` | Estado inicial (único) |
| `F ⊆ Q` | Conjunto no vacío de estados finales |
| `T: Q × Σ → Q` | Función de transiciones |

La función de transición se lee así: `T(q, x) = z` significa que el autómata, estando en el estado `q` y leyendo el carácter `x`, pasa al estado `z`. También se escribe como `q ⟹ x ⟹ z`.

### Ejemplo

Dado el siguiente AFD con alfabeto `{a, b}`:

**Diagrama de transiciones:**

```
        a           a
(q0-) ──→ (q1) ──→ ((q2+))
                b ↘
                    ((q3+))
                    ↺ a
```

**Definición formal del ejemplo:**

```
M = (Q, Σ, T, q0, F) donde:
  Q  = { q0, q1, q2, q3 }
  Σ  = { a, b }
  q0 = q0
  F  = { q2, q3 }
  T  = { q0 --a--> q1,
         q1 --a--> q2,
         q1 --b--> q3,
         q3 --a--> q3 }
```

**Tabla de transiciones (TT):**

| Estado | `a` | `b` |
|--------|-----|-----|
| `q0` – | q1  | –   |
| `q1`   | q2  | q3  |
| `q2` + | –   | –   |
| `q3` + | q3  | –   |

> **Convención:** el símbolo `–` al lado del estado indica estado inicial; `+` indica estado final (también representado con doble círculo en el diagrama). Una celda vacía `–` indica que no existe transición definida para ese par (estado, carácter).

Dos ejemplos de cómo leer la tabla:

```
T(q1, a) = q2
T(q1, b) = q3
```

---

## AFD Completo

Un AFD es **completo** si cada estado tiene exactamente **una transición definida por cada carácter del alfabeto**. Dicho de otro modo: la tabla de transiciones no tiene celdas vacías.

### ¿Por qué importa?

Los AFD completos son los que tienen aplicación computacional directa y los que vamos a implementar en los trabajos prácticos. Un AFD incompleto no puede ejecutarse directamente en código sin manejo especial de los casos no definidos.

### Cómo completar un AFD incompleto

Se agrega un **estado de rechazo** (también llamado estado trampa o `qR`): un estado al que se llega cuando se lee un carácter que no tiene transición definida. Desde ese estado, cualquier carácter que se lea lleva al mismo estado de rechazo (es un pozo sin salida).

Aplicando esto al ejemplo anterior:

| Estado | `a` | `b` |
|--------|-----|-----|
| `q0` – | q1  | **q4** |
| `q1`   | q2  | q3  |
| `q2` + | **q4** | **q4** |
| `q3` + | q3  | **q4** |
| `q4`   | q4  | q4  |

El estado `q4` es el estado de rechazo. Notar que `q4` tiene transiciones hacia sí mismo para todos los caracteres del alfabeto: una vez que se cae ahí, no hay salida.

:::info Equivalencia de AFDs
Dos AFDs son **equivalentes** si reconocen el mismo lenguaje regular. El AFD completo resultante de agregar el estado de rechazo es equivalente al AFD incompleto original.
:::

---

## Autómata Finito No Determinístico (AFND)

### Definición

Un AF es **no determinístico** cuando para algún estado y algún carácter del alfabeto existen **cero, uno o más** estados de llegada posibles. En el caso de tener más de uno, el autómata debe "elegir" qué camino tomar.

La diferencia clave con el AFD es que las transiciones en la tabla pasan a ser **conjuntos de estados** en lugar de estados individuales.

### Ejemplo

| Estado | `a`     | `b`       |
|--------|---------|-----------|
| `q0` – | `{q1}`  | –         |
| `q1`   | `{q1}`  | `{q1, q2}` |
| `q2` + | –       | –         |

En el estado `q1`, al leer el carácter `b`, el autómata puede ir tanto a `q1` como a `q2`. Eso es lo que lo hace no determinístico.

:::tip AFD vs AFND en la práctica
Todo AFND puede convertirse en un AFD equivalente (que reconoce el mismo lenguaje). En los TPs vamos a trabajar siempre con AFDs completos, que son los que se pueden implementar directamente en C.
:::

---

## Resumen

| Concepto | AFD | AFND |
|----------|-----|------|
| Transiciones por (estado, carácter) | Exactamente 1 | 0, 1 o más |
| Tabla de transiciones | Estados individuales | Conjuntos de estados |
| Aplicación en TPs | ✅ Directo | Requiere conversión previa |
| Equivalencia | — | Todo AFND tiene un AFD equivalente |

---

*Próximo tema: [Ficheros en C](./ficheros-en-c) – necesario para la implementación del AFD en el TP1.*

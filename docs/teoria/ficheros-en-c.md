---
sidebar_position: 2
title: Ficheros en C
---

# Ficheros en C

:::info Prerequisito
Para usar las funciones de este apunte, incluir `#include <stdio.h>` al inicio del archivo.
:::

Un **fichero** (o archivo) es una estructura de datos almacenada en memoria secundaria. Para poder leer o escribir información en él, se deben seguir siempre los mismos tres pasos: **apertura → operación → cierre**.

---

## Declarar una variable de tipo archivo

Antes de cualquier operación, se declara un puntero a `FILE`:

```c
FILE *nombre_variable_fichero;
```

Esto crea un puntero hacia la estructura `FILE` que representa al archivo en memoria.

---

## Apertura y cierre

### Abrir un archivo: `fopen`

```c
fichero = fopen(nombre_fichero, modo);
```

- `nombre_fichero`: nombre o ruta del archivo en el sistema operativo
- `modo`: indica el tipo de archivo y la operación a realizar

Si ocurre un error durante la apertura (por ejemplo, querer leer un archivo inexistente), `fopen` retorna `NULL`.

**Modos disponibles:**

| Modo | Comportamiento |
|------|---------------|
| `"r"` | Lectura. Error si el archivo no existe. |
| `"w"` | Escritura. Crea el archivo si no existe; lo sobreescribe si existe. |
| `"a"` | Append (añadir al final). Crea el archivo si no existe. |
| `"+"` | Abre para lectura **y** escritura (se combina con los anteriores). |
| `"b"` | Modo binario (se combina con los anteriores). |
| `"t"` | Modo texto (por defecto si no se especifica ni `b` ni `t`). |

Los modos se combinan. Ejemplos frecuentes:

```c
fopen("datos.dat", "rb+")  // binario existente, lectura y escritura
fopen("datos.dat", "wb+")  // binario nuevo (o sobreescribe), lectura y escritura
fopen("log.txt",   "a")    // texto, añadir al final
```

### Verificar apertura con control de errores

```c
FILE *fichero;

if ((fichero = fopen("datos.dat", "r")) == NULL) {
    printf("Error en la apertura. Es posible que el fichero no exista.\n");
}
```

Esto es una **buena práctica** siempre: si `fopen` falla, el programa lo detecta en lugar de crashear silenciosamente.

### Cerrar un archivo: `fclose`

```c
fclose(fichero);
```

:::warning Siempre cerrar el archivo
Cerrar el archivo libera la memoria que está siendo utilizada. No hacerlo puede causar pérdida de datos o comportamiento inesperado, especialmente en escritura.
:::

---

## Lectura y escritura de bloques: `fread` / `fwrite`

Son las funciones principales para leer y escribir datos binarios.

```c
fwrite(direcc_dato, tamaño_dato, numero_datos, punt_fichero);
fread (direcc_dato, tamaño_dato, numero_datos, punt_fichero);
```

| Parámetro | Descripción |
|-----------|-------------|
| `direcc_dato` | Dirección de memoria del dato (usar `&variable` para variables simples) |
| `tamaño_dato` | Tamaño en bytes del dato. Usar `sizeof()` para no hardcodearlo. |
| `numero_datos` | Cantidad de datos a leer/escribir |
| `punt_fichero` | Puntero al archivo abierto |

### Ejemplo: escribir un entero

```c
FILE *salida;
salida = fopen("salida.txt", "w");

int unNumero = 5;
fwrite(&unNumero, sizeof(unNumero), 1, salida);

fclose(salida);
```

### Ejemplo: leer un entero

```c
FILE *entrada;
entrada = fopen("entrada.txt", "r");

int unNumero;
fread(&unNumero, sizeof(unNumero), 1, entrada);

fclose(entrada);
```

### Leer múltiples datos con un vector

Para leer más de un dato a la vez, se usa un arreglo como destino:

```c
FILE *entrada;
entrada = fopen("entrada.txt", "r");

int vector_numeros[5];
fread(&vector_numeros[0], sizeof(vector_numeros), 3, entrada);
// Lee 3 enteros del archivo y los almacena en vector_numeros[0], [1] y [2]

fclose(entrada);
```

---

## Otras funciones de lectura y escritura

### `fprintf` – escribir con formato (como `printf` pero a un archivo)

```c
int fprintf(FILE *f, char texto_de_formato[], ...);
```

```c
FILE *salida = fopen("salida.txt", "w");
fprintf(salida, "Fin del archivo");
fclose(salida);
```

---

### `fgetc` / `fputc` – lectura y escritura carácter a carácter

```c
// Leer un carácter
caracter_leido = fgetc(fichero);
// Devuelve EOF al llegar al final del archivo

// Escribir un carácter
fputc(caracter, fichero);
```

**Ejemplo – leer el primer carácter de un archivo:**

```c
FILE *entrada = fopen("entrada.txt", "r");
char caracter = fgetc(entrada);
fclose(entrada);
```

**Ejemplo – escribir un carácter:**

```c
FILE *salida = fopen("salida.txt", "w");
char caracter = 'a';
fputc(caracter, salida);
fclose(salida);
```

---

### `fgets` / `fputs` – lectura y escritura de cadenas

```c
// Leer una cadena
fgets(cadena_leida, num_caracteres, archivo);

// Escribir una cadena
fputs(cadena_escribir, fichero);
```

**Ejemplo – leer los primeros 3 caracteres:**

```c
FILE *entrada = fopen("entrada.txt", "r");
char caracter[5];
fgets(caracter, 3, entrada);
// caracter tendrá los primeros 3 caracteres del archivo
fclose(entrada);
```

**Ejemplo – escribir una cadena:**

```c
FILE *salida = fopen("salida.txt", "w");
char caracter[15] = "Practica fputs";
fputs(caracter, salida);
fclose(salida);
```

---

## Resumen de funciones

| Función | Tipo de dato | Operación |
|---------|-------------|-----------|
| `fwrite` | Bloque binario | Escritura |
| `fread` | Bloque binario | Lectura |
| `fprintf` | Texto con formato | Escritura |
| `fputc` | Un carácter | Escritura |
| `fgetc` | Un carácter | Lectura |
| `fputs` | Cadena de caracteres | Escritura |
| `fgets` | Cadena de caracteres | Lectura |

:::tip ¿Cuándo usar cada una?
En los TPs de la materia, el análisis léxico con Flex trabaja principalmente con lectura carácter a carácter (`fgetc`) o con archivos pasados directamente como entrada estándar. Para el TP1 (AFD en C), se va a trabajar con `fgetc` para leer el archivo de entrada carácter por carácter y aplicar las transiciones del autómata.
:::

---

*Este apunte fue preparado por Santiago Boero para la cátedra de Sintaxis y Semántica de los Lenguajes – UTN FRBA.*

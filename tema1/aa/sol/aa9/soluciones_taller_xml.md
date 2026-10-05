# Taller «De cualquier formato a XML»: soluciones explicadas

Documento de apoyo para el profesorado del módulo **Lenguajes de Marcas y Sistemas de Gestión de Información (LMSGI)**, RA1, criterio de evaluación **g)**: *Se ha identificado la estructura de un documento XML y sus reglas sintácticas*.

Explica, tarea por tarea, cómo se ha construido cada XML de `xml_taller_soluciones.zip` a partir de su fichero fuente, qué problemas había en los datos y qué otras soluciones serían igualmente válidas.

> [!NOTE]
> Todas las soluciones están validadas como documentos bien formados con `xmllint --noout`. Son **una** solución correcta, no la única: al corregir, lo importante es que el XML esté bien formado, que no se pierdan datos y que las decisiones estén justificadas.

## Índice

- [Criterios comunes a todas las soluciones](#criterios-comunes-a-todas-las-soluciones)
- [Tarea 1. De CSV a XML](#tarea-1-de-csv-a-xml)
- [Tarea 2. De JSON a XML](#tarea-2-de-json-a-xml)
- [Tarea 3. De HTML a XML](#tarea-3-de-html-a-xml)
- [Tarea 4. De texto libre a XML](#tarea-4-de-texto-libre-a-xml)
- [Reto. Dos fuentes y espacios de nombres](#reto-dos-fuentes-y-espacios-de-nombres)
- [Cómo validar las entregas](#cómo-validar-las-entregas)

## Criterios comunes a todas las soluciones

Las cinco soluciones siguen las mismas pautas, que conviene explicar al alumnado antes de corregir:

| Pauta | Aplicación en las soluciones |
| --- | --- |
| Prólogo | Todas empiezan por `<?xml version="1.0" encoding="utf-8"?>` y se guardan en UTF-8. |
| Comentario de origen | Justo después del prólogo, un comentario indica de qué fichero proceden los datos. |
| Raíz única | Un elemento raíz con nombre en plural o colectivo: `<reservas>`, `<tienda>`, `<liga>`, `<excursion>`, `<club>`. |
| Atributo o elemento | Los identificadores y datos que **describen** al elemento (id, fecha, posición, unidad) van como atributos; los datos de **contenido** van como elementos. |
| Nombres | En minúsculas, sin tildes en los nombres compuestos y con guion bajo en lugar de espacios: `hora_inicio`, `fecha_alta`. |
| Listas | Un contenedor en plural con hijos en singular: `<tallas>` → `<talla>`, `<grupos>` → `<grupo>`. |
| Datos vacíos | Se representan con un elemento vacío (`<observaciones/>`) o se omiten, explicándolo en un comentario. |
| Formatos | Fechas en `AAAA-MM-DD` y horas en `HH:MM`. |

---

## Tarea 1. De CSV a XML

**Fuente:** `t1_reservas_pabellon.csv` · **Solución:** `t1_reservas_pabellon.xml`

```csv
id;fecha;hora inicio;hora fin;pista;grupo;responsable;observaciones
R-101;2026-10-13;16:00;17:30;Pista 1;Baloncesto infantil;Ana Torres;Material: balones & conos
R-102;2026-10-13;17:30;19:00;Pista 2;Voleibol cadete;Luis Romero;
R-103;2026-10-14;16:00;17:00;Pista 1;Iniciación deportiva;Marta Gil;Solo niños con edad < 10 años
R-104;2026-10-15;18:00;20:00;Pista 1 y 2;Torneo de fútbol sala;Pedro Ruiz;Llevar "petos" de dos colores
```

### Estructura elegida

```text
reservas
└── reserva (id, fecha)
    ├── hora_inicio
    ├── hora_fin
    ├── pista
    ├── grupo
    ├── responsable
    └── observaciones
```

Cada fila del CSV se convierte en un elemento `<reserva>`. El `id` y la `fecha` pasan a atributos porque identifican y sitúan la reserva; el resto de columnas son elementos hijos, en el mismo orden que en el fichero original.

### Problemas de los datos y cómo se resuelven

| Línea del CSV | Problema | Solución aplicada | Regla |
| --- | --- | --- | --- |
| Cabecera | `hora inicio` y `hora fin` tienen espacios | `<hora_inicio>`, `<hora_fin>` | Los nombres no pueden contener espacios |
| R-101 | `balones & conos` | `balones &amp; conos` | `&` debe escaparse en el contenido |
| R-102 | Observaciones vacías | `<observaciones/>` | Un elemento vacío es válido |
| R-103 | `edad < 10 años` | `edad &lt; 10 años` | `<` debe escaparse en el contenido |
| R-104 | Comillas dobles en `"petos"` | Se dejan tal cual | Las comillas solo hay que escaparlas dentro de valores de atributo |

> [!TIP]
> La fila R-104 es una **trampa**: muchos alumnos escaparán las comillas como `&quot;`. No es un error, pero tampoco es necesario. Es buena ocasión para explicar que `"` y `'` solo causan problemas dentro de un valor de atributo delimitado por esas mismas comillas.

### Alternativas válidas

- Dejar `id` y `fecha` como elementos hijos en lugar de atributos.
- Omitir `<observaciones>` en R-102 en vez de dejarlo vacío.
- Agrupar las horas: `<horario inicio="16:00" fin="17:30"/>`.

<details>
<summary>Ver la solución completa</summary>

```xml
<?xml version="1.0" encoding="utf-8"?>
<!-- Datos convertidos desde t1_reservas_pabellon.csv -->
<reservas>
    <reserva id="R-101" fecha="2026-10-13">
        <hora_inicio>16:00</hora_inicio>
        <hora_fin>17:30</hora_fin>
        <pista>Pista 1</pista>
        <grupo>Baloncesto infantil</grupo>
        <responsable>Ana Torres</responsable>
        <observaciones>Material: balones &amp; conos</observaciones>
    </reserva>
    <reserva id="R-102" fecha="2026-10-13">
        <hora_inicio>17:30</hora_inicio>
        <hora_fin>19:00</hora_fin>
        <pista>Pista 2</pista>
        <grupo>Voleibol cadete</grupo>
        <responsable>Luis Romero</responsable>
        <observaciones/>
    </reserva>
    <reserva id="R-103" fecha="2026-10-14">
        <hora_inicio>16:00</hora_inicio>
        <hora_fin>17:00</hora_fin>
        <pista>Pista 1</pista>
        <grupo>Iniciación deportiva</grupo>
        <responsable>Marta Gil</responsable>
        <observaciones>Solo niños con edad &lt; 10 años</observaciones>
    </reserva>
    <reserva id="R-104" fecha="2026-10-15">
        <hora_inicio>18:00</hora_inicio>
        <hora_fin>20:00</hora_fin>
        <pista>Pista 1 y 2</pista>
        <grupo>Torneo de fútbol sala</grupo>
        <responsable>Pedro Ruiz</responsable>
        <observaciones>Llevar "petos" de dos colores</observaciones>
    </reserva>
</reservas>
```

</details>

---

## Tarea 2. De JSON a XML

**Fuente:** `t2_tienda.json` · **Solución:** `t2_tienda.xml`

### Correspondencia entre JSON y XML

| En JSON | En XML | Ejemplo |
| --- | --- | --- |
| Objeto raíz `{ }` | Elemento raíz | `<tienda>` |
| Valores simples del objeto raíz | Atributos de la raíz | `nombre="Deportes Ribera"` |
| Lista `"productos": [ ]` | Un elemento por cada objeto de la lista | `<producto>` repetido |
| Lista de valores `[40, 41, 42, 43]` | Contenedor + hijos | `<tallas>` → `<talla>` |
| Lista vacía `[]` | Elemento vacío | `<tallas/>` |
| Objeto anidado `"proveedor": { }` | Elemento con atributo | `<proveedor pais="España">Sport &amp; Co</proveedor>` |
| `true` / `false` | Texto en un atributo | `en_stock="true"` |
| `null` | Se omite (con comentario) | `<!-- descuento: null en el JSON, se omite -->` |

### Problemas de los datos y cómo se resuelven

| Dato | Problema | Solución aplicada | Regla |
| --- | --- | --- | --- |
| `"en stock"` | Clave con espacio | `en_stock` | Los nombres no pueden contener espacios |
| `"2ª mano"` | Clave que empieza por dígito | `segunda_mano` | Los nombres deben empezar por letra o `_` |
| `"Sport & Co"` | `&` en el valor | `Sport &amp; Co` | `&` debe escaparse |
| `"Balón de fútbol <talla 5>"` | `<` y `>` en el valor | `&lt;talla 5&gt;` | `<` es obligatorio escaparlo; `>` es opcional, pero se escapa por simetría |
| `"descuento": null` | XML no tiene un valor nulo | Se omite el elemento | Decisión de diseño, no regla sintáctica |
| `"descuento": 15` | Número sin unidad | `<descuento unidad="%">15</descuento>` | Aclarar el significado del dato |

> [!WARNING]
> Un error frecuente es mantener `null` como texto (`<descuento>null</descuento>`). El documento está bien formado, pero un programa leería la palabra «null» como un valor real. Conviene comentarlo aunque no penalice en este criterio.

### Alternativas válidas

- `<proveedor>` con hijos `<nombre>` y `<pais>` en lugar de texto y atributo.
- `<descuento/>` vacío en lugar de omitirlo.
- `en_stock` y `segunda_mano` como elementos hijos.
- `id` como elemento en lugar de atributo.

<details>
<summary>Ver la solución completa</summary>

```xml
<?xml version="1.0" encoding="utf-8"?>
<!-- Datos convertidos desde t2_tienda.json -->
<tienda nombre="Deportes Ribera" actualizado="2026-10-01">
    <producto id="1" en_stock="true">
        <nombre>Zapatillas de running</nombre>
        <precio moneda="EUR">79.95</precio>
        <tallas>
            <talla>40</talla>
            <talla>41</talla>
            <talla>42</talla>
            <talla>43</talla>
        </tallas>
        <proveedor pais="España">Sport &amp; Co</proveedor>
        <!-- descuento: null en el JSON, se omite -->
    </producto>
    <producto id="2" en_stock="false" segunda_mano="true">
        <nombre>Raqueta de pádel</nombre>
        <precio moneda="EUR">120.0</precio>
        <tallas/>
        <proveedor pais="Portugal">PadelPro</proveedor>
        <descuento unidad="%">15</descuento>
    </producto>
    <producto id="3" en_stock="true">
        <nombre>Balón de fútbol &lt;talla 5&gt;</nombre>
        <precio moneda="EUR">24.5</precio>
        <tallas/>
        <proveedor pais="España">Sport &amp; Co</proveedor>
    </producto>
</tienda>
```

</details>

---

## Tarea 3. De HTML a XML

**Fuente:** `t3_clasificacion.html` · **Solución:** `t3_clasificacion.xml`

La dificultad de esta tarea no está en los datos, sino en **cambiar de enfoque**: las etiquetas del HTML indican cómo se presenta la información (`<table>`, `<tr>`, `<td>`) y las del XML deben indicar qué significa (`<equipo>`, `<puntos>`).

### De la tabla HTML al XML

| En el HTML | En el XML |
| --- | --- |
| `<h1>Liga escolar de baloncesto 2026-2027</h1>` | `<liga nombre="Liga escolar de baloncesto" temporada="2026-2027">` |
| `<p>Clasificación tras la jornada 4. Actualizada el 3 de octubre de 2026.</p>` | `<clasificacion jornada="4" actualizada="2026-10-03">` |
| Cada `<tr>` del `<tbody>` | Un elemento `<equipo>` |
| Columna `Pos.` | Atributo `posicion` |
| Columnas `PJ`, `PG`, `PP` | `<partidos_jugados>`, `<partidos_ganados>`, `<partidos_perdidos>` |
| `<thead>` y nota final de abreviaturas | No se copian: su información ya está en los nombres de las etiquetas |

### Problemas de los datos y cómo se resuelven

| Dato | Problema | Solución aplicada |
| --- | --- | --- |
| `Ribera &amp; Campiña` | En el navegador se ve `&`, pero en el código ya está escapado | Se mantiene `&amp;` |
| `PJ`, `PG`, `PP` | Abreviaturas poco descriptivas | Nombres completos, tomados de la leyenda del propio HTML |
| Liga, temporada, jornada y fecha | Están fuera de la tabla | Se recuperan como atributos de `<liga>` y `<clasificacion>` |
| Fecha en texto («3 de octubre de 2026») | Formato no normalizado | `2026-10-03` |

> [!IMPORTANT]
> Es el error que más conviene comentar en clase. Quien copie el nombre del equipo **desde el navegador** escribirá `Ribera & Campiña` y el XML no validará. Quien lo copie **desde el código** obtendrá `&amp;` y funcionará. Sirve para explicar que el navegador muestra los caracteres ya interpretados.

### Alternativas válidas

- `<posicion>` como elemento en lugar de atributo.
- Prescindir de `<clasificacion>` y colgar los equipos directamente de `<liga>`, con jornada y fecha como atributos de la raíz.
- Nombres más cortos pero descriptivos: `<jugados>`, `<ganados>`, `<perdidos>`.

<details>
<summary>Ver la solución completa</summary>

```xml
<?xml version="1.0" encoding="utf-8"?>
<!-- Datos extraídos de la tabla de t3_clasificacion.html -->
<liga nombre="Liga escolar de baloncesto" temporada="2026-2027">
    <clasificacion jornada="4" actualizada="2026-10-03">
        <equipo posicion="1">
            <nombre>IES Guadalquivir</nombre>
            <partidos_jugados>4</partidos_jugados>
            <partidos_ganados>4</partidos_ganados>
            <partidos_perdidos>0</partidos_perdidos>
            <puntos>8</puntos>
        </equipo>
        <equipo posicion="2">
            <nombre>CD Olivares</nombre>
            <partidos_jugados>4</partidos_jugados>
            <partidos_ganados>3</partidos_ganados>
            <partidos_perdidos>1</partidos_perdidos>
            <puntos>7</puntos>
        </equipo>
        <equipo posicion="3">
            <nombre>Colegio San José</nombre>
            <partidos_jugados>4</partidos_jugados>
            <partidos_ganados>2</partidos_ganados>
            <partidos_perdidos>2</partidos_perdidos>
            <puntos>6</puntos>
        </equipo>
        <equipo posicion="4">
            <nombre>Ribera &amp; Campiña</nombre>
            <partidos_jugados>4</partidos_jugados>
            <partidos_ganados>1</partidos_ganados>
            <partidos_perdidos>3</partidos_perdidos>
            <puntos>5</puntos>
        </equipo>
        <equipo posicion="5">
            <nombre>IES Las Vegas</nombre>
            <partidos_jugados>4</partidos_jugados>
            <partidos_ganados>0</partidos_ganados>
            <partidos_perdidos>4</partidos_perdidos>
            <puntos>4</puntos>
        </equipo>
    </clasificacion>
</liga>
```

</details>

---

## Tarea 4. De texto libre a XML

**Fuente:** `t4_aviso_excursion.txt` · **Solución:** `t4_aviso_excursion.xml`

Es la tarea más abierta, porque no hay ninguna estructura de partida: el alumnado tiene que decidir qué datos existen y cómo se agrupan. Por eso es donde más variedad de soluciones correctas aparecerá.

### Estructura elegida

```text
excursion
├── destino
├── grupos
│   └── grupo (×2)
├── fecha (dia_semana)
├── salida (hora)
├── regreso_previsto (hora)        ← elemento vacío
├── precio (moneda)
├── precio_incluye
├── profesorado
│   └── responsable (×2)
├── material_obligatorio
│   └── elemento (×3)
├── autorizacion (fecha_limite)
└── inscripcion_online
    └── codigo                     ← sección CDATA
```

### Decisiones principales

| Texto original | En el XML | Motivo |
| --- | --- | --- |
| «jueves 12 de noviembre de 2026» | `<fecha dia_semana="jueves">2026-11-12</fecha>` | Fecha normalizada; el día de la semana se conserva como atributo |
| «Salida: 7:30 desde la puerta principal» | `<salida hora="07:30">Puerta principal del instituto</salida>` | Hora con dos dígitos; el lugar es el contenido |
| «Regreso previsto: 21:00» | `<regreso_previsto hora="21:00"/>` | Solo hay un dato, así que basta un elemento vacío con atributo |
| «35 € (incluye autobús…)» | `<precio moneda="EUR">35</precio>` y `<precio_incluye>` | El número separado de la moneda y de la descripción |
| «Carmen Vidal y Jorge Molina» | `<profesorado>` con dos `<responsable>` | Una enumeración se convierte en lista |
| Lista con guiones | `<material_obligatorio>` con tres `<elemento>` | Ídem |
| «antes del 5 de noviembre» | `fecha_limite="2026-11-05"` | Fecha normalizada en un atributo |
| Enlace `<a href="...">` | Dentro de `<![CDATA[ ... ]]>` | Contiene `<` y `&`; debe conservarse literal |

### El código de inscripción: CDATA o escapado

El enlace contiene `<`, `>`, comillas y `&`. Hay dos soluciones correctas:

```xml
<!-- Opción 1: sección CDATA (la de la solución) -->
<codigo><![CDATA[<a href="https://aula.ejemplo.es/excursion?curso=1&grupo=daw">Inscribirme</a>]]></codigo>

<!-- Opción 2: escapando los caracteres -->
<codigo>&lt;a href="https://aula.ejemplo.es/excursion?curso=1&amp;grupo=daw"&gt;Inscribirme&lt;/a&gt;</codigo>
```

La opción con CDATA es más legible y evita olvidarse de algún carácter, especialmente el `&` de la URL, que es el que más se pasa por alto.

> [!WARNING]
> Si el alumno copia el enlace sin CDATA ni escapar, el parser lo interpretará como un elemento `<a>` y fallará por el `&` de la URL. Si además no hubiera `&`, el documento **validaría**, pero el enlace se habría convertido en parte de la estructura en lugar de en texto. Es un buen ejemplo de que «valida» no siempre significa «es correcto».

<details>
<summary>Ver la solución completa</summary>

```xml
<?xml version="1.0" encoding="utf-8"?>
<!-- Datos extraídos del aviso t4_aviso_excursion.txt -->
<excursion>
    <destino>Sierra Nevada</destino>
    <grupos>
        <grupo>1º DAW</grupo>
        <grupo>1º ASIR</grupo>
    </grupos>
    <fecha dia_semana="jueves">2026-11-12</fecha>
    <salida hora="07:30">Puerta principal del instituto</salida>
    <regreso_previsto hora="21:00"/>
    <precio moneda="EUR">35</precio>
    <precio_incluye>Autobús y alquiler de material</precio_incluye>
    <profesorado>
        <responsable>Carmen Vidal</responsable>
        <responsable>Jorge Molina</responsable>
    </profesorado>
    <material_obligatorio>
        <elemento>Ropa de abrigo e impermeable</elemento>
        <elemento>Guantes y gafas de sol</elemento>
        <elemento>Comida para el mediodía</elemento>
    </material_obligatorio>
    <autorizacion fecha_limite="2026-11-05">Entregar firmada</autorizacion>
    <inscripcion_online>
        <codigo><![CDATA[<a href="https://aula.ejemplo.es/excursion?curso=1&grupo=daw">Inscribirme</a>]]></codigo>
    </inscripcion_online>
</excursion>
```

</details>

---

## Reto. Dos fuentes y espacios de nombres

**Fuentes:** `t5_socios.csv` y `t5_cuotas.json` · **Solución:** `t5_club.xml`

### Cómo se combinan las fuentes

Las dos fuentes comparten el campo `dni`. La solución anida las cuotas de cada socio **dentro** de su elemento `<soc:socio>`, de modo que el DNI aparece una sola vez:

| DNI | Cuotas en el JSON | Resultado |
| --- | --- | --- |
| 11111111H | 2026-09 y 2026-10 | Dos `<cuo:cuota>` |
| 22222222J | 2026-09 | Una `<cuo:cuota>` |
| 33333333P | 2026-09 | Una `<cuo:cuota>` |

### Espacios de nombres

```xml
<club xmlns:soc="http://www.ejemplo.es/club/socios"
      xmlns:cuo="http://www.ejemplo.es/club/cuotas">
```

- Los prefijos se declaran una sola vez, en la raíz, y quedan disponibles en todo el documento.
- Cada etiqueta lleva el prefijo de la fuente de la que procede el dato: `soc:` para el CSV y `cuo:` para el JSON.
- La raíz `<club>` no lleva prefijo porque no pertenece a ninguna de las dos fuentes.
- Las URI son identificadores: no tienen que existir como páginas web.

> [!NOTE]
> Los atributos sin prefijo (`dni`, `mes`, `pagada`) no pertenecen a ningún espacio de nombres; se asocian al elemento en el que están. Es correcto y es la práctica habitual.

### Alternativas válidas

- Mantener dos bloques separados (`<soc:socios>` y `<cuo:cuotas>`) y relacionarlos por el DNI, en lugar de anidar. Es correcto, aunque repite el DNI y obliga a cruzar los datos al leerlos.
- Usar un espacio de nombres por defecto (`xmlns="..."`) para una de las fuentes y prefijo solo para la otra.

<details>
<summary>Ver la solución completa</summary>

```xml
<?xml version="1.0" encoding="utf-8"?>
<!-- Combina t5_socios.csv (prefijo soc) y t5_cuotas.json (prefijo cuo) -->
<club xmlns:soc="http://www.ejemplo.es/club/socios"
      xmlns:cuo="http://www.ejemplo.es/club/cuotas">
    <soc:socio dni="11111111H" fecha_alta="2025-09-15">
        <soc:nombre>Laura Medina</soc:nombre>
        <soc:email>laura@example.com</soc:email>
        <cuo:cuotas>
            <cuo:cuota mes="2026-09" pagada="true">25.0</cuo:cuota>
            <cuo:cuota mes="2026-10" pagada="false">25.0</cuo:cuota>
        </cuo:cuotas>
    </soc:socio>
    <soc:socio dni="22222222J" fecha_alta="2026-01-10">
        <soc:nombre>Sergio Pino</soc:nombre>
        <soc:email>sergio@example.com</soc:email>
        <cuo:cuotas>
            <cuo:cuota mes="2026-09" pagada="true">18.5</cuo:cuota>
        </cuo:cuotas>
    </soc:socio>
    <soc:socio dni="33333333P" fecha_alta="2026-03-02">
        <soc:nombre>Nuria Campos</soc:nombre>
        <soc:email>nuria@example.com</soc:email>
        <cuo:cuotas>
            <cuo:cuota mes="2026-09" pagada="true">25.0</cuo:cuota>
        </cuo:cuotas>
    </soc:socio>
</club>
```

</details>

---

## Cómo validar las entregas

Para comprobar todas las entregas de una vez desde Linux:

```bash
xmllint --noout *.xml
```

Si no aparece ningún mensaje, todos los documentos están bien formados. Si alguno falla, xmllint indica el fichero, la línea y el tipo de error:

```text
t1_reservas_pabellon.xml:10: parser error : xmlParseEntityRef: no name
        <observaciones>Material: balones & conos</observaciones>
                                          ^
```

> [!TIP]
> xmllint se detiene en el primer error de cada fichero. Si una entrega tiene varios, aparecerán de uno en uno a medida que se corrijan.

### Errores más frecuentes en las entregas

| Error | Tarea donde suele aparecer | Mensaje típico de xmllint |
| --- | --- | --- |
| `&` sin escapar | 1, 2, 3, 4 | `xmlParseEntityRef: no name` |
| `<` sin escapar | 1, 2 | `StartTag: invalid element name` |
| Espacio en un nombre | 1, 2 | `Specification mandates value for attribute` |
| Nombre que empieza por dígito | 2 | `StartTag: invalid element name` |
| Prefijo sin declarar | Reto | `Namespace prefix ... is not defined` |
| Etiquetas cruzadas o sin cerrar | Todas | `Opening and ending tag mismatch` |

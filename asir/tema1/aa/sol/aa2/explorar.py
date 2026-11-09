#!/usr/bin/env python3
"""Explorador universal de documentos XML.

Uso:  python explorar.py FICHERO

El mismo programa, sin cambiar una sola línea, sirve para cualquier
documento XML, sea cual sea su vocabulario: noticias, gráficos, rutas,
facturas, configuración... Solo usa la biblioteca estándar de Python.
"""
import sys
from collections import Counter
import xml.etree.ElementTree as ET

def nombre(tag):
    # Separa {URI}nombre en (nombre, URI)
    if tag.startswith('{'):
        uri, local = tag[1:].split('}')
        return local, uri
    return tag, None

if len(sys.argv) != 2:
    print(__doc__)
    sys.exit(1)

fichero = sys.argv[1]
try:
    raiz = ET.parse(fichero).getroot()
except ET.ParseError as e:
    print(f'{fichero}: NO es un documento XML bien formado -> {e}')
    sys.exit(2)

local, uri = nombre(raiz.tag)
elementos = list(raiz.iter())
conteo = Counter(nombre(e.tag)[0] for e in elementos)
print(f'Fichero ........... {fichero}')
print(f'Elemento raíz ..... {local}')
print(f'Espacio de nombres  {uri or "(ninguno)"}')
print(f'Total de elementos  {len(elementos)}')
print('Elementos que más se repiten:')
for n, c in conteo.most_common(5):
    print(f'   {n:<20} {c}')

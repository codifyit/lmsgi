# Club deportivo en XML y JSON · Variante CLUB-A
Proyecto de la actividad **AE1 · Espacios de nombres** del módulo
*Lenguajes de Marcas y Sistemas de Gestión de Información*.
Combina dos ficheros CSV (`socios.csv` y `cuotas.csv`) en un documento XML
con espacios de nombres y genera su versión en JSON.
## Ficheros
| Fichero | Formato | Contenido |
| --- | --- | --- |
| [club.xml](club.xml) | XML | Socios y cuotas con espacios de nombres |
| [club.json](club.json) | JSON | Los mismos datos para una aplicación web |
## Espacios de nombres
- `soc` → `https://xml.ejemplo.es/club/a/socios`: datos de los socios
- `cuo` → `https://xml.ejemplo.es/club/a/cuotas`: datos de las cuotas
## Ejemplo
```xml
<soc:socio codigo="S01" fecha_alta="2026-09-04">
<soc:nombre>Lucía</soc:nombre>
</soc:socio>
```
## Cómo validar
1. Abre el XML en el navegador, o
2. ejecuta en una terminal:
```bash
xmllint --noout club.xml
```
## Estado
- [x] XML validado
- [x] JSON validado
- [ ] Revisar las capturas
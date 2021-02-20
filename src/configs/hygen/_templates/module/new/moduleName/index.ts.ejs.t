---
to: ../../js/app/<%= h.inflection.camelize(name, true) %>/index.ts
---
export * from './module';
export {default as <%=component%>} from './<%=component%>Container';
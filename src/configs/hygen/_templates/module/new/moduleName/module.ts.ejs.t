---
to: ../../js/app/<%= h.inflection.camelize(name, true) %>/module.ts
---
import {INDEX_URL} from "@/js/constants/http";

export const MODULE_URL  = INDEX_URL + '<%= name %>';
export const MODULE_NAME = '<%=name %>.title';
export const MODULE_ICON_CLASS = 'qvident-icon_<%=name.toLowerCase()%>';


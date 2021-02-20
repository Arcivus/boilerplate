---
to: ../../js/app/<%= h.inflection.camelize(name, true) %>/duck/reducers/reducer.ts
---
import Action from "@/js/models/Action";
import * as types from '../types';

const reducerName = (state, action: Action) => {
  switch (action.type) {
    case types.GET_ITEMS:
      return state;
    default:
      return state;
  }
};

export default reducerName;
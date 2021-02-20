import "../scss/styles.scss";
import * as React from "react";
import * as ReactDOM from "react-dom";
import "../js/utils/i18n";
import App from "../js/app/App";

if (!('remove' in Element.prototype)) {
  //@ts-ignore fix for IE element remove
  Element.prototype.remove = function() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

const appRoot = document.getElementById('app-root');
if (appRoot) {
  ReactDOM.render(
    <App/>, appRoot
  );
}

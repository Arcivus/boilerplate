import * as React from 'react';
import {ReactElement} from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {MessageType} from "@/js/enums/Common";

const notification = (message: ReactElement | string, type: MessageType) => {
  return (() => {
    toast(<div>{message}</div>, {
      autoClose: 3000,
      type
    });
  })();
};

export default notification;
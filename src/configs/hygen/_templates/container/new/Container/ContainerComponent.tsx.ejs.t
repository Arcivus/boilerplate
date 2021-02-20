---
to: ../../js/app/<%=path%><%= name %>/<%= name %>Component.tsx
---
import * as React from 'react';
import {useTranslation} from 'react-i18next';

interface Props {
}

const <%= name %>Component = (props: Props) => {
  const {t} = useTranslation();

  return (
    <div>

    </div>
  )
};

export default <%= name %>Component;
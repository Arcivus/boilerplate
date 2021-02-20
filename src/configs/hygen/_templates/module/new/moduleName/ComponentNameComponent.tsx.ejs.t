---
to: ../../js/app/<%= h.inflection.camelize(name, true) %>/<%=component%>Component.tsx
---
import * as React from 'react';
import {useTranslation} from 'react-i18next';
import Breadcrumbs from "@/js/app/common/components/Breadcrumbs/Breadcrumbs";
import {ContainerStyled} from "@/js/app/common/styledComponents/Container.styled";
import {BlockStyled} from "@/js/app/common/styledComponents/Block.styled";

interface Props {
}

const <%=component%>Component = (props: Props) => {
  const {t} = useTranslation();

  React.useEffect(() => {
    document.title = t('<%=component.toLowerCase()%>.title');
  }, []);

  return (
    <div>
          <Breadcrumbs breadcrumbs={[{
            text: t('<%=name.toLowerCase()%>.title'),
            iconClass: 'qvident-icon_<%=name.toLowerCase()%>',
            className: 'uppercase',
            testId: '<%=name.toLowerCase()%>'
          }]}/>
          <ContainerStyled>
            <BlockStyled></BlockStyled>

          </ContainerStyled>
    </div>
  )
};

export default <%=component%>Component;
import styled from "styled-components";

import {BREAKPOINTS, COLORS} from "@/js/constants/styles";
import {mq} from "@/js/utils/styles";

export const AppWrap = styled.div`
  color: ${COLORS.grayDefault};
  background-color: ${COLORS.gray3};
  min-height: 100vh;
`;

export const AppHeaderStyled = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 250;
`;
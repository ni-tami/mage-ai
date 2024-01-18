import styled, { css } from 'styled-components';

import dark from '@oracle/styles/themes/dark';
import { SCROLLBAR_WIDTH_SMALL, PlainScrollbarStyledCss, hideScrollBar, showScrollBar } from '@oracle/styles/scrollbars';

const CONTAINER_STYLE = css`
  ${PlainScrollbarStyledCss}

  &.inline {
    overflow: auto;
  }
`;

const CONTENT_STYLE = css`
`;


export const ShellContainerStyle = styled.div`
  ${CONTAINER_STYLE}

  height: 500px;
  background: red;
`;

export const OutputContainerStyle = styled.div`
  ${CONTAINER_STYLE}
`;

export const ShellContentStyle = styled.div`
  ${CONTENT_STYLE}
`;

export const OutputContentStyle = styled.div`
  ${CONTENT_STYLE}
`;


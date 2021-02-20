/**
 * generate media query string
 * @param from - starting screen width
 * @param until - screen width
 */
import {COLORS, SIZES} from "@/js/constants/styles";

function mq(from: number, until?: number): string {
  const minWidth = from + 'px';
  if (until) {
    const maxWidth = (until - 1) + 'px';
    return `@media screen and (min-width: ${minWidth}) and (max-width : ${maxWidth})`;
  } else {
    return `@media screen and (min-width: ${minWidth})`;
  }
}

function mqH(from: number, until?: number): string {
  const minWidth = from + 'px';
  if (until) {
    const maxHeight = (until - 1) + 'px';
    return `@media screen and (min-height: ${minWidth}) and (max-height : ${maxHeight})`;
  } else {
    return `@media screen and (min-height: ${minWidth})`;
  }
}

/**
 * Generate rules for background image placement
 * @param size
 * @param position
 * @param repeat
 */
function bgImg(size = 'cover', position = 'center', repeat = 'no-repeat'): string {
  return `
  background-size: ${size};
  background-position: ${position};
  background-repeat: ${repeat};
  `;
};

function border(position = 'bottom'): string {
  return `
    &:after {
      position: absolute;
      content: '';
      display: block;
      left: ${SIZES.padding};
      right: ${SIZES.padding};
      border-bottom: 1px solid ${COLORS.gray5};
      ${position}: 0;
    }
  `;
}

function paddingHack(padding = '66%', elem = 'before'): string {
  return `
    &:${elem} {
      content: '';
      display: block;
      padding-top: ${padding};
    }
  `;
}

function clearfix(): string {
  return `
    &:before, &:after {
      content: '';
      display: block;
      clear: both;
    }
  `;
}

function getScrollbarWidth() {
  // Creating invisible container
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  // outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
}

export {mq, mqH, bgImg, border, paddingHack, getScrollbarWidth, clearfix};
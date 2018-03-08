import { GRID } from './const';

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: GRID * 2,
  margin: `0 0 ${GRID}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : '#EEE',

  // styles we need to apply on draggables
  ...draggableStyle,
});

export default getItemStyle;

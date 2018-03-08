import { GRID } from './const';

const getItemsStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: GRID,
  width: 250,
  minHeight: 375,
  marginBottom: 8,
  marginLeft: 8,
  marginRight: 8,
  display: 'inline-block',
  verticalAlign: 'top',
});

export default getItemsStyle;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import withDroppable from '../drag-and-drop/with-droppable';
import getItemsStyle from './get-items-style';
import Item from './Item';

function formatHour(hourStr) {
  const dateStr = '1970-01-01';
  return moment(`${dateStr} ${hourStr}`).format('h A');
}

export class Items extends Component {
  render() {
    const {
      // react-beautiful-dnd
      provided,
      snapshot,
      listType,

      // UI
      hour,
      itemIds,
    } = this.props;

    return (
      <div
        ref={provided.innerRef}
        style={getItemsStyle(snapshot.isDraggingOver)}
      >
        <h4>{formatHour(hour)}</h4>
        {itemIds.map((itemId, index) => {
          return (
            <Item
              // react
              key={itemId}

              // react-beautiful-dnd
              draggableId={itemId}
              type={listType}
              index={index}

              // UI data
              {...{itemId}}
              {...{listType}}
            />
          );
        })}
        {provided.placeholder}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  itemIds: state.board.itemIdsByDateByHour[props.date][props.hour],
});
const mapDispatchToProps = {};

export default withDroppable(connect(
  mapStateToProps,
  mapDispatchToProps
)(Items));

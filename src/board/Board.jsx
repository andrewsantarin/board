import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import moment from 'moment';

import { reorderItems, reorderItemMap, updateItemTime } from './actions';
import { LIST_TYPE_CARD } from './const';

import Items from './Items';

function toDate(dt) {
  return moment(dt).format('DD MMM');
}

export class Board extends Component {
  reorderItemMap = (payload) => {
    this.props.reorderItemMap(payload);
  }

  reorderItems = (payload) => {
    this.props.reorderItems(payload);
  }

  updateItemTime = (time) => {
    this.props.updateItemTime(time);
  }

  handleDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const {
      source,
      destination,
    } = result;

    // dropped within the same list
    if (source.droppableId === destination.droppableId) {
      this.reorderItems({
        source,
        destination,
      });

      return;
    }

    // dropped into another list
    this.reorderItemMap({
      source,
      destination
    });
  }

  render() {
    const {
      itemIdsByHour,
      date,
    } = this.props;

    const hours = Object.keys(itemIdsByHour);

    return (
      <div 
        style={{
          minWidth: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          whiteSpace: 'nowrap',
          verticalAlign: 'top',
        }}
      >
        <h1>{toDate(date)}</h1>
        <DragDropContext
          onDragEnd={this.handleDragEnd}
        >
          {hours.map((hour) => (
            <Items
              key={hour}
              droppableId={hour}
              type={LIST_TYPE_CARD}
              listType={LIST_TYPE_CARD}
              {...{date}}
              {...{hour}}
            />
          ))}
        </DragDropContext>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  date: state.board.date,
  itemIdsByHour: state.board.itemIdsByDateByHour[state.board.date],
});
const mapDispatchToProps = {
  reorderItems,
  reorderItemMap,
  updateItemTime,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

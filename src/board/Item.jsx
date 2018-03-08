import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import withDraggable from '../drag-and-drop/with-draggable';
import getItemStyle from './get-item-style';

const backgroundTransition = {
  MozTransition: 'all 250ms ease-in',
  WebkitTransition: 'all 250ms ease-in',
  OTransition: 'all 250ms ease-in',
  transition: 'all 250ms ease-in',
}

function toDateTime(datetime) {
  return moment(datetime).format('ddd, DD MMM hh:mm a')
}

function getDatetimeStyle({ isHighlighted }) {
  if (!isHighlighted) {
    return {
      ...backgroundTransition,
      backgroundColor: undefined,
      color: undefined,
    };
  }

  return {
    ...backgroundTransition,
    backgroundColor: 'red',
    color: 'white',
  };
}

export class ItemContent extends Component {
  state = {
    isHighlighted: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.item.datetime !== this.props.item.datetime) {
      this.highlightDatetime(); 
    }
  }

  setIsHighlighted = (isHighlighted) => {
    this.setState((prevState, props) => ({
      isHighlighted,
    }));
  }

  highlightDatetime = () => {
    this.setIsHighlighted(true)
    setTimeout(() => {
      this.setIsHighlighted(false);
    }, 250);
  }

  render() {
    const { item } = this.props;
    const { isHighlighted } = this.state;

    return (
      <div>
        <div style={{ textAlign: 'right' }}>
          <code style={{ backgroundColor: '#888', color: 'white', padding: 4, borderRadius: 4 }}>id: {item.id}</code>
        </div>
        <div>{item.name}</div>
        <div style={getDatetimeStyle({ isHighlighted })}>{toDateTime(item.datetime)}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  item: state.board.items[props.itemId],
  item2: state.board.items[16],
});
const mapDispatchToProps = {};

ItemContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemContent);






export class Item extends PureComponent {
  render() {
    const {
      // react-beautiful-dnd
      provided,
      snapshot,

      itemId,
    } = this.props;

    return (
      <div>
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          <ItemContent {...{itemId}} />
        </div>
        {provided.placeholder}
      </div>
    );
  }
}

export default withDraggable(Item);

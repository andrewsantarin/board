import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

export default class DraggableContainer extends Component {
  render() {
    const {
      // react-beautiful-dnd
      draggableId,
      index,
      type,
      isDragDisabled,
      direction,
      disableInteractiveElementBlocking,

      // UI
      component: EnhancedComponent,
      ...props
    } = this.props;

    const draggableProps = {
      draggableId,
      index,
      type,
      isDragDisabled,
      direction,
      disableInteractiveElementBlocking,
    };

    return (
      <Draggable {...draggableProps}>
        {(provided, snapshot) => (
          <EnhancedComponent
            {...{provided}}
            {...{snapshot}}
            {...props}
          />
        )}
      </Draggable>
    );
  }
}

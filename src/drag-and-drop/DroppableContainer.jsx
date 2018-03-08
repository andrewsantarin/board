import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';

export default class DroppableContainer extends Component {
  render() {
    const {
      // react-beautiful-dnd
      droppableId,
      type,
      isDropDisabled,
      direction,
      ignoreContainerClipping,

      // UI
      component: EnhancedComponent,
      ...props
    } = this.props;

    const droppableProps = {
      droppableId,
      type,
      isDropDisabled,
      direction,
      ignoreContainerClipping,
    };

    return (
      <Droppable {...droppableProps}>
        {(provided, snapshot) => (
          <EnhancedComponent
            {...{provided}}
            {...{snapshot}}
            {...props}
          />
        )}
      </Droppable>
    );
  }
}
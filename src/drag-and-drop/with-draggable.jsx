import React, { Component } from 'react';

import getDisplayName from '../get-display-name';
import DraggableContainer from './DraggableContainer';

export default function withDraggable(EnhanceableComponent) {
  class WithDraggable extends Component {
    render () {
      return (
        <DraggableContainer
          {...this.props}
          component={EnhanceableComponent}
        />
      );
    }
  }

  WithDraggable.displayName = `withDraggable(${getDisplayName(EnhanceableComponent)})`

  return WithDraggable;
}

import React, { Component } from 'react';

import getDisplayName from '../get-display-name';
import DroppableContainer from './DroppableContainer';

export default function withDroppable(EnhanceableComponent) {
  class WithDroppable extends Component {
    render () {
      return (
        <DroppableContainer
          {...this.props}
          component={EnhanceableComponent}
        />
      );
    }
  }

  WithDroppable.displayName = `withDroppable(${getDisplayName(EnhanceableComponent)})`

  return WithDroppable;
}

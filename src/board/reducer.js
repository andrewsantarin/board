import {
  REORDER_ITEMS,
  REORDER_ITEM_MAP,
  UPDATE_ITEM_TIME,
} from './actions';

import INITIAL_STATE from './initial-state';

import { reorderItems, reorderItemMap, updateItemTime } from './models';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REORDER_ITEMS:
      return {
        ...state,
        itemIdsByDateByHour: {
          ...state.itemIdsByDateByHour,
          [state.date]: {
            ...state.itemIdsByDateByHour[state.date],
            [action.payload.destination.droppableId]: reorderItems({
              items: state.itemIdsByDateByHour[state.date][action.payload.destination.droppableId],
              startIndex: action.payload.source.index,
              endIndex: action.payload.destination.index,
            }),
          },
        },
      };

    case REORDER_ITEM_MAP:
      const itemId = state.itemIdsByDateByHour[state.date][action.payload.source.droppableId][action.payload.source.index];
      const item = state.items[itemId];
      const newItem = {
        ...updateItemTime(item, action.payload.destination.droppableId),
      };
      return {
        ...state,
        items: {
          ...state.items,
          [itemId]: newItem,
        },
        itemIdsByDateByHour: {
          ...state.itemIdsByDateByHour,
          [state.date]: reorderItemMap({
            itemMap: state.itemIdsByDateByHour[state.date],
            source: action.payload.source,
            destination: action.payload.destination,
          }),
        },
      };

    case UPDATE_ITEM_TIME:
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: updateItemTime(state.items[action.payload.id], action.payload.time),
        }
      };

    default:
      return state;
  }
}

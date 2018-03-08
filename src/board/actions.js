export const REORDER_ITEMS = 'REORDER_ITEMS';
export function reorderItems({ source, destination }) {
  return {
    type: REORDER_ITEMS,
    payload: {
      source,
      destination,
    },
  };
}

export const REORDER_ITEM_MAP = 'REORDER_ITEM_MAP';
export function reorderItemMap({ source, destination }) {
  return {
    type: REORDER_ITEM_MAP,
    payload: {
      source,
      destination,
    },
  };
}

export const UPDATE_ITEM_TIME = 'UPDATE_ITEM_TIME';
export function updateItemTime({ id, time }) {
  return {
    type: UPDATE_ITEM_TIME,
    payload: {
      id,
      time,
    },
  };
}

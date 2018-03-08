import moment from 'moment';

// Reordering within the same list.
export function reorderItems({ items, startIndex, endIndex }) {
  const result = Array.from(items);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
}

// Reordering across two different lists.
export function reorderItemMap({ itemMap, source, destination }) {
  const current = [...itemMap[source.droppableId]];
  const next = [...itemMap[destination.droppableId]];
  const target = current[source.index];

  // Reordering across two different lists.
  // Remove from the current list, then insert into the next one.
  current.splice(source.index, 1);
  next.splice(destination.index, 0, target);

  const result = {
    ...itemMap,
    [source.droppableId]: current,
    [destination.droppableId]: next
  };

  return result;
}

// Update the item's time component only in its datetime attribute.
export function updateItemTime(item, newTime) {
  const date = moment(item.datetime).format('YYYY-MM-DD');
  const time = newTime;
  const datetime = `${date} ${time}`;

  return {
    ...item,
    datetime,
  };
}

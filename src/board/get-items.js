// fake data generator
export default function getItems(count, offset=0) {
  return Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + offset}`,
    content: `item ${k + offset}`,
  }));
}
import moment from 'moment';

function toDate(dt) {
  return moment(dt).format('YYYY-MM-DD');
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const names = [
  'Andrew Santarin',
  'Holm Schimanski',
  'Icke Sam',
  'Kimmy Sam',
  'Sese Hein',
  'Samia Yousuf',
  'Nur Haniza',
  'Stefan Marwah',
  'Christine Santarin',
  'Kaji Tetsushi',
  'Moses 3K',
  'Jesus Superstar',
];

const today = moment();
const tomorrow = moment().clone().add(1, 'day');

const data = {
  date: toDate(today),
  items: {},

  // This list will output the tours logically by ascending date, ascending hour, ascending sequence number.
  // The sequence number is determined initially by the API upon every poll, not the UI.
  // The sequence number is a granular piece of integer information and is agnostic to what group it belongs to.
  //
  // This list only stores IDs.
  itemIdsByDateByHour: {
    [toDate(today)]: {
      '09:00:00': [5, 4, 1, 88], // New ones will be appended to the bottom by the API.
      '10:00:00': [7, 8, 2, 48],
      '12:00:00': [22, 35, 37],
      '15:00:00': [10, 11, 50, 31, 60, 64],
      '18:00:00': [12, 32],
      '20:00:00': [16],
    },
    [toDate(tomorrow)]: {

    },
  },
};

Object.keys(data.itemIdsByDateByHour).forEach((date) => {
  Object.keys(data.itemIdsByDateByHour[date]).forEach((hour) => {
    data.itemIdsByDateByHour[date][hour].forEach((id) => {
      data.items[id] = {
        id,
        datetime: `${date} ${hour}`,
        name: names[getRandomInt(0, names.length - 1)],
      };
    });
  });
});

export default data;

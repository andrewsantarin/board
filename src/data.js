const boardData = {
  // The actual data is here.
  tour_attachments: {

  },
  tours: {
    [1]: {

    },
    [2]: {

    },
    [4]: {

    },
    [5]: {

    },
    [7]: {

    },
    [8]: {

    },
  },

  // This list will output the tours logically by ascending date, ascending hour, ascending sequence number.
  // The sequence number is determined initially by the API upon every poll, not the UI.
  // The sequence number is a granular piece of integer information and is agnostic to what group it belongs to.
  //
  // This list only stores IDs.
  tour_ids__by_tour_date_start_planned__by_tour_time_start_planned: {
    '2018-03-08': {
      '00:01': [5, 4, 1], // New ones will be appended to the bottom by the API.
      '10:00': [7, 8, 2],
    },
    '2018-03-09': {

    },
  },
};

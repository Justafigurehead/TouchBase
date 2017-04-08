db.dropDatabase();

use travel_journal;

db.entries.insert([
  {
    id: 1,
    date: "07/04/2017",
    title: "Day One",
    entry_text: "Today I will be visiting..."
  },
  {
    id: 2,
    date: "08/04/2017",
    title: "Day Two",
    entry_text: "Today I will be visiting..."
  }
]);

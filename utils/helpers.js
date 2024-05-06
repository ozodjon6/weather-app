// Format date and time
export function formatDateTime(date, format) {
  const options = {};
  if (format.includes("HH")) options.hour = "2-digit";
  if (format.includes("mm")) options.minute = "2-digit";
  if (format.includes("ss")) options.second = "2-digit";

  return new Intl.DateTimeFormat("ru-RU", options).format(date);
}

// Capitalize first letter of a string
export function getShortWeekdayFromDate(dateString) {
  const date = new Date(dateString);
  const options = { weekday: 'short' };
  const shortWeekday = date.toLocaleString('ru-RU', options);

  return  shortWeekday.charAt(0).toUpperCase() + shortWeekday.slice(1);
}

export const months = {
  "01": "янв",
  "02": "фев",
  "03": "мар",
  "04": "апр",
  "05": "май",
  "06": "июн",
  "07": "июл",
  "08": "авг",
  "09": "сен",
  "10": "окт",
  "11": "ноя",
  "12": "дек",
};

export function addHyphenBetweenSpaces(text) {
  if (!text || text.trim() === "") {
    return "";
  }

  const words = text.split(" ");
  return words.join("-");
}

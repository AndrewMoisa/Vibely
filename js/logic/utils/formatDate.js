export function formatDate(apiDateString) {
  const date = new Date(apiDateString);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Extract the components of the date
  const year = date.getFullYear();
  const month = monthNames[date.getMonth()]; // Get month name from the array
  const day = String(date.getDate()).padStart(2, "0");

  return `${day} ${month}, ${year}`;
}

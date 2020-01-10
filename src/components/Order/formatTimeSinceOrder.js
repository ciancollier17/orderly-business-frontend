/// formatTimeSinceOrder(int seconds)
/// Converts seconds elapsed since order to minutes and seconds and
/// returns a formatted string.
function formatTimeSinceOrder(seconds) {
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let remainder = seconds - (minutes * 60);
  minutes = minutes - (hours * 60);

  let hoursToString = hours.toString();
  hoursToString = hoursToString.length == 1 ? "0" + hoursToString : hoursToString;
  let minutesToString = minutes.toString();
  minutesToString = minutesToString.length == 1 ? "0" + minutesToString : minutesToString;
  let remainderToString = remainder.toString();
  remainderToString = remainderToString.length == 1 ? "0" + remainderToString : remainderToString;

  return hoursToString != "00" ? hoursToString + ":" + minutesToString + ":" + remainderToString : minutesToString + ":" + remainderToString;
}

export default formatTimeSinceOrder;

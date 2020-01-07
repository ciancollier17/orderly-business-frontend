/// formatTimeSinceOrder(int seconds)
/// Converts seconds elapsed since order to minutes and seconds and
/// returns a formatted string.
function formatTimeSinceOrder(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainder = seconds - (minutes * 60);

  let minutesToString = minutes.toString();
  minutesToString = minutesToString.length == 1 ? "0" + minutesToString : minutesToString;
  let remainderToString = remainder.toString();
  remainderToString = remainderToString.length == 1 ? "0" + remainderToString : remainderToString;

  return minutesToString + ":" + remainderToString;
}

export default formatTimeSinceOrder;

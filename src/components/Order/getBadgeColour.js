/// getBadgeColour(float percentOfExpectedTimeElapsed, orderTimingPercentages)
/// This takes the percentage of the expected time expected to
/// process an order currently elapsed and returns a bootstrap
/// colour string based on user specified preferences for the
/// percentage at which the badge should turn amber or red.
function getBadgeColour (percentOfExpectedTimeElapsed, orderTimingPercentages) {
  let badgeColour = "success";

  if (percentOfExpectedTimeElapsed > orderTimingPercentages.amber) {
    if (percentOfExpectedTimeElapsed > orderTimingPercentages.red) {
      badgeColour = "danger";
    } else {
      badgeColour = "warning";
    }
  }

  return badgeColour;
}

export default getBadgeColour;

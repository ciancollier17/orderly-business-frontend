/// sortDataset (dataset, column, ascending)
/// Takes a dataset (2D array), column number and whether or not the
/// dataset should be sorted in ascending order based on the column
/// specified. If ascending = false then the dataset is sorted in
/// descending order based on the column specified.
function sortDataset (dataset, column, ascending = true) {
  if (isNaN(dataset[0][column])) {
    // col to sort is non-numerical
  } else {
    if (ascending) {
      dataset.sort((a, b) => {
        return a[column] > b[column];
      });
    }
  }

  return dataset;
}

export default sortDataset;

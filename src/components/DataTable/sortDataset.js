/// sortDataset (dataset, column, ascending)
/// Takes a dataset (2D array), column number and whether or not the
/// dataset should be sorted in ascending order based on the column
/// specified. If ascending = false then the dataset is sorted in
/// descending order based on the column specified.
function sortDataset (dataset, column, ascending = true) {
  let datasetCopy = JSON.parse(JSON.stringify(dataset));

  datasetCopy.sort((a, b) => {
    if (isNaN(dataset[0][column])) {
      // col to sort is non-numerical
      let aCode = 0;
      let bCode = 0;
      let index = 0;

      while (aCode == bCode && index < a[column].length && index < b[column].length) {
        aCode = a[column].charCodeAt(index);
        bCode = b[column].charCodeAt(index);
        index++;
      }

      if (ascending) {
        if (aCode > bCode) {
          return 1;
        } else {
          return -1
        }
      } else {
        if (aCode < bCode) {
          return 1;
        } else {
          return -1;
        }
      }
    } else {
      if (ascending) {
        if (a[column] > b[column]) {
          return 1;
        } else {
          return -1;
        }
      } else {
        if (a[column] < b[column]) {
          return 1;
        } else {
          return -1;
        }
      }
    }
  });

  return datasetCopy;
}

export default sortDataset;

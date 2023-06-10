/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maximumProfit = 0;
  let maxProfitsForw = [0];
  let maxProfitsBackw = [0];
  let minPrice = prices[0];
  let maxPrice = prices[prices.length - 1];

  for (let i = 1; i < prices.length; i++) {

    minPrice = Math.min(minPrice, prices[i]);
    maximumProfit = Math.max(maximumProfit, (prices[i] - minPrice));
    maxProfitsForw.push(maximumProfit);

  }
  maximumProfit = 0

  for (let j = prices.length - 2; j >= 0; j--) {

    maxPrice = Math.max(maxPrice, prices[j]);
    maximumProfit = Math.max(maximumProfit, (maxPrice - prices[j]));
    maxProfitsBackw.push(maximumProfit);

  }
  let theRealMaxProfit = 0;

  for (let k = 0; k < maxProfitsForw.length; k++) {

    theRealMaxProfit = Math.max(theRealMaxProfit, (maxProfitsForw[k] + maxProfitsBackw[maxProfitsBackw.length - 1 - k]));
  }

  return theRealMaxProfit;
};
const maxProfit = (prices) => {
  if (prices == null || prices.length <= 1) return 0
  let profit = 0
  let minBuy = prices[0]
  for (let i = 0; i < prices.length; i++) {
    minBuy = Math.min(minBuy, prices[i])
    profit = Math.max(profit, prices[i] - minBuy)
  }
  return profit
}
const prices = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices))
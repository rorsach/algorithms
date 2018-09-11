/**
 * Return the maximum profit (or least loss) possible from an array of prices, arranged by oldest price to newest price, from index 0 to length - 1.
 * @param {[]Number} prices List of prices arranged by date.
 * @returns {Number} The maximum profit (or least loss) for the range of prices given. 
 */
function maximumProfit(prices) {
    if (prices.length < 2) {
        console.log("Insufficient prices for a buy and sell action");
    }
    var profit;
    var maxProfit = prices[1] - prices[0];
    var lowestPrice = prices[0];
    var price;
    
    for (var i = 1; i < prices.length; i++) {
        price = prices[i];

        profit = price - lowestPrice;
        
        if (profit > maxProfit) {
            maxProfit = profit;
        }

        if (lowestPrice > price) {
            lowestPrice = price;
        }

    }
    
    return maxProfit;
}

var prices = [10, 10, 2, 4, 99, 1, 1];

prices = [15, 10, 5, 1];

console.log(maximumProfit(prices));

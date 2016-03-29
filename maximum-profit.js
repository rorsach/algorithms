/**
 * Return the maximum profit (or least loss) possible from an array of prices, arranged by oldest price to newest price, from index 0 to length - 1.
 * @param {[]Number} prices List of prices arranged by date.
 * @returns {Number} The maximum profit (or least loss) for the range of prices given. 
 */
function maximumProfit(prices) {
    var profit = Number.NEGATIVE_INFINITY;
    var maxProfit = Number.NEGATIVE_INFINITY;
    var lowestPrice = Number.POSITIVE_INFINITY;
    var price;
    
    for (var i = 0; i < prices.length; i++) {
        price = prices[i];

        if (lowestPrice > price) {
            lowestPrice = price;
        } else {
            profit = price - lowestPrice;
            
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    
    return maxProfit;
}

var prices = [10, 10, 2, 4, 99, 1, 1];

console.log(maximumProfit(prices));

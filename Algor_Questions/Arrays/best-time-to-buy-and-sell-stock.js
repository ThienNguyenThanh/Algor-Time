var maxProfit = function(prices) {
    let maxProfit = 0;
    let buy = 0;
    for(let sell  = 1;sell < prices.length;sell++){
        var currProfit = prices[sell] - prices[buy];
        maxProfit = Math.max(currProfit, maxProfit);
        if(prices[sell] < prices[buy]){
            buy = sell;
        }
    }
        
    
    return maxProfit;
};  

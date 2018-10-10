/**
 * @param  {Array/String} 数组1
 * @param  {Array/String} 数组1
 * @return {Array/String} 最大连续的公共子串
 */
function getLCS(arr1, arr2) {
    var sub = arr1 instanceof Array ? [] : '';
    if (!arr1.length || !arr2.length) {
        return sub;
    }
    var maxSize = 0;
    var preDp = [];
    var dp = null;
    var index = -1;
    for (var i = 0; i < arr1.length; i++) {
        dp = [];
        for (var j = 0; j < arr2.length; j++) {
            dp[j] = 0;
            if (arr1[i] == arr2[j]) {
                dp[j] = (preDp[j - 1] || 0) + 1;
                if (dp[j] > maxSize) {
                    maxSize = dp[j];
                    index = j;
                }
            }
        }
        //保存i行的结果，供i+1行使用
        preDp = dp;
    }
    if (index > -1) {
        sub = arr2.slice(index - maxSize + 1, index + 1);
    }
    return sub;
}
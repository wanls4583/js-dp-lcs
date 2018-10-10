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
    var preSize = 0;
    var index = -1;
    for (var i = 0; i < arr1.length; i++) {
        var preIndex = i;
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[preIndex] == arr2[j]) {
                preIndex++;
                preSize++;
                if (preSize > maxSize) {
                    maxSize = preSize;
                    index = j;
                }
            } else {
                preIndex = i;
                preSize = 0;
            }
        }
    }
    if (index > -1) {
        sub = arr2.slice(index - maxSize + 1, index + 1);
    }
    return sub;
}
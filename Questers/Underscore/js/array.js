
var Array = ["0", 2, 4, 6, null, [], 8, 10];
var sum = 0;
var count = 0;

var evens = _.filter(Array, function(num) {
	_.isNumber(num) {
	sum += num;
	count++;
	}
	return sum, count;
})
var average = sum/count;
console.log("Sum of numeric values in array is: ", sum);
console.log("Average is: ", average);
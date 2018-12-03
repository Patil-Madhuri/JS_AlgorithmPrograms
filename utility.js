module.exports = {
    //-----------------------Algorithm Programs-------------------------//
    anagram: function (item1, item2) {
        var arr1 = item1.split(''); //to convert the string into array
        var arr2 = item2.split(''); //to convert the string into array
        var arr1 = arr1.sort(); //sort the array 
        var arr2 = arr2.sort(); ////sort the array 

        if (arr1.join(',') === arr2.join(',')) //check wheather they are equal or not
        {
            console.log('anagram detected');
            process.exit();
        } else
            console.log('not anagram');
        process.exit();
    },
    /**
	 * 2. Prime numbers in range 1-1000
	 * @param number
	 * @return
	 */
    checkPrime: function (number) {
        var flag = 0;
        for (var i = 2; i < number; i++) {
            if (number % i == 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 0)
            return true;
        return false;
    },


    /**
	 * 3. Prime anagrams and palindromes
	 * @param number
	 * @return
	 */
    isPalindrome: function (number) {
        var rem, sum = 0;
        var temp = number;
        if (number > 10) {
            while (number > 0) {
                rem = number % 10;
                sum = (sum * 10) + rem;
                number = parseInt(number / 10);
            }
        }
        if (temp == sum)
            return true;
        else
            return false;
    },


    /**
	 * 4. binarySearch method for integer
	 * @param array
	 * @param elem
     * @param length
	 */
    binarySearchInteger: function (array, elem, length) {
        var first = 0;
        var last = length;

        while (first < last) {
            var mid = parseInt((first + last) / 2);

            if (elem < array[mid])
                last = mid;
            else if (elem > array[mid])
                first = mid + 1;
            else
                return mid;
        }
        return -1;
    },

    /**
	 * 4. binarySearch method for String
	 * @param array
	 * @param elem
     * @param length
	 */
    binarySearchString: function (array, elem, length) {
        var first = 0;
        var last = length;

        while (first < last) {
            var mid = parseInt((first + last) / 2);

            if (elem.localeCompare(array[mid]) < 0)
                last = mid;
            else if (elem.localeCompare(array[mid]) > 0)
                first = mid + 1;
            else
                return mid;
        }
        return -1;
    },

    /**
	 * 4. Insertion Sort method for Integer.
	 * @param array
     * @param size
	 */
    insertionSortInteger: function (array, size) {
        var key;
        for (var index = 1; index < size; index++) {
            key = array[index];
            var j = index - 1;
            while (j >= 0 && key < array[j]) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        }
        return array;
    },

    /**
	 * 4. Insertion Sort method for String.
	 * @param array
     * @param size
	 */
    insertionSortString: function (array, size) {
        var key;
        for (var index = 1; index < size; index++) {
            key = array[index];
            var j = index - 1;
            while (j >= 0 && key.localeCompare(array[j]) < 0) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        }
        return array;
    },

    /**
	 * 4. Bubble Sort method for Integer.
	 * @param array
     * @param size
	 */
    bubbleSortInteger: function (array, size) {
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size - 1; j++) {
                if (array[j] > array[j + 1]) {
                    var temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        return array;
    },

    /**
	 * 4. Bubble Sort method for String.
	 * @param array
     * @param size
	 */
    bubbleSortString: function (array, size) {
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size - 1; j++) {
                if (array[j].localeCompare(array[j + 1]) > 0) {
                    var temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        return array;
    },


    /**
	 * 10. Vending Machine Program.
	 * @param notes
	 * @param money
     * @param index
	 */
    calculateMoney: function (notes, money, index) {
        var total = 0;
        if (money == 0) {
            return -1;
        }
        else {

            if (money >= notes[index]) {
                var calculate = parseInt(money / notes[index]);
                money = money % notes[index];
                total = Number(total) + Number(calculate);
                console.log(total + " Notes of : " + notes[index]);
            }
            index++;

            return this.calculateMoney(notes, money, index);
        }
    },


    /**
	 * 13. Monthly Payment
	 * @param p
	 * @param y
     * @param r
	 */
    findMonthlyPayment: function (p, y, r) {
        var n = 12 * y;
        var rr = r / (12 * 100);

        var payment = (p * rr) / (1 - Math.pow((1 + rr), (-n)));
        return payment;
    },


    /**
	 * 14. Sqrt Of Non Negative Numb
	 * @param number
	 * @return
	 */
    sqrtOfNumber: function (number) {
        epsilon = 1e-15;
        t = number;
        while (Math.abs((t - number / t)) > epsilon * t) {
            t = ((number / t) + t) / 2;
        }
        return t;
    },


    /**
	 * 15. Decimal to Binary conversion
	 * @param decimal
	 * @return
	 */
    toBinary: function (decimal) {
        var binary = "";
        var value = 0;
        while (decimal > 0) {
            value = decimal % 2;
            binary = value + binary;
            decimal = parseInt(decimal / 2);
        }
        while (binary.length < 8) {
            binary = 0 + binary;
        }
        return binary;
    },


    /**
	 * 16. Binary.java ---> convert decimal to binary swap
     *  nibbles and fins new decimal number
	 * @param binary
	 * @return
	 */
    swapNibbles: function (binary) {
        var str1, str2, temp1, temp2;

        str1 = binary.substring(0, 4);
        temp1 = str1;

        str2 = binary.substring(4, 8);
        temp2 = str2;

        /*temp = str1;
        str1 = str2;
        str2 = temp;	
        var strAfterSwap = str1 + str2;
        console.log("String after swapping " +strAfterSwap);*/

        var strAfterSwap = temp2 + temp1;

        return strAfterSwap;
    },

    toDecimal: function (swap) {
        var decimal = 0;
        var binaryNumber = parseInt(swap);
        var i = 0;
        while (binaryNumber > 0) {
            var temp = binaryNumber % 10;
            decimal = decimal + (temp * Math.pow(2, i));
            binaryNumber = parseInt(binaryNumber / 10);
            i++;
        }
        return decimal;
    },

    findNum: function (value) {
        var readlinesync = require('readline-sync');
        var arr = [];
        var arr1 = [];
        for (var i = 1; i <= value; i++) {
            arr.push(i);
            /**
             * @description values from 1 to that range is first pushed to an array
             */
        }
        var firstindex = 0;
        var lastindex = arr.length - 1;
        while (firstindex <= lastindex) {
            var mid = Math.floor((firstindex + lastindex) / 2);
            var value = readlinesync.question(`\nis ${arr[mid]} is the element? \n if yes press 1 -> else press 0 ->`)
            if (value == 0) {
                /**
                 * @description if no then it will check further by asking whether the number is greater than mid or not
                 */
                arr1.push(arr[mid])
                var val2 = readlinesync.question(`\n if your value >${arr[mid]} \n if yes press1 -> if no press 0 ->`)
                {
                    if (val2 == 1) {
                        firstindex = mid + 1;
                    }
                    else {
                        lastindex = mid - 1;
                    }
                }
            }
            else if (value == 1) {
                /**
                 * @description if yes then the mid value is the number
                 */
                console.log("\nelement found");
                console.log("total search :" + arr1);
                process.exit();
            }
        }
    },
    mergesort: function (array) {
        if (array.length === 1)
            // return once we hit an array with a single item
            return array;
        var middle = Math.floor(array.length / 2);// get the middle item of the array rounded down
        var left = array.slice(0, middle);// items on the left side
        var right = array.slice(middle);// items on the right side

        return this.merge(
            this.mergesort(left),
            this.mergesort(right)
        )

    },
    // compare the arrays item by item and return the concatenated result
    merge: function (left, right) {
        var result = [];
        var indexLeft = 0;
        var indexRight = 0;

        while (indexLeft < left.length && indexRight < right.length) {
            if (left[indexLeft] < right[indexRight]) {
                result.push(left[indexLeft])
                indexLeft++
            } else {
                result.push(right[indexRight])
                indexRight++
            }
        }


        return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))

    },

    dayOfWeek: function (year, month, day) {
        var y = parseInt(year);
        var m = parseInt(month);
        var d = parseInt(day);

        var y0 = y - Math.floor((14 - m) / 12);
        var x = y0 + Math.floor(y0 / 4) - Math.floor(y0 / 100) + Math.floor(y0 / 400);
        var m0 = m + 12 * Math.floor((14 - m) / 12) - 2;
        var d0 = (d + x + Math.floor(31 * m0 / 12)) % 7;
        d0 = parseInt(d0);

        switch (d0) {
            case 0:
                console.log("Sunday");
                break;
            case 1:
                console.log("Monday");
                break;
            case 2:
                console.log("Tuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            case 4:
                console.log("Thursday");
                break;
            case 5:
                console.log("Friday");
                break;
            case 6:
                console.log("Saturday");
        }

    },

};


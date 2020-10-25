module.exports = function toReadable (number) {
    const zeroTo19 = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(
    	        " "
        );
        const twentyTo90 = "twenty thirty forty fifty sixty seventy eighty ninety".split(
            " "
        );
        if (number < 20) {
            return zeroTo19[number];
        }
        if (number < 100) {
            return (
                twentyTo90[Math.floor(number / 10) - 2] +
                (number % 10 ? " " + zeroTo19[number % 10] : "")
            );
        }
        if (number < 1000) {
            return (
                zeroTo19[Math.floor(number / 100)] +
                " hundred" +
                (number % 100 ? " " + toReadable(number % 100) : "")
            );
        }
        return (
            toReadable(Math.floor(number / 1000)) +
            " thousand" +
            (number % 1000 ? " " + toReadable(number % 1000) : "")
        );
    };

module.exports = function getZerosCount(number, base) {

        var given = base;
        var stackBase = [];
        var stackExp = [];

        for (var i = 2; i <= base / 2; i++) {
            var x = 0;
            if ( given % i === 0 && given > 0 ) {
                while (given % i === 0) {
                    given /= i;
                    x++;
                }
                stackBase.push(i);
                stackExp.push(x);
            }
        }

        if (stackBase.length === 0) {
            stackBase.push(base);
            stackExp.push(1);
        }

        var stackZero = [];
        for (var i = 0; i < stackBase.length; i++) {
            stackZero[i] = 0;
        }

        for (var i = 0; i < stackBase.length; i++) {
            for (var x = 1, x1 = iter = Math.pow(stackBase[i], x); x1 <= number; x++, x1 = iter = Math.pow(stackBase[i], x)) {
                for (var x2 = x1; x2 <= number; x2 += iter) {
                    stackZero[i]++;
                }
            }
        }

        for (var i = 0; i < stackExp.length; i++) {
            stackZero[i] = Math.floor(stackZero[i] / stackExp[i]);
        }

        var count = 0;

        for (var i = 1, count = stackZero[0]; i < stackZero.length; i++)
            if (count > stackZero[i])
                count = stackZero[i];

        return count;
    }




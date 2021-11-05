// 1.1
function adder() {
    let answer = prompt('Put some number, please.');
    let number = 0;
    let result = 0;
    if (isNaN(answer) || answer == null || answer == '') {
        console.log(`'${answer}\' is not a number.`);
    } else {
        number = parseInt(answer);
        answer = '';
        for (let index = 1; index < number; index++) {
            answer += `${index}+`;
            result += index;
        }
        console.log(`${answer + number}=${result + number}`)
    }
}
// 1.2
function minusOplus() {
    let answer = prompt('Put some number, please.');
    let number = 0;
    if (isNaN(answer) || answer == null || answer == '') {
        console.log(`'${answer}\' is not a number.`);
    } else {
        number = parseInt(answer);
        if (number > 0) {
            console.log(`Number ${number} is positive.`);
        } else if (number < 0) {
            console.log(`Number ${number} is negative.`);
        } else {
            console.log(`Number ${number} is 0.`);
        }
    }
}
// 1.3
function validator(strng, bln) {
    do {
        let prm = prompt(strng);
        if (prm === "stop") {
            return prm;
        }
        if (_NaNNullEmpty(prm)) {
            console.log(`'${prm}\' is not a number. Let\'s try again. Or put \'stop\'`);
            alert(`'${prm}\' is not a number. Let\'s try again. Or put \'stop\'`);
        } else {
            return prm;
        }
    } while (bln);
}
function _NaNNullEmpty(x) {
    return isNaN(x) || x == null || x == '';
}
function solution() {
    let a, b, operation, answer, result;
    a = validator(
        "Put the first number. Or put \'stop\'",
        _NaNNullEmpty(a));
    if (a === "stop") {
        return;
    }
    b = validator(
        "Put the second number, please. Or put \'stop\'",
        _NaNNullEmpty(b));
    if (b === "stop") {
        return;
    }
    oper: while (true) {
        operation = prompt(
            'Which Math operation do you want to do from \'+\', \'-\', \'*\', \'/\'. Or put \'stop\'');
        switch (operation) {
            case "stop":
                return;
            case "+":
                result = parseInt(a) + parseInt(b);
                break oper;
            case "-":
                result = parseInt(a) - parseInt(b);
                break oper;
            case "*":
                result = parseInt(a) * parseInt(b);
                break oper;
            case "/":
                if (parseInt(b) === 0) {
                    alert("You can\'t devide on zero!");
                    continue oper;
                } else {
                    result = parseInt(a) / parseInt(b);
                    break oper;
                }
            default:
                console.log(
                    `${operation} is not Math operation from \'+\', \'-\', \'*\', \'/\'. Be more attention. Or put \'stop\'`);
                alert(`${operation} is not Math operation from \'+\', \'-\', \'*\', \'/\'. Be more attention. Or put \'stop\'`);
                continue oper;
        }
    }
    do {
        answer = validator(
            `So it\'s solution time! ${a}${operation}${b} = ... Or put \'stop\'`,
            _NaNNullEmpty(answer));
        if (answer === "stop") { return; }
    } while (answer != result);
    alert(answer);
}
// main
solution();
// adder();
// adder();
// minOplus();
// minOplus();
// minOplus();
// try{
// }
// catch (exception){
//     console.log(`${answer} is not a number.`);
// }

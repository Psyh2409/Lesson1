// 1.1
function adder() {
    while (true) {
        let answer = prompt('Put some number, please.');
        let number = 0;
        let result = 0;
        if (isNaN(answer) || answer == null || answer == '') {
            console.log(`'${answer}\' is not a number.`);
            alert(`'${answer}\' is not a number.`);
            continue;
        } else {
            number = parseInt(answer);
            answer = '';
            for (let index = 1; index < number; index++) {
                answer += `${index}+`;
                result += index;
            }
            console.log(`${answer + number}=${result + number}`);
            alert(`${answer + number}=${result + number}`);
            break;
        }
    }
}
// 1.2
function minusOplus() {
    while (true) {
        let answer = prompt('Put some number, please.');
        let number = 0;
        if (isNaN(answer) || answer == null || answer == '') {
            console.log(`'${answer}\' is not a number.`);
            continue;
        } else {
            number = parseInt(answer);
            if (number > 0) {
                console.log(`Number ${number} is positive.`);
                alert(`Number ${number} is positive.`);
            } else if (number < 0) {
                console.log(`Number ${number} is negative.`);
                alert(`Number ${number} is negative.`);
            } else {
                console.log(`Number ${number} is 0.`);
                alert(`Number ${number} is 0.`);
            }
            break;
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
// 1.4
function authorization(standard) {
    let b = true;
    do {
        let key = prompt("Please, enter your password.")
        switch (key) {
            case `${standard}`:
                console.log("You have been authorized.");
                alert("You have been authorized.");
                b = !b;
                break;
            case "admin":
                console.log("You have been authorized like \'admin\'.");
                alert("You have been authorized like \'admin\'.");
                b = !b;
                break;
            default:
                console.log("Incorrect password!");
                alert("Incorrect password!");
                break;
        }
    } while (b);
}
// 1.5
function fibonachi(number) {
    let temp1 = 0;
    let temp2 = 1;
    let strng = `0, 1`;
    for (let i = 2; i < number; i++) {
        let next = temp1 + temp2;
        strng += `, ${next}`;
        temp1 = temp2;
        temp2 = next;
    }
    console.log(strng);
    alert(strng);
}
// main
adder();
minusOplus();
solution();
authorization(1323);
fibonachi(10);


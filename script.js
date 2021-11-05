// 1.1
function adder() {
    let answer = prompt('Put some number, please.');
    let number = 0;
    let result = 0;
    if (isNaN(answer)) {
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
function minOplus() {
    let answer = prompt('Put some number, please.');
    let number = 0;
    if (isNaN(answer)) {
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
function solution() {
    let a, b, operation, answer, result;
    stop: do {
        first: while (true) {
            a = prompt('Put the first number, please. Or put \'stop\'');
            if (a === "stop") { break stop; }
            if (isNaN(a)) {
                console.log(`'${a}\' is not a number. Let\'s try again. Or put \'stop\'`);
                alert(`'${a}\' is not a number. Let\'s try again. Or put \'stop\'`)
                continue;
            }
            break first;
        }
        second: while (true) {
            b = prompt('Put the second number, please. Or put \'stop\'');
            if (b === "stop") { break stop; }
            if (isNaN(b)) {
                console.log(`'${b}\' is not a number. Let\'s try again. Or put \'stop\'`);
                alert(`'${b}\' is not a number. Let\'s try again. Or put \'stop\'`);
                continue;
            }
            break second;
        }
        oper: while (true) {
            operation = prompt(
                'Which Math operation do you want to do from \'+\', \'-\', \'*\', \'/\'. Or put \'stop\'');
            switch (operation) {
                case "stop":
                    break stop;
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
                    result = parseInt(a) / parseInt(b);
                    break oper;
                default:
                    console.log(
                        `${operation} is not Math operation from \'+\', \'-\', \'*\', \'/\'. Be more attention. Or put \'stop\'`);
                    alert(`${operation} is not Math operation from \'+\', \'-\', \'*\', \'/\'. Be more attention. Or put \'stop\'`);
                    continue oper;
            }
        }
        solut: while (true) {
            answer = prompt(`So it\'s solution time! ${a}${operation}${b} = ... Or put \'stop\'`);
            if (answer === "stop") { break stop; }
            if (isNaN(answer) || answer != result) {
                console.log(`'${answer}\' is bad idea. Let\'s try again!`);
                alert(`'${answer}\' is bad idea. Let\'s try again! Or put \'stop\'`);
                continue solut;
            }
            alert('Correct! Go to start.')
            break solut;
        }
    } while (true);
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

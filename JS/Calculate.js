let a = ""; // First number
let b = ""; // Second number
let sign = ""; // Знак операции
let finish = false;

const DIGIT = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const ACTION = ["-", "+", "x", "/"];

// Экран

const $OUT = document.querySelector(".calc-screen p");

function clearAll()
{
    a = ""; // First number and result
    b = ""; // Second number
    sign = ""; // Знак
    finish = false;

    $OUT.textContent = 0;
}

document.querySelector(".ac").onclick = clearAll;

document.querySelector(".buttons").onclick = (event) =>
{
    // Нажата не кнопка 

    if(!event.target.classList.contains("btn")) return;

    // Нажата кнопка ac

    if(event.target.classList.contains("ac")) return;

    $OUT.textContent = "";

    // Получаем нажатую кнопку

    const KEY = event.target.textContent;

    // Если нажата клавиша 0-9 или .

    if(DIGIT.includes(KEY))
    {
        if(b === "" && sign === "")
        {
            a += KEY;

            console.log(a, b, sign);
    
            $OUT.textContent = a;
        }
        else if(a !== "" && b !== "" && finish)
        {
            b = KEY;
            finish = false;
            $OUT.textContent = b;
        }
        else
        {
            b += KEY;
            $OUT.textContent = b;
        }

        console.log(a, b, sign);

        return;
    }

    // Если нажата клавиша + - / x

    if(ACTION.includes(KEY))
    {
        sign = KEY;
        $OUT.textContent = sign;
        console.log(a, b, sign);
        return;
    }

    // Нажата кнопка =

    if(KEY === "=")
    {
        if(b === "")
        {
            b = a;
        }

        switch(sign)
        {
            case "+":
                a = (+a) + (+b);
                break;
            
            case "-":
                a = a - b;
                break;

            case "x":
                a = a * b;
                break;

            case "/":
                if(b === "0")
                {
                    $OUT.textContent = "Ошибка!";
                    a = "";
                    b = "";
                    sign = "";

                    return;
                }

                a = a / b;
                break;
        }

        finish = true;

        $OUT.textContent = a;
        console.log(a, b, sign);
    }
}
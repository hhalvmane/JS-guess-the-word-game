var words = ["перемога", "дерево", "кіт", "апельсин", "вода"];

main();
    function main()
    {
        var word = prompt(" Вітаю! Натисніть: 1 - додати слово, 2 - розпочати гру, 3 - вийти");
        console.log(word)
        if (word == 1)
        {
            var add = prompt ("Введіть слово");
            words.push(add);
            main();
            //game(add); // щоб одразу передати значення введеного слова для вгадування
        }
        else if (word == 2)
        {
            game();
        }
        else if (word == 3)
        {
            exit();
        }
        else
        {
            alert("Немає такого варіанту відповіді");
            main();
        }
    }

    function game(custom) {
        var word;
        if (custom) {
            word = custom;
        } else {
            word = words[Math.floor(Math.random() * words.length)];
        }

        var answerArray = [];
        for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_";
        }


    var remainingLetters = word.length;
    var error = 6;

    main();
    function main()
    {

        if (error == 0)
        {
         alert(" Скінчились спроби! Гра закінчена");
         exit();
        } 

        else
        {
    while (remainingLetters > 0 && error >= 1)  
    {
        alert(answerArray.join(" "));
        var guess = prompt("Спроб: " +error+ " Вгадайте літеру або натисніть Скасувати, щоб вийти з гри.");
        if (guess === "0") 
        {
        break;
        } 
        else if (guess.length !== 1) 
        {
        alert("Будь ласка, введіть одну літеру.");
        } 
        else 
        {
            var i = false;
            for (var j = 0; j < word.length; j++) 
            {
                if (word[j] === guess.toLowerCase()) 
                {
                answerArray[j] = guess.toLowerCase();
                remainingLetters--;
                i = true;
                }
            }

            if(!i)
            {
                error--;
            }
            }

        }
        alert(answerArray.join(" "));
            alert(" Правильно, " + word + " - шукане слово"); 
    }
}

function exit()
{
    alert("Гра завершена");
}
    }
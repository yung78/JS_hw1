loop1:    
    while (true) {
        alert("Новая игра!");
        const guessNumber = Math.round(Math.random() * 1000);
        console.log(`Я загадал число: ${guessNumber}`);
        let counter = 1;
        loop2:
            while(true) {
                if (counter == 6) {
                    alert("Вы проиграли. =(")
                    break loop2;
                }
                
                const numFromUser = prompt(`Введите число от 0 до 999 или 'q' для выхода.\nПопыток в запасе: ${6-counter}`);
                console.log(`Вы ввели: ${numFromUser}`);
                console.log(`Попытка №${counter}`);
                
                if (numFromUser == "q") {
                    alert("До новых встречь!");
                    break loop1;
                } 
                else {
                    counter++;
                    if (numFromUser.length === 0 || numFromUser === null || numFromUser === undefined) {
                        alert("Вы ничего не ввели ");
                    }
                    else {
                        if (isNaN(numFromUser)) {
                            alert("inputError");
                        }
                        else {
                            if (guessNumber > numFromUser) {
                                alert("Ваше число меньше");
                            }
                            else {
                                if (guessNumber < numFromUser) {
                                    alert("Ваше число больше");
                                }
                                else {
                                    alert("Вы победили!");
                                    break;
                                }
                            }
                        }
                    }
                }
            }
    }
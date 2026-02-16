document.addEventListener('DOMContentLoaded', function() {
    console.log('Скрипт загружен и работает!');

    // ---------- МАССИВЫ С ФРАЗАМИ ----------
    const phrases = {
        col1: [
            "Спасибо, что написали.", "Спасибо, что рассказали.", "Спасибо, что сообщили.",
            "Спасибо за вопрос.", "Сейчас попробую всё прояснить.",
            "Спасибо, что уточняете. Позвольте, я поясню.", "Конечно, сейчас всё подскажу.",
            "Я помогу разобраться.", "Спасибо, что подождали.",
            "Спасибо, что нашли время рассказать об этом.", "Правильно сделали, что написали нам.",
            "Получили ваше обращение и уже смотрим, в чём дело.", "Начали изучать детали по вашей проблеме.",
            "Уже смотрим, что произошло.", "Хорошо, что вы написали.",
            "Спасибо большое, что поделились.", "Спасибо за такой важный вопрос.",
            "Спасибо, что обратились.", "Хорошо, что вы спросили об этом.",
            "Спасибо за уточнения.", "Рад(а), что вам интересно сотрудничество ...",
            "Рад(а), что хотите участвовать в ... Чтобы попасть в программу ...",
            "Спасибо, что подождали. В этот раз решение затянулось, но я готов(а) рассказать..."
        ],
        col2: [
            "Этот момент действительно может вызывать вопросы.",
            "Понимаю ваше возмущение — это действительно очень неприятно.",
            "Понимаю, как это мешает работе.", "Понимаю, что это неудобно.",
            "Вижу, что ситуация вызывает сильные эмоции. Я с вами, давайте разберёмся, что произошло.",
            "Мне жаль, что вам пришлось столкнуться с этой ситуацией.",
            "Понимаю, что вы хотели бы как можно скорее",
            "Мне жаль, что вам пришлось столкнуться с ожиданием. Понимаю, как это может раздражать.",
            "Мне жаль, что сейчас операция недоступна — понимаю, насколько это неудобно.",
            "Мне жаль, что ситуация нарушила ваши планы.", "Понимаю, что это помешало вашей работе",
            "Это действительно недопустимо.", "Так правда не должно быть.",
            "Понимаю, что вы рассчитывали на более быстрое решение вопроса", "Понимаю вашу тревогу",
            "Понимаю, почему возникает вопрос", "Понимаю ваше желание уточнить этот момент.",
            "Да, вопрос и правда требует пояснений.", "Это действительно важный вопрос.",
            "Понимаю ваше желания прояснить вопрос — он очень важен для...",
            "Да, ситуация и правда неприятная — так быть, конечно, не должно.",
            "Понимаю ваше беспокойство — ситуации с [НАПИСАТЬ С ЧЕМ] действительно неприятные, особенно когда они происходят внезапно.",
            "Ситуация и правда очень сложная и нестандартная."
        ],
        col3: [
            "Вот, что нужно сделать, чтобы", "Мы всё проверили — теперь вы можете",
            "Если вы уже пробовали [СДЕЛАТЬ О ЧЕМ МЫ ПИШЕМ], но у вас не получилось — напишите, пожалуйста, я выясню причину.",
            "Смотрите, есть два варианта, как [ЧТО НУЖНО КЛИЕНТУ]", "А ещё можно вот так:",
            "Вот, что я обычно рекомендую в таких ситуациях:", "Пожалуйста, попробуйте ещё вот так:",
            "Объясню, в чём тут дело", "Вот, что здесь важно учитывать:",
            "Сейчас расскажу, где это посмотреть:", "Здесь стоит обратить внимание вот на что:",
            "На всякий случай уточню, что", "Так может быть, если", "Хотите, я подскажу, как",
            "Пожалуйста, попробуйте/сделайте ..., после этого всё должно получиться",
            "Я прописал/а для вас максимально подробную инструкцию",
            "Постараюсь объяснить, почему так происходит.", "Давайте всё объясню.",
            "Давайте расскажу, почему так произошло.", "Сейчас всё объясню.",
            "Сейчас постараемся вас сориентировать.", "Дело в том, что"
        ],
        col4: [
            "Извините за ожидание — потребовалось больше времени, чем планировали.",
            "Извините за эти неудобства — мы уже решаем проблему.", "Простите, что подвели.",
            "Простите, так действительно не должно быть.",
            "Извините, в предыдущем сообщении была неточность.",
            "Извините, что ожидание заняло так много времени",
            "Извините, что решение заняло больше времени, чем обычно.",
            "Извините, что заняли так много времени.",
            "Простите, мы стараемся предотвращать такие ситуации.",
            "Простите, мы ошиблись в предыдущем ответе.", "Простите, что запутали.",
            "Простите, что так вышло.", "Ещё раз прошу прощения.",
            "Извините, что заставили волноваться.",
            "Простите, мы ошиблись в предыдущем ответе. Сейчас расскажем, как",
            "Извините, что в прошлых ответах могли выразиться не совсем точно. И спасибо, что дали нам время всё уточнить"
        ],
        col5: [
            "Мы продолжаем работу по вашему вопросу, я вернусь с ответом, как только появится новая информация.",
            "Спасибо за терпение. Скоро вернусь с ответом.",
            "Мы уже разбираемся, чтобы как можно быстрее решить ваш вопрос.",
            "Благодарю за ожидание — ситуация нестандартная, и мы стараемся как можно быстрее решить её.",
            "Я поднял/а приоритет вашего обращения.", "Я договорился/ась о дополнительной проверке.",
            "Я попросил/а ускорить проверку.", "Я проверяю обновления по вашему обращению.",
            "Я отметил/а вопрос как срочный.", "Я передал/а информацию с пометкой о срочности",
            "Я попросил/а рассмотреть вопрос в приоритетном порядке",
            "Проверяем, что случилось, и узнаём, что можно сделать.",
            "Уже смотрим, что произошло. Свяжемся с вами, как выясним все детали.",
            "Уже разбираемся в вашем вопросе.", "Начали изучать детали по вашей проблеме.",
            "Проверяем, что случилось, и узнаём, что можно сделать. Сразу вам напишем, когда всё выясним."
        ],
        col6: [
            "Если появятся вопросы, обязательно пишите, мы рядом.",
            "Если вы снова столкнётесь с проблемой, буду рад/а вам помочь.",
            "Если возникнут вопросы, мы готовы помочь вам в любой момент.",
            "Надеюсь, что мне удалось вам помочь. Пишите по любым вопросам — я всегда рядом!",
            "Рад/а был помочь. Если что-то понадобится — пишите.",
            "Благодарим за обращение — всегда рады помочь.",
            "Надеюсь, у меня получилось помочь. Если нужно ещё что-то уточнить, напишите обязательно, я помогу.",
            "Очень надеюсь, что мне удалось вас сориентировать. Если нужны подробности или остались вопросы, пожалуйста, обращайтесь — я на связи!",
            "Обязательно напишите, если что-то пойдёт не так — я помогу!",
            "Надеюсь, сейчас всё стало понятнее. Если будут вопросы — напишите, пожалуйста.",
            "Если что-то ещё потребуется — я на связи.", "Буду рядом, если понадобится помощь.",
            "Если вдруг что-то останется неясным — напишите, разберёмся вместе.",
            "Буду рад/а продолжить диалог, если появятся вопросы.",
            "Если снова не получится — дайте знать, посмотрим ещё раз",
            "Надеюсь, мой совет поможет вам сэкономить время",
            "Если появятся ещё вопросы, обращайтесь.",
            "Если у вас появятся ещё вопросы, напишите — мы на связи.",
            "Если у вас появятся ещё вопросы, напишите — мы во всём разберёмся и подскажем, что можно сделать.",
            "Надеюсь, у меня получилось вам помочь. Если появятся ещё вопросы, дайте знать.",
            "Если у вас появятся ещё вопросы, обязательно напишите. Во всём разберёмся и подскажем, что нужно сделать.",
            "Напишите, если у вас возникнут какие-либо вопросы. Вместе во всём разберёмся.",
            "Напишите, если нужно будет помочь ещё с чем-то разобраться.",
            "Если у вас остались ещё вопросы, дайте знать."
        ]
    };

    // ---------- СОСТОЯНИЕ ----------
    let stepState = {
        currentStep: 1,
        answers: ['', '', '', '', '', '', ''],
        totalSteps: 7
    };

    // ---------- ФУНКЦИИ ДЛЯ ЗАПОЛНЕНИЯ СТРАНИЦЫ ----------
    function fillAllPhraseLists() {
        console.log('Заполняю списки фраз...');

        // 1. Заполняем правую колонку (для рандомного режима)
        for (let i = 1; i <= 6; i++) {
            const list = document.getElementById(`col${i}-phrases`);
            if (list && phrases[`col${i}`]) {
                list.innerHTML = '';
                phrases[`col${i}`].forEach(phrase => {
                    const li = document.createElement('li');
                    li.textContent = phrase;
                    list.appendChild(li);
                });
                console.log(`Колонка ${i}: ${phrases[`col${i}`].length} фраз`);
            } else {
                console.warn(`Контейнер col${i}-phrases не найден`);
            }
        }

        // 2. Заполняем кнопки для пошагового режима
        for (let i = 1; i <= 6; i++) {
            const container = document.getElementById(`step-col${i}-phrases`);
            if (container && phrases[`col${i}`]) {
                container.innerHTML = '';
                phrases[`col${i}`].forEach(phrase => {
                    const btn = document.createElement('button');
                    btn.className = 'step-phrase-btn';
                    btn.textContent = phrase;
                    btn.onclick = (function(stepNum, phraseText) {
                        return function() {
                            selectPhrase(stepNum, phraseText, this);
                        };
                    })(i, phrase);
                    container.appendChild(btn);
                });
                console.log(`Шаг для колонки ${i}: создано кнопок`);
            } else {
                console.warn(`Контейнер step-col${i}-phrases не найден`);
            }
        }
    }

    // Выбор фразы
    function selectPhrase(step, phrase, btn) {
        console.log(`Выбрана фраза для шага ${step}`);

        // Убираем выделение с других кнопок
        const container = document.getElementById(`step-col${step}-phrases`);
        if (container) {
            container.querySelectorAll('.step-phrase-btn').forEach(b => {
                b.classList.remove('selected');
            });
        }
        btn.classList.add('selected');

        // Сохраняем фразу (индексация с 0)
        stepState.answers[step - 1] = phrase;

        // Сохраняем текст из 4 шага, если он есть
        const stepSolution = document.getElementById('step-solution');
        if (stepSolution && stepSolution.value.trim() !== '') {
            stepState.answers[3] = stepSolution.value;
        }

        updateAnswerBox();
    }

    // Обновление поля с собираемым ответом
    function updateAnswerBox() {
        const box = document.getElementById('step-answer-box');
        if (!box) return;

        const parts = stepState.answers.filter(a => a && a.trim() !== '');
        box.textContent = parts.join(' ') || 'Начните собирать ответ...';
    }

    // Переключение шагов
    function goToStep(step) {
        for (let i = 1; i <= stepState.totalSteps; i++) {
            const panel = document.getElementById(`step-${i}`);
            if (panel) panel.style.display = 'none';
        }

        const current = document.getElementById(`step-${step}`);
        if (current) current.style.display = 'block';

        // Обновляем индикатор
        document.querySelectorAll('.step-item').forEach((item, index) => {
            const num = index + 1;
            item.classList.remove('active', 'completed');
            if (num === step) item.classList.add('active');
            else if (num < step) item.classList.add('completed');
        });

        document.getElementById('step-prev').disabled = (step === 1);
        stepState.currentStep = step;
    }

    // Сброс пошагового режима
    function resetStepMode() {
        stepState = {
            currentStep: 1,
            answers: ['', '', '', '', '', '', ''],
            totalSteps: 7
        };

        for (let i = 1; i <= 6; i++) {
            const container = document.getElementById(`step-col${i}-phrases`);
            if (container) {
                container.querySelectorAll('.step-phrase-btn').forEach(b => {
                    b.classList.remove('selected');
                });
            }
        }

        const stepSolution = document.getElementById('step-solution');
        if (stepSolution) stepSolution.value = '';

        updateAnswerBox();
        goToStep(1);
    }

    // Переключение режимов
    function switchMode(mode) {
        const randomMode = document.getElementById('random-mode');
        const stepMode = document.getElementById('step-mode');
        const randomBtn = document.getElementById('mode-random');
        const stepBtn = document.getElementById('mode-step');

        if (mode === 'random') {
            randomMode.classList.add('active');
            stepMode.classList.remove('active');
            randomBtn.classList.add('active');
            stepBtn.classList.remove('active');
        } else {
            randomMode.classList.remove('active');
            stepMode.classList.add('active');
            randomBtn.classList.remove('active');
            stepBtn.classList.add('active');
            resetStepMode();
        }
    }

    // Рандомная генерация
    function getRandomPhrase(col) {
        const arr = phrases[col];
        return arr[Math.floor(Math.random() * arr.length)];
    }

    async function generateResponse() {
        const solution = document.getElementById('solution-text').value.trim();
        if (!solution) {
            alert('Введите ваш ответ с решением');
            return;
        }

        document.getElementById('result-box').textContent = '⏳ Генерация...';

        const p1 = getRandomPhrase('col1');
        const p2 = getRandomPhrase('col2');
        const p3 = getRandomPhrase('col3');
        const p4 = getRandomPhrase('col4');
        const p5 = getRandomPhrase('col5');
        const p6 = getRandomPhrase('col6');

        const full = `${p1} ${p2} ${p3} ${solution} ${p4} ${p5} ${p6}`;
        document.getElementById('result-box').textContent = full;
    }

    // Копирование
    function copyText(text, btn) {
        if (!text || text.includes('Начните') || text.includes('⏳')) {
            alert('Нет текста для копирования');
            return;
        }

        navigator.clipboard.writeText(text).then(() => {
            const orig = btn.textContent;
            btn.textContent = '✅ Скопировано!';
            setTimeout(() => btn.textContent = orig, 2000);
        });
    }

    // ---------- ЗАПУСК ----------
    fillAllPhraseLists();

    // Навешиваем обработчики
    document.getElementById('mode-random').addEventListener('click', () => switchMode('random'));
    document.getElementById('mode-step').addEventListener('click', () => switchMode('step'));

    document.getElementById('generate-btn').addEventListener('click', generateResponse);
    document.getElementById('copy-btn').addEventListener('click', function() {
        copyText(document.getElementById('result-box').textContent, this);
    });

    document.getElementById('step-copy-btn').addEventListener('click', function() {
        copyText(document.getElementById('step-answer-box').textContent, this);
    });

    document.getElementById('step-prev').addEventListener('click', () => {
        if (stepState.currentStep > 1) goToStep(stepState.currentStep - 1);
    });

    document.getElementById('step-next').addEventListener('click', () => {
        if (stepState.currentStep < stepState.totalSteps) {
            goToStep(stepState.currentStep + 1);
        } else {
            alert('Все шаги пройдены!');
        }
    });

    document.getElementById('step-skip').addEventListener('click', () => {
        if (stepState.currentStep < stepState.totalSteps) {
            goToStep(stepState.currentStep + 1);
        }
    });

    document.getElementById('step-solution').addEventListener('input', function() {
        stepState.answers[3] = this.value;
        updateAnswerBox();
    });

    // Слайдер
    const slider = document.getElementById('creativity-slider');
    const valSpan = document.getElementById('creativity-value');
    if (slider && valSpan) {
        slider.addEventListener('input', () => {
            valSpan.textContent = slider.value;
        });
    }

    // Статус ИИ (заглушка)
    const aiStatus = document.getElementById('ai-status');
    if (aiStatus) {
        aiStatus.textContent = '✅ ИИ модель готова!';
    }

    // Старт
    goToStep(1);
    updateAnswerBox();

    console.log('Инициализация завершена!');
});

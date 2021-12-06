class CalcControler { // Classe criada

    //propriedades do objeto
    constructor() {
        //Atributos que serão utilizados
        this._lastOperator = '';
        this._lastNumber = '';
        this._operation = [];
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents()
        this.initKeyboard();

    }

    //INITIALIZE() | Seu Funcionamento a partir de seu arranque
    initialize() {

        this.SetDisplayDataTime();
        //ARROW FUNCITON (()=>{})
        // SET INTERVAL | EXECUTA EM INTERVALOS DETERMINADA AÇÃO
        setInterval(() => {
            this.SetDisplayDataTime();
        }, 1000);
        this.setLastNumberToDisplay();

    }


    copyToClipboard() {

        let input = document.createElement('input');

        input.value = this.displayCalc;

        document.body.appendChild(input);

        input.select();

        document.execCommand("Copy");

        input.remove();

    }

    initKeyboard() {

        document.addEventListener('keyup', e => {


            switch (e.key) {

                case 'Escape':
                    this.clearAll();
                    break;
                case 'Backspace':
                    this.clearEntry();
                    this.setLastNumberToDisplay();
                    break;
                case '-':
                case '+':
                case '/':
                case '*':
                case '%':
                    this.addOperation(e.key);
                    break;
                case '=':
                case 'Enter':
                    this.calc();
                    break;
                case '.':
                case ',':
                    this.addDot();
                    break;
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    this.addOperation(parseInt(e.key));
                    break;


                case 'c':
                    if (e.ctrlKey)
                        copyToClipboard()
                    break;



            }

        });
    }


    //=============== METHOD | EVENT OF BUTTONS ===============================

    //Adicione esse evento a todos os... 
    //                  btn, click drag, e
    addEventListenerAll(element, events, fn) {

        //click drag
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        })
    }

    // ============== CONFIGURAÇÃO DE CADA BOTÃO NÃO NUMÉRICO =============

    // ===== LIMPAR TUDO =====
    clearAll() {

        this._operation = [];
        this._lastNumber = '';
        this.lastOperation = '';
        this.setLastNumberToDisplay();

    }

    // ===== LIMPAR ENTRADA =====
    clearEntry() {

        // POP | Limpa o último ARRAY da lista
        this._operation.pop();
        this.setLastNumberToDisplay();

    }

    getLastOperation() {

        return this._operation[this._operation.length - 1];


    }
    setLastOperation(value) {

        this._operation[this._operation.length - 1] = value;
    }

    isOperator(value) {
        //INDEXOF| dentro de value há  ['+', '-', '*', '/', '%']?
        return (['+', '-', '*', '%', '/'].indexOf(value) > -1);
        // RETURN | Retorne o resultado dessa linha de código: (nesse caso booleano)
    }

    // ===== ADICIONAR OPERAÇAO =====

    pushOperation(value) {

        this._operation.push(value);

        if (this._operation.length > 3) {

            this.calc();
        }
    }

    getResult() {



        return eval(this._operation.join(""));;
    }

    calc() {

        let last = '';

        this._lastOperator = this.getLastItem();

        if (this._operation.length < 3) {

            let firstItem = this._operation[0];

            this._operation = [firstItem, this._lastOperator, this._lastNumber];

        }

        if (this._operation.length > 3) {

            last = this._operation.pop();

            this._lastNumber = this.getResult();

        } else if (this._operation.length == 3) {

            this._lastNumber = this.getLastItem(false);

        }

        let result = this.getResult();

        if (last == '%') {

            result /= 100;

            this._operation = [result];

        } else {

            this._operation = [result];

            if (last) this._operation.push(last);

        }

        this.setLastNumberToDisplay();

    }

    getLastItem(isOperator = true) {

        let lastItem;

        for (let i = this._operation.length - 1; i >= 0; i--) {


            if (this.isOperator(this._operation[i] == isOperator)) {

                lastItem = this._operation[i];

                break;
            }
        }

        if (!lastItem) {

            lastItem = (isOperator) ? this._lastOperator : this._lastNumber;

        }

        return lastItem;

    }


    setLastNumberToDisplay() {

        let lastNumber = this.getLastItem(false);

        for (let i = this._operation.length - 1; i >= 0; i--) {


            if (!this.isOperator(this._operation[i])) {

                lastNumber = this._operation[i];
                break;
            }

        }

        if (!lastNumber) lastNumber = 0;
        this.displayCalc = lastNumber;

    }

    addOperation(value) {


        if (isNaN(this.getLastOperation())) {

            if (this.isOperator(value)) {

                this.setLastOperation(value);

            } else {

                this.pushOperation(value);

                this.setLastNumberToDisplay();

            }

        } else {

            if (this.isOperator(value)) {

                this.pushOperation(value);

            } else {

                let newValue = this.getLastOperation().toString() + value.toString();

                this.setLastOperation(newValue);

                this.setLastNumberToDisplay();

            }

        }

    }


    // ===== ERRO =====
    setError() {

        this.displayCalc = "ERROR";

    }

    addDot() {

        let lastOperation = this.getLastOperation();

        if (typeof lastOperation === 'string' && lastOperation.split('').indexOf('.') > -1) return;

        if (this.isOperator(lastOperation) || !lastOperation) {

            this.pushOperation('0.');

        } else {

            this.setLastOperation(lastOperation.toString() + '.');

        }

        this.setLastNumberToDisplay();

    }

    // ======================== METHOD | Casos dos botões não numéricos ==========
    // SWITCH CASE
    execBtn(value) {

        switch (value) {

            case 'ac':
                this.clearAll();
                break;
            case 'ce':
                this.clearEntry();
                this.setLastNumberToDisplay();
                break;
            case 'igual':
                this.calc();
                break;
            case 'subtracao':
                this.addOperation("-");
                break;
            case 'soma':
                this.addOperation("+");
                break;
            case 'divisão':
                this.addOperation("/");
                break;
            case 'multiplicacao':
                this.addOperation("*");
                break;
            case 'porcento':
                this.addOperation("%");
                break;
            case 'ponto':
                this.addDot();
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseFloat(value));
                break;

            default:
                this.setError();
                break
        }
    }

    // ===== DANDO FUNCIONAMENTO AOS BOTÕES A PARTIR DE EVENTOS =====
    initButtonsEvents() {
        //Procure no Código do Documento TODOS os que forem de id buttons, com tag G, faça o mesmo com os de id parts
        let buttons = document.querySelectorAll('#buttons > g, #parts > g');

        //atribua a todos de classe "btn" 
        buttons.forEach((btn, index) => {

            //Adicione ao Botão: se clicar ou arrastar, execute E =>
            // ELEMENT    EVENT   FUNCTION
            this.addEventListenerAll(btn, "click drag", e => {

                let textBtn = btn.className.baseVal.replace("btn-", "");

                this.execBtn(textBtn);

            })


            //============ MUDAR CURSOR DO MOUSE AO PASSA-LO PELO BOTÃO =============

            this.addEventListenerAll(btn, 'mouseover mousedown mouseup', e => {

                btn.style.cursor = "pointer";

            })

        })

    }

    //============== FORMATAÇÃO DE DATA E HORA ===============
    SetDisplayDataTime() {
            this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
                day: "2-digit",
                month: "long",
                year: "numeric"
            });
            this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
        }
        //=========== DANDO VIDA À APRESENTAÇÃO DA HORA ===============================

    get displayTime() {
        // INNERHTML | Altera o HTML por comandos JS 
        return this._timeEl.innerHTML;
    }
    set displayTime(time) {
            return this._timeEl.innerHTML = time;
        }
        //=========== DANDO VIDA À APRESENTAÇÃO DA DATA ==========================

    get displayDate() {
        return this._dateEl.innerHTML;
    }
    set displayDate(date) {
        return this._dateEl.innerHTML = date;
    }

    //========= DANDO VIDA AO DISPLAY DA CALCULADORA ===========================

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }
    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    //=========== CURRENT DATE====================

    get currentDate() {
        // crie uma nova intsância de _currentDate/(DATA ATUAL) chamada "Date"
        return new Date();
    }

    set currentDate(date) {
            this._currentDate = date
        }
        //==========================================
}
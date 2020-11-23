var Tic_Tac_Toe = new Vue({
    el: '#tic_tac_toe',
    data: {
        nameField1: '',
        nameField2: '',
        name1: '',
        name2: '',
        size: 3,
        fields: [],
        gameFields: [],
        crossed0: false,
        crossed1: false,
        turn: 'О',
    },
    methods: {
        inputName1: function () {
            this.name1 = this.nameField1;
            this.nameField1 = ''
        },
        inputName2: function () {
            this.name2 = this.nameField2;
            this.nameField2 = ''
        },
        inputFields: function () {
            this.turn = 'О';
            while (this.fields.length) {
                this.fields.pop();
            }
            for (i = 0; i < this.size; i++) {
                this.fields.push([]);
                for (j = 0; j < this.size; j++) {
                    this.fields[i].push('');
                }
            }
        },
        winsCounter: function () {
            j = 0;

            //Проверка главной диагонали
            for (i = 0; i < this.size - 1; i++)
                if (this.fields[i][i] === this.fields[i + 1][i + 1] && this.fields[i][i] !== '') j++;
            if (j === this.size - 1 && this.turn === 'О')
                return this.turn = 'Игра окончена. ' + 'Победил ' + this.fields[i][j]+ ' ' + this.name2;
            if (j === this.size - 1 && this.turn === 'X')
                return this.turn = 'Игра окончена. ' + 'Победил ' + this.fields[i][j]+ ' ' + this.name1;

            j = 0;

            //Проверка побочной диагонали
            for (i = this.size - 1; i > 0; i--)
                if (this.fields[j][i] === this.fields[j + 1][i - 1] && this.fields[j][i] !== '') j++;
            if (j === this.size - 1 && this.turn === 'О')
                return this.turn = 'Игра окончена. ' + 'Победил ' + this.fields[i][j]+ ' ' + this.name2;
            if (j === this.size - 1 && this.turn === 'X')
                return this.turn = 'Игра окончена. ' + 'Победил ' + this.fields[i][j]+ ' ' + this.name1;

            j = 0;

            //Проверка строк
            for (i = 0; i < this.size; i++) {
                for (m = 0; m < this.size; m++) {
                    if (this.fields[i][m] === this.fields[i][m + 1] && this.fields[i][m] !== '') j++;
                    if (j === this.size - 1 && this.turn === 'О')
                        return this.turn = 'Игра окончена. ' + 'Победил ' + this.fields[i][j]+ ' ' + this.name2;
                    if (j === this.size - 1 && this.turn === 'X')
                        return this.turn = 'Игра окончена. ' + 'Победил ' + this.fields[i][j]+ ' ' + this.name1;
                }
                j = 0;
            }

            j = 0;

            //Проверка столбцов
            for (i = 0; i < this.size; i++) {
                for (m = 0; m < this.size - 1; m++) {
                    if (this.fields[m][i] === this.fields[m + 1][i] && this.fields[m][i] !== "") j++;
                    if (j === this.size - 1 && this.turn === 'О')
                        return this.turn = 'Игра окончена. ' + 'Победил ' + this.fields[j][i]+ ' ' + this.name2;
                    if (j === this.size - 1 && this.turn === 'X')
                        return this.turn = 'Игра окончена. ' + 'Победил ' + this.fields[j][i]+ ' ' + this.name1;
                }
                j = 0;
            }
            //Проверка на ничью
            for (i = 0; i < this.size; i++) {
                for(m = 0; m < this.size; m++) {
                    if (this.fields[i][m] !== '') j++;
                }
            }
            if (j === this.size*this.size) return this.turn = 'Игра окончена. Ничья';
        },
        crossField: function (index1, index2) {
            if (this.turn === 'О') {
                if (this.fields[index1][index2] === '') {
                    this.fields[index1][index2] = "O";
                    this.crossed0 = !this.crossed0;
                    this.turn = "X";
                }
            } else {
                if (this.turn === "X") {
                    if (this.fields[index1][index2] === '') {
                        this.fields[index1][index2] = "X";
                        this.crossed1 = !this.crossed1;
                        this.turn = 'О';
                    }
                }
            }
            this.winsCounter()
        }
    }
});

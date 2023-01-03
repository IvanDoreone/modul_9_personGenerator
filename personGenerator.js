const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Светлана",
            "id_2": "Ольга",
            "id_3": "Наталья",
            "id_4": "Юлия",
            "id_5": "Анастасия",
            "id_6": "Евгения",
            "id_7": "Екатерина",
            "id_8": "Анна",
            "id_9": "Виктория",
            "id_10": "Снежана"
        }
    }`,
    occupationJson: `{
        "count": 10,
        "list": {     
            "id_1": "Фармацевт",
            "id_2": "Педиатр",
            "id_3": "Логопед",
            "id_4": "Уролог",
            "id_5": "Хирург",
            "id_6": "Психотерапевт",
            "id_7": "Травматолог",
            "id_8": "Окулист",
            "id_9": "Гинеколог",
            "id_10": "Патологоанатом"
        }
    }`,
    occupationMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Генеральный директор",
            "id_2": "Главный бухгалтер",
            "id_3": "Водитель",
            "id_4": "Медбрат",
            "id_5": "Санитар",
            "id_6": "Сетевой администратор",
            "id_7": "Систмный инженер",
            "id_8": "Начальник отдела кадров",
            "id_9": "Директор по рекламе",
            "id_10": "Охранник"
        }
    }`,


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function() {
        return ((this.randomIntNumber() == 1) ? this.GENDER_MALE : this.GENDER_FEMALE);
    },

    randomFirstName: function() {
        return this.randomValue(this.firstNameMaleJson);  
    },
    
    randomPatroNymic: function() {
        var a = (this.randomFirstName());
        var b = a.slice(-1);
        var c = (this.person.gender);

        if (b !== 'а' && b !== 'й') {
            return `${a}ов`;
        } else if (b === 'а' && c == 'Мужчина') {
            return `${(a).slice(0, -1)}`;
        } 
        //  Исключение для "Никитичны"
        else if (b === 'а' && c != 'Мужчина') {
            return `${(a).slice(0, -1)}ич`;
        } 
        else if (b === 'й') {
            return `${(a).slice(0, -1)}ев`;
        } 
    },
    
    randomFirstFemaleName: function() {   
        return this.randomValue(this.firstNameFemaleJson);
    },

    randomSurname: function() {    
        return this.randomValue(this.surnameJson);
    },
    randomOccupation: function() {
        return this.randomValue(this.occupationJson);
    },
    randomMaleOccupation: function() {
        return this.randomValue(this.occupationMaleJson);
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        ((this.person.gender == 'Мужчина') ? this.person.firstName = this.randomFirstName() : this.person.firstName = this.randomFirstFemaleName());
        ((this.person.gender == 'Мужчина') ? this.person.surName = this.randomSurname() : this.person.surName = `${this.randomSurname()}а`);
        ((this.person.gender == 'Мужчина') ? this.person.patroNymic = `${this.randomPatroNymic()}ич` : this.person.patroNymic = `${this.randomPatroNymic()}на`);
        this.person.year = this.randomIntNumber(2000,1965);  
        ((this.person.gender == 'Мужчина') ? this.person.occupation = this.randomMaleOccupation() : this.person.occupation = this.randomOccupation());
       
        return this.person;
    },
    
};
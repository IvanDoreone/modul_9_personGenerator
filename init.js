
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('birthYearOutput').innerText = `${initPerson.year} года рождения`;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('patroNymicOutput').innerText = initPerson.patroNymic;
    document.getElementById('occupationOutput').innerText = initPerson.occupation;
};
function start() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('birthYearOutput').innerText = `${initPerson.year} года рождения`;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('patroNymicOutput').innerText = initPerson.patroNymic;
    document.getElementById('occupationOutput').innerText = initPerson.occupation;
};


function reset() {
    document.getElementById('firstNameOutput').innerText = 'Имя';
    document.getElementById('surnameOutput').innerText = 'Фамилия';
    document.getElementById('birthYearOutput').innerText = 'год рождения';
    document.getElementById('genderOutput').innerText = 'пол';
    document.getElementById('patroNymicOutput').innerText = 'Отчество';
    document.getElementById('occupationOutput').innerText = 'профессия';
}

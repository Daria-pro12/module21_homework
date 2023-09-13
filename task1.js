const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentsNode = listNode.querySelectorAll("student");

const result = {
  list: []
};

studentsNode.forEach(function (element) {
  const studentName = element.querySelector("name");
  const studentFirst = studentName.querySelector("first").textContent;
  const studentSecond = studentName.querySelector("second").textContent;
  const studentAge = element.querySelector("age").textContent;
  const studentProf = element.querySelector("prof").textContent;
  const studentLang = studentName.getAttribute("lang");

  const student = {
    name: studentFirst + ' ' + studentSecond,
    age: studentAge,
    prof: studentProf,
    land: studentLang
  };

  result.list.push(student);
});

console.log(result);
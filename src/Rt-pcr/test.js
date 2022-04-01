import { submit } from "./submit.js";
import { search } from "./search.js";
import { cities,city,gender,genders } from "./option.js";
import { radio, radiobtn, radiobtn1 } from "./radiobtn.js";

document.getElementById('data').style.display = 'block';
document.getElementById('submit').onclick = function () {
  var table = document.getElementById('data');
  var row = table.insertRow(-1);
  var personName = row.insertCell(0);
  var aadhar = row.insertCell(1);
  var dob = row.insertCell(2);
  var city = row.insertCell(3);
  var dot = row.insertCell(4);
  var tot = row.insertCell(5);
  var res = row.insertCell(6);
  var labName = row.insertCell(7);
  var reportNo = row.insertCell(8);
  var gender = row.insertCell(9);
  personName.innerHTML = document.getElementById('pname').value;
  aadhar.innerHTML = document.getElementById('aadhar').value;
  dob.innerHTML = document.getElementById('dob').value;
  city.innerHTML = document.getElementById('city').value;
  dot.innerHTML = document.getElementById('dot').value;
  tot.innerHTML = document.getElementById('tot').value;
  res.innerHTML = radio;
  labName.innerHTML = document.getElementById('lname').value;
  reportNo.innerHTML = document.getElementById('repnum').value;
  gender.innerHTML = document.getElementById('gender').value;
  return false;
};
const btn = document.getElementById('submit');

btn.addEventListener('click', function handleClick(event) {
  event.preventDefault();

  const inputs = document.querySelectorAll(
    '#pname, #aadhar, #dob, #city, #dot, #tot, #rad-btn, #lname, #repnum, #gender'
  );

  inputs.forEach((input) => {
    input.value = '';
  });
});
function doSearch() {
  var searchText = document.getElementById('searchTerm').value;
  var targetTable = document.getElementById('data');
  var targetTableColCount;

  for (var rowIndex = 0; rowIndex < targetTable.rows.length; rowIndex++) {
    var rowData = '';

    if (rowIndex == 0) {
      targetTableColCount = targetTable.rows.item(rowIndex).cells.length;
      continue; //do not execute further code for header row.
    }
    var colIndex = 1;

    var cellText = '';
    cellText = targetTable.rows.item(rowIndex).cells.item(colIndex).textContent;

    rowData += cellText;

    if (rowData.indexOf(searchText) == -1)
      targetTable.rows.item(rowIndex).style.display = 'none';
    else targetTable.rows.item(rowIndex).style.display = 'table-row';
  }
}
function radioButton() {
  result();
};
radioButton();
function radioButton1() {
  result1();
};
radioButton1();
function searchCall() {
    doSearch();
};
searchCall();
function optionDisplay() {
  generateOptions(data);
};
optionDisplay();

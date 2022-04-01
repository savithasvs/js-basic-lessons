import { gender } from "./gender";
const gend =document.getElementById('gender');
gend.innerHTML = generateOptions(gender);
function generateOptions(data) {
    return Object.entries(data)
    .map (
        ([code, city]) =>
        `<option value="${code}">${code == 'You' ? " " : code}  ${city}</option>`
    )
    .join(" ");
}
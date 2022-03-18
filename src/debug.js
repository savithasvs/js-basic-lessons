const people = [
    { name: "john", cool: true, country: "Canada"},
    { name: "scott", cool: true, country: "USA"},
    { name: "Jimmy", cool: false, country: "Canada"}
];
people.forEach((person), index) => {
    console.table(index, person.name, person.cool, person.country);
});

function certify (name) {
    console.count (`certifying Doctor degree for ${name}`)
    return `Dr. ${name}`
}
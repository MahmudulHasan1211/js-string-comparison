var university = 'Green university  bangladesh'
console.log(university) // print mixed case
console.log(university.toUpperCase()) //print upper case
console.log(university.toLowerCase()) //print lower case

const subject = 'programminghero';
const course = 'Programminghero';

if (subject.toLowerCase === course.toLowerCase) //if we not use to lowercase both will different then the ans will be- No! both are different
{
    console.log('Yes! Both are the same course');
}
else {
    console.log('No! Both are different')
}
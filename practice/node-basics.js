const issue = {
 id: 'ISS-200',
 title: 'Example',
 priority: 'Low'
};
const jsonText = JSON.stringify(issue);
const objectAgain = JSON.parse(jsonText);
console.log(jsonText);
console.log(objectAgain.title);

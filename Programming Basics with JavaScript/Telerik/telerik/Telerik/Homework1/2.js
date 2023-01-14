let input = ['Telerik Academy',
'31 Al.Malinov,Sofia',
'+359 888 55 55 555',
'(no fax)',
'http://telerikacademy.com',
'Martin Veshev (age: 25, tel. +359 2 981 981)',];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let companyName = gets();
let companyAddres = gets();
let phoneNumber = gets();
let faxNumber = gets();
let webSite = gets();
let Manager = gets();

print('Company name: ' + companyName);
print('Address: ' + companyAddres);
print('Tel: ' + phoneNumber);
print('Fax: ' + faxNumber);
print('Web site: ' + webSite);
print('Manager: ' + Manager);
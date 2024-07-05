var firstname = "Santhosh";
var lastname = "Nimmala";
var fullname = firstname + lastname;
var skills = "HTML, CSS, JS, React, Redux";
var address = "Hyderabad";
var designation = "Software Engineer";
var company = "Zakboys";
var salary = 48000;

var output = `${firstname} ${lastname} living near ${address} and working has ${designation} for ${company} and earning around ${salary * 12} per year`

console.log(output);

//Salary Calculations
var basicSalery = 660000;

var pfContributionRatePercentage = 0.12;   //    12/100

var otherAllowancesPercentage = 0.20;    //   20/100

var pfContributionOfEmployee = basicSalery * pfContributionRatePercentage; 

var pfContributionOfEmployer = basicSalery * pfContributionRatePercentage;

var otherAllowances = basicSalery * otherAllowancesPercentage;

var grossSalery = basicSalery + otherAllowances;

var totalDeductions = pfContributionOfEmployee + pfContributionOfEmployer;

var takeHomeSalery = grossSalery - totalDeductions;

console.log(takeHomeSalery);






//declaring function tests with parameters test1 and test2
function tests(test1, test2) {
  //declaring variable greater and assigning it to the an operation to check if test2 is greater than test1, if true then return test1 otherwise return test2
  let greater = test2 > test1 ? test1 : test2;
  //result of the operation of variable greater is returned and can be accessed outside the function
  return greater;
}

//declaring function coursework with parameter cswork
function coursework(cswork) {
  //invoking the function test with arguments in the calculation of variable coursework
  let coursework = cswork + tests(80, 80);
  console.log(coursework);
  //the result of variable coursework is returned and can be accessed outside the function
  return coursework;
}

//declaring function avg with parameter a
function avg(a) {
  //invoking function course work with argument 90 and assigned to variable avg
  let avg = coursework(90) / a;
  //variable avg is returned and can be accessed outside function avg
  return avg;
}

//declaring function crsmark with parameter a
function crsmark(a) {
  //invoking function avg with argument 2 in the operation for variable exm
  let exm = avg(2) * (a / 100);
  //returning variable exm so that it can be accessed remotely
  return exm;
}

//declaring function exam with parameter a
function exam(a) {
  let fexam = (60 / 100) * a;
  //returning variable fexam so that it can be accessed outside the function
  return fexam;
}

//declaring function fnal
function fnal() {
  //invoking function exam with argument 75 and function crsmark with argument 40
  let fmark = exam(75) + crsmark(40);
  console.log(fmark);
}

//invoking function fnal to enable us print the value of fmark in the console
fnal();

/**
​after reading though your code, there was a missing closing brace for function avg
i had deleted all your code and rewrote it since it kept on logging an error of SyntaxError: Invalid or unexpected token, even when your syntax was correct
final answers were 170,79
link to github repo(https://github.com/HassanBahati/exrcse2)
**/

/*
Steps já emplementados

*/ 


Given(/^eu acesso a Calculadora$/, () => {
    return true;
});

When(/^irei realizar a "([^"]*)"$/, (args1) => {
    console.log(args1);
    return true;
});

When(/^informo os valores "([^"]*)" e "([^"]*)"$/, (args1, args2) => {
    console.log(args1, args2);
    return true;
});

When(/^finalizo o calculo$/, () => {
    return true;
});

Then(/^e obtenho o resultado "([^"]*)"$/, (args1) => {
    console.log(args1);
    return true;
});

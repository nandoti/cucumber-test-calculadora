
Feature: Calculadora

    O usuário irá utilizar a calculadora para
    conferir suas contas

    Scenario: Calcular o somatório dos valores
        Given eu acesso a Calculadora
        And irei realizar a "soma"
        When informo os valores "10" e "20"
        And finalizo o calculo
        Then e obtenho o resultado "30"


using System;

// Lista de exercícios
// 1. Peça 2 números para o usuário e faça uma operação para descobrir qual dos 2 números é maior e exiba o resultado na tela.
// 2. Peça a idade do usuário e faça um operação para descobrir se ele é maior de idade ou menor de idade e exiba na tela. 
// 3. Peça ao usuário 3 notas e faça a média dessas 3 notas e exiba se ele passou (nota maior ou igual a 7), se ele foi pra recuperação (nota entre 5 e 6,9) ou se foi reprovado (abaixo de 4).
// 4. Peça um número ao usuário e exiba se esse número é par ou ímpar e exiba o resultado.
// 5. Faça a tabuada (+ ou - ou *) de um número inteiro de 1 a 10.

public class Program
{
    public static void Main(string[] args)
    {
        QuestionOne();
    }

    public static void QuestionOne()
    {
        print("Write two numbers (1/2): ");
        int numberOne = readInt();
        print("Write two numbers (2/2): ");
        int numberTwo = readInt();

        string biggerNumber = (numberOne > numberTwo) ?
            $"number one ({numberOne}) is bigger than the number two ({numberTwo})" : (numberTwo > numberOne) ? 
            $"number two ({numberTwo}) is bigger than the number one ({numberOne})" : $"number two ({numberTwo}) is equals at number one ({numberOne})";

        println(biggerNumber);
    }

    // Methods to increase the efficienty and readbillty
    public static Action<string> print => (message) => Console.Write(message);
    public static Action<string> println => (message) => Console.WriteLine(message);
    public static Func<string> read => () => Console.ReadLine();
    public static Func<int> readInt => () => int.Parse(Console.ReadLine());
    public static Func<byte> readByte => () => Byte.Parse(Console.ReadLine());
    public static Func<double> readDouble => () => Double.Parse(Console.ReadLine());
}

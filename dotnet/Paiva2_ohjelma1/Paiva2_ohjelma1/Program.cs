using System;
using System.Security;

namespace Paiva2_ohjelma1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello.");
            Console.WriteLine("What is your name?");
            string sName = Console.ReadLine();
            Console.WriteLine("Hello {0}!", sName);
            Console.WriteLine("Can you give me a number?");
            int iFirst = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("And then another one?");
            int iSecond = Convert.ToInt32(Console.ReadLine());
            int iAdd = iFirst + iSecond;
            //Kommentti
            Console.WriteLine("If we add {0} and {1} together we get " + iAdd + "!", iFirst, iSecond);
            /* Enempi kommenttia
                */
        }
    }
}

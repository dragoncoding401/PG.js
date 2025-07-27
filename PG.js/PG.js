const PG = (function(){

    const LowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const UpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const NumberIndex = '0123456789';
    const Symbols = '!@#$%^&*';

   return{

    Generate: function (length = 12, useUpper = true, useNumbers = true, useSymbols = true){

        let allChars = LowerCase;

        if(useUpper)
        {
            allChars += UpperCase;
        }

        if(useNumbers)
        {
            allChars += NumberIndex;
        }

        if(useSymbols)
        {
            allChars += Symbols;
        }

        let Password = "";

        for(let i = 0; i < length; i++)
        {
            Password += allChars[Math.floor(Math.random() * allChars.length)];

        }

        return Password.toString();
    },

    Passtest: function (password)
    {

       let score = 0;

       if(password.length >= 8)
       {
           score++;
       }

       if(/[0-9]/.test(password))
       {
           score++;
       }

       if(/[A-Z]/.test(password))
       {
           score++;
       }

       if(/[!-*]/.test(password))
       {
           score++
       }

       const levels = ["Weak", "Medium", "Good", "Strong", "Very Strong"];
       
        return levels[score].toString();
    },

    Passeasy: function (numberText = 8)
    {

        let easyText = ["Apple","Coding","Coder","User","MR","DG","Micro","Hello", "Blue", "Red", "Orange", "Sky", "Moon", "Ocean", "Sea", "5225", "52485", "5555"];
        let EasyPass = '';

        for(let i = 0; i < numberText; i++)
        {
            EasyPass +=  '_' + easyText[Math.floor(Math.random() * easyText.length)];
        }

        return EasyPass.toString();

    },

    Passcode: function (text)
    {
        if(text !== '')
        {
            return btoa(unescape(encodeURIComponent(text))).toString();
        }
    },

    Passencode: function (text)
    {
        if(text !== '')
        {
            return decodeURIComponent(escape(atob(text))).toString();
        }
    }

}
})();
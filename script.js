document.addEventListener("DOMContentLoaded",function()
{

   var bancoPergunta = document.querySelector('.bancoPergunta');
   var contadorPontos = document.getElementById("telaRespostas");
   var contadorPontos = document.getElementById("contador");
   var telaPlay = document.getElementById("perguntaPlay");
   var pontosFinais = document.getElementById("quantasAcertou");
   var numPergunta=0;
   var certas =0;
   var certaTest=0;


   var button3 = document.getElementById("azul");
   var button4 = document.getElementById("verde");
   var button2 = document.getElementById("vermelho");
   var button = document.getElementById("amarelo");

   
   contadorPontos.innerHTML = numPergunta + "°";
   certasHTML.innerHTML = certas+ "/10";
   amarelo.innerHTML =  "Click to start!";
   vermelho.innerHTML =  "Click to start!";
   azul.innerHTML =  "Click to start!";
   verde.innerHTML = "Click to start!";


   var APIinfo = async function (categoria) 
   {
      var perguntas = await fetch(`https://opentdb.com/api.php?amount=10&category=${categoria}&type=multiple`);
      var perguntasJson = await perguntas.json();
      return perguntasJson;
   };

   var APIconcret = async function(categoria) 
   {
   var perguntasJson = await APIinfo(categoria);
 
   


   while(num1==num2 || num2==num3 || num3==num1 )
   {
      var num1 = Math.floor(Math.random() * 3);  
      var num2 = Math.floor(Math.random() * 3);  
      var num3 = Math.floor(Math.random() * 3);  
   };
   
   telaRespostas.addEventListener("click", function()
   {

      numPergunta++;
      contadorPontos.innerHTML = numPergunta + "°";
      certasHTML.innerHTML = certas+ "/10";
      certaTest=certas;
     
      if(numPergunta==10 && certas==10)
      {
         document.getElementById('parabens').style.zIndex="100";
         pontosFinais.innerHTML = certas+ "/10";
      }
      else if(numPergunta==10)
      {
         document.getElementById('parabens').style.zIndex="100";
         pontosFinais.innerHTML = "You got right: " + certas + "/10";
      };
     
     
      var certa2=0;
      
      if(certa2==0)
      {
         while (certa2==0)
         {
            var certa2 = Math.floor(Math.random() * 5); 
            console.log('certaaaaaaa' + certa2);
         };
      };

      bancoPergunta.innerHTML =  perguntasJson.results[numPergunta].question;

      
      if(certa2 == 1)
      {
         amarelo.addEventListener("click", function()
         {
            certas+=1;
            if (certas>(certaTest+1))
            {
               certas = certaTest+1;
            };
            certasHTML.innerHTML = certas+ "/10";
            console.log("ACERTOAA");
            certa2=0;
         }
         );
            amarelo.innerHTML =  perguntasJson.results[numPergunta].correct_answer;
            vermelho.innerHTML =  perguntasJson.results[numPergunta].incorrect_answers[num1];
            azul.innerHTML =  perguntasJson.results[numPergunta].incorrect_answers[num2];
            verde.innerHTML =  perguntasJson.results[numPergunta].incorrect_answers[num3];
         }
      else if (certa2 == 2)
      {
         vermelho.addEventListener("click", function()
         {
            certas+=1;
            if (certas>(certaTest+1))
            {
               certas = certaTest+1;
            };
            certasHTML.innerHTML = certas + "/10";
            console.log("ACERTOVV");
            certa2=0;
         }
         );
            vermelho.innerHTML =  perguntasJson.results[numPergunta].correct_answer;
            amarelo.innerHTML =  perguntasJson.results[numPergunta].incorrect_answers[num1];
            azul.innerHTML =  perguntasJson.results[ponumPerguntantos].incorrect_answers[num2];
            verde.innerHTML =  perguntasJson.results[numPergunta].incorrect_answers[num3];
         }
      else if(certa2 == 3)
      {
         azul.addEventListener("click", function() 
         {
            certas+=1;
            if (certas>(certaTest+1))
            {
               certas = certaTest+1;
            };
            certasHTML.innerHTML = certas+ "/10";
            console.log(certas);
            certa2=0;
            console.log("ACERTOAzz");
         }
         );
            azul.innerHTML =  perguntasJson.results[numPergunta].correct_answer;
            vermelho.innerHTML =  perguntasJson.results[numPergunta].incorrect_answers[num1];
            amarelo.innerHTML =  perguntasJson.results[numPergunta].incorrect_answers[num2];
            verde.innerHTML =  perguntasJson.results[numPergunta].incorrect_answers[num3];
         }
      else if(certa2 == 4)
      {
         verde.addEventListener("click", function()
         {
            certas+=1;
            if (certas>(certaTest+1))
            {
               certas = certaTest+1;
            };
            certasHTML.innerHTML = certas + "/10";
            console.log("ACERTOAvddd");
            certa2=0;
         }
         );
            verde.innerHTML =  perguntasJson.results[numPergunta].correct_answer;
            vermelho.innerHTML =  perguntasJson.results[numPergunta].incorrect_answers[num1];
            azul.innerHTML =  perguntasJson.results[numPergunta].incorrect_answers[num2];
            amarelo.innerHTML =  perguntasJson.results[numPergunta].incorrect_answers[num3];
         };
           
        
        
      });
      }
   APIconcret('0');
});



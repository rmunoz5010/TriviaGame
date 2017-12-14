var questions= ["The Knights who say Ni wanted...", "The Holy Hand Grenade was used to kill what animal?", "It's just...", "What is the First Question asked to pass the bridge?"]




function startGame(){
    var htmlAnswerArray = ["<button type='button' class='btn btn-primary btn-lg btn-block' id='answer0'></button>","<button type='button' class='btn btn-primary btn-lg btn-block' id='answer1'></button>", "<button type='button' class='btn btn-primary btn-lg btn-block' id='answer2'></button>", "<button type='button' class='btn btn-primary btn-lg btn-block' id='answer3'></button>"]
    var correctAnswer = 0;
    var incorrectAnswer= 0;
    $("#startButton").on("click", function(){
        firstQuestion();
        $("#openMessage").html("");
    });

    function firstQuestion(){
        var number = 30;
        correctAnswer=0;
        incorrectAnswer=0;
        $("#answers").html("");
        //  Variable that will hold our interval ID when we execute
        //  the "run" function
        var intervalId;
        
        //  Run the function as the quiz has begun
        
        //  The run function sets an interval
        //  that runs the decrement function once a second.
        function run() {
            intervalId = setInterval(decrement, 1000);
        }
        
        //  The decrement function.
        function decrement() {
            //  Decrease number by one.
            number--;
            // Show the number in the #show-number tag.
            $("#timeLeft").html(number);
        
        
              //  Once number hits zero...
            if (number === 0) {
                //  ...run the stop function.
            stop();
            $(".jumbotron").css("background-color", "red");
            $("#answers").html("<p> The Knights who say Ni requests a shrubbery to allow someone to pass through. </p>");
            $("#question").html("TIME UP");    
            $("#nextQ1").html("<button class='btn btn-default' type='submit'id='nextQ1'>NEXT QUESTION</button>");
            $("#image").html("<img src='assets/images/ni.gif'></img>");      
            incorrectAnswer++;          
        
            }
        }
        
            //  The stop function
        function stop() {
        
            //  Clears our intervalId
            //  We just pass the name of the interval
            //  to the clearInterval function.
            clearInterval(intervalId);
        }
        run();
        $("#question").html(questions[0]) 
        var answers= ["A Shrubbery", "Money", "Pigs", "Nothing at All!"];
        for(var i = 0; i < answers.length; i++){
            $("#answers").append(htmlAnswerArray[i]);
            $("#answer"+[i]).html(answers[i]);
        }

        $("#answer0").on("click", function(){
            stop();
            $("timeLeft").html("");
            $(".jumbotron").css("background-color", "green");
            $("#answers").html("<p> The Knights who say Ni requests a shrubbery to allow someone to pass through. </p>");
            $("#question").html("CORRECT!");
            $("#nextQ1").html("<button class='btn btn-default' type='submit'id='nextQ'>NEXT QUESTION</button>");
            $("#image").html("<img src='assets/images/ni.gif'></img>");      
            correctAnswer++;

        });

        $("#answer1").on("click", function(){
            stop();
            $("timeLeft").html("");
            $(".jumbotron").css("background-color", "red");
            $("#answers").html("<p> The Knights who say Ni requests a shrubbery to allow someone to pass through. </p>");
            $("#question").html("INCORRECT!");
            $("#nextQ1").html("<button class='btn btn-default' type='submit'id='nextQ'>NEXT QUESTION</button>");
            $("#image").html("<img src='assets/images/ni.gif'></img>");      
            incorrectAnswer++;

        });

        $("#answer2").on("click", function(){
            stop();
            $("timeLeft").html("")
            $(".jumbotron").css("background-color", "red");
            $("#answers").html("<p> The Knights who say Ni requests a shrubbery to allow someone to pass through. </p>");
            $("#question").html("INCORRECT!");
            $("#nextQ1").html("<button class='btn btn-default' type='submit'id='nextQ'>NEXT QUESTION</button>");
            $("#image").html("<img src='assets/images/ni.gif'></img>");      

            incorrectAnswer++;

        });

        $("#answer3").on("click", function(){
            stop();
            $("timeLeft").html("")
            $(".jumbotron").css("background-color", "red");
            $("#answers").html("<p> The Knights who say Ni requests a shrubbery to allow someone to pass through. </p>");
            $("#question").html("INCORRECT!");
            $("#nextQ1").html("<button class='btn btn-default' type='submit'id='nextQ'>NEXT QUESTION</button>");
            $("#image").html("<img src='assets/images/ni.gif'></img>");      
            incorrectAnswer++;
            

        });

    }
    $("#nextQ1").on("click", function(){
        question2();
    });

    function question2(){
        var number = 30;
        $(".jumbotron").css("background-color", "lightblue");
        $("#nextQ1").html(" ");
        $("#answers").html(" ");
        $("#image").html(" ");
        //  Variable that will hold our interval ID when we execute
        //  the "run" function
        var intervalId;
        
        //  Run the function as the quiz has begun
        
        //  The run function sets an interval
        //  that runs the decrement function once a second.
        function run() {
            intervalId = setInterval(decrement, 1000);
        }
        
        //  The decrement function.
        function decrement() {
            //  Decrease number by one.
            number--;
            // Show the number in the #show-number tag.
            $("#timeLeft").html(number);
        
        
              //  Once number hits zero...
            if (number === 0) {
                //  ...run the stop function.
            stop();
            $(".jumbotron").css("background-color", "red");
            $("#answers").html("<p> In order to pass onto the Holy Grail, the Holy Hand Grenade was used to kill the Killer Rabbit. </p>");
            $("#question").html("TIME UP");    
            $("#nextQ2").html("<button class='btn btn-default' type='submit'id='nextQ'>NEXT QUESTION</button>");
            $("#image").html("<img src='assets/images/handGrenade.gif'></img>")
            
            incorrectAnswer++;          
        
            }
        }
        
            //  The stop function
        function stop() {
        
            //  Clears our intervalId
            //  We just pass the name of the interval
            //  to the clearInterval function.
            clearInterval(intervalId);
        }
        run();
        $("#question").html(questions[1]) 
        var answers= ["The Killer Rabbit", "The Black Knight", "Satan Himself", "The French Prince of Bel-Air"];
        for(var i = 0; i < answers.length; i++){
            $("#answers").append(htmlAnswerArray[i]);
            $("#answer"+[i]).html(answers[i]);
        }

        $("#answer0").on("click", function(){
            stop();
            $("timeLeft").html("");
            $(".jumbotron").css("background-color", "green");
            $("#answers").html("<p> In order to pass onto the Holy Grail, the Holy Hand Grenade was used to kill the Killer Rabbit. </p>");
            $("#question").html("CORRECT!");
            $("#nextQ2").html("<button class='btn btn-default' type='submit'id='nextQ'>NEXT QUESTION</button>");
            $("#image").html("<img src='assets/images/handGrenade.gif'></img>")
            
            correctAnswer++;

        });

        $("#answer1").on("click", function(){
            stop();
            $("timeLeft").html("")
            $(".jumbotron").css("background-color", "red");
            $("#answers").html("<p> In order to pass onto the Holy Grail, the Holy Hand Grenade was used to kill the Killer Rabbit. </p>");
            $("#question").html("INCORRECT!");
            $("#nextQ2").html("<button class='btn btn-default' type='submit'id='nextQ'>NEXT QUESTION</button>");
            $("#image").html("<img src='assets/images/handGrenade.gif'></img>")
            
            incorrectAnswer++;

        });

        $("#answer2").on("click", function(){
            stop();
            $("timeLeft").html("")
            $(".jumbotron").css("background-color", "red");
            $("#answers").html("<p> In order to pass onto the Holy Grail, the Holy Hand Grenade was used to kill the Killer Rabbit. </p>")
            $("#question").html("INCORRECT!")
            $("#nextQ2").html("<button class='btn btn-default' type='submit'id='nextQ'>NEXT QUESTION</button>");
            $("#image").html("<img src='assets/images/handGrenade.gif'></img>")
            
            incorrectAnswer++;

        });

        $("#answer3").on("click", function(){
            stop();
            $("timeLeft").html("")
            $(".jumbotron").css("background-color", "red");
            $("#answers").html("<p> In order to pass onto the Holy Grail, the Holy Hand Grenade was used to kill the Killer Rabbit. </p>")
            $("#question").html("INCORRECT!");
            $("#nextQ2").html("<button class='btn btn-default' type='submit'id='nextQ'>NEXT QUESTION</button>");
            $("#image").html("<img src='assets/images/handGrenade.gif'></img>")
            incorrectAnswer++;

        });

    }
    $("#nextQ2").on("click", function(){
        question3();
    });
    function question3(){
        var number = 30;
        $(".jumbotron").css("background-color", "lightblue");
        $("#nextQ2").html(" ");
        $("#answers").html(" ");
        $("#image").html(" ");
        //  Variable that will hold our interval ID when we execute
        //  the "run" function
        var intervalId;
        
        //  Run the function as the quiz has begun
        
        //  The run function sets an interval
        //  that runs the decrement function once a second.
        function run() {
            intervalId = setInterval(decrement, 1000);
        }
        
        //  The decrement function.
        function decrement() {
            //  Decrease number by one.
            number--;
            // Show the number in the #show-number tag.
            $("#timeLeft").html(number);
        
        
              //  Once number hits zero...
            if (number === 0) {
                //  ...run the stop function.
            stop();
            $(".jumbotron").css("background-color", "red");
            $("#answers").html("<p> It was just a Flesh Wound! </p>");
            $("#question").html("TIME UP");
            $("#image").html("<img src='assets/images/fleshwound.gif'></img>")
            $("#nextQ3").html("<button class='btn btn-default' type='submit'id='nextQ'>NEXT QUESTION</button>");
            incorrectAnswer++;          
        
            }
        }
        
            //  The stop function
        function stop() {
        
            //  Clears our intervalId
            //  We just pass the name of the interval
            //  to the clearInterval function.
            clearInterval(intervalId);
        }
        run();
        $("#question").html(questions[2]) 
        var answers= ["another Knight who says Ni!", "Cheeto Orange Power on your Fingers", "Another For Loop", " A Flesh Wound"];
        for(var i = 0; i < answers.length; i++){
            $("#answers").append(htmlAnswerArray[i]);
            $("#answer"+[i]).html(answers[i]);
        }

        $("#answer0").on("click", function(){
            stop();
            $("timeLeft").html("");
            $(".jumbotron").css("background-color", "red");
            $("#image").html("<img src='assets/images/fleshwound.gif'></img>")
            $("#answers").html("<p> It was just a flesh wound! </p>");
            $("#question").html("INCORRECT!");
            $("#nextQ3").html("<button class='btn btn-default' type='submit'id='nextQ'>NEXT QUESTION</button>");
            incorrectAnswer++;

        });

        $("#answer1").on("click", function(){
            stop();
            $("timeLeft").html("")
            $(".jumbotron").css("background-color", "red");
            $("#image").html("<img src='assets/images/fleshwound.gif'></img>")
            $("#answers").html("<p> It was just a flesh wound! </p>");
            $("#question").html("INCORRECT!");
            $("#nextQ3").html("<button class='btn btn-default' type='submit'id='nextQ'>NEXT QUESTION</button>");
            incorrectAnswer++;

        });

        $("#answer2").on("click", function(){
            stop();
            $("timeLeft").html("")
            $(".jumbotron").css("background-color", "red");
            $("#image").html("<img src='assets/images/fleshwound.gif'></img>")
            $("#answers").html("<p> It was just a flesh wound! </p>")
            $("#question").html("INCORRECT!")
            $("#nextQ3").html("<button class='btn btn-default' type='submit'id='nextQ'>NEXT QUESTION</button>");
            incorrectAnswer++;

        });

        $("#answer3").on("click", function(){
            stop();
            $("timeLeft").html("")
            $(".jumbotron").css("background-color", "green");
            $("#image").html("<img src='assets/images/fleshwound.gif'></img>")
            $("#answers").html("<p> It was just a flesh wound! </p>")
            $("#question").html("CORRECT!");
            $("#nextQ3").html("<button class='btn btn-default' type='submit'id='nextQ'>NEXT QUESTION</button>");
            correctAnswer++;

        });

    }
    $("#nextQ3").on("click", function(){
        question4();
    });
    function question4(){
        var number = 30;
        $(".jumbotron").css("background-color", "lightblue");
        $("#nextQ3").html(" ");
        $("#answers").html(" ");
        $("#image").html(" ");
        //  Variable that will hold our interval ID when we execute
        //  the "run" function
        var intervalId;
        
        //  Run the function as the quiz has begun
        
        //  The run function sets an interval
        //  that runs the decrement function once a second.
        function run() {
            intervalId = setInterval(decrement, 1000);
        }
        
        //  The decrement function.
        function decrement() {
            //  Decrease number by one.
            number--;
            // Show the number in the #show-number tag.
            $("#timeLeft").html(number);
        
        
              //  Once number hits zero...
            if (number === 0) {
                //  ...run the stop function.
            stop();
            $(".jumbotron").css("background-color", "red");
            $("#answers").html("<p> WHAT....... IS YOUR NAME!? </p>");
            $("#question").html("TIME UP");
            $("#image").html("<img src='assets/images/name.gif'></img>")
            $("#nextQ4").html("<button class='btn btn-default' type='submit'id='nextQ'>RESULTS</button>");
            incorrectAnswer++;          
        
            }
        }
        
            //  The stop function
        function stop() {
        
            //  Clears our intervalId
            //  We just pass the name of the interval
            //  to the clearInterval function.
            clearInterval(intervalId);
        }
        run();
        $("#question").html(questions[3]) 
        var answers= ["What is the Meaning of Life?", "What is Null Pointer Error?", "What is your quest?", "What is your name?"];
        for(var i = 0; i < answers.length; i++){
            $("#answers").append(htmlAnswerArray[i]);
            $("#answer"+[i]).html(answers[i]);
        }

        $("#answer0").on("click", function(){
            stop();
            $("timeLeft").html("");
            $(".jumbotron").css("background-color", "red");
            $("#image").html("<img src='assets/images/name.gif'></img>")
            $("#answers").html("<p>WHAT....... IS YOUR NAME!? </p>");
            $("#question").html("INCORRECT!");
            $("#nextQ4").html("<button class='btn btn-default' type='submit'id='nextQ'>RESULTS</button>");
            incorrectAnswer++;

        });

        $("#answer1").on("click", function(){
            stop();
            $("timeLeft").html("")
            $(".jumbotron").css("background-color", "red");
            $("#image").html("<img src='assets/images/name.gif'></img>")
            $("#answers").html("<p> WHAT....... IS YOUR NAME!? </p>");
            $("#question").html("INCORRECT!");
            $("#nextQ4").html("<button class='btn btn-default' type='submit'id='nextQ'>RESULTS</button>");
            incorrectAnswer++;

        });

        $("#answer2").on("click", function(){
            stop();
            $("timeLeft").html("")
            $(".jumbotron").css("background-color", "red");
            $("#image").html("<img src='assets/images/name.gif'></img>")
            $("#answers").html("<p> WHAT....... IS YOUR NAME!? </p>")
            $("#question").html("INCORRECT!")
            $("#nextQ4").html("<button class='btn btn-default' type='submit'id='nextQ'>RESULTS</button>");
            incorrectAnswer++;

        });

        $("#answer3").on("click", function(){
            stop();
            $("timeLeft").html("")
            $(".jumbotron").css("background-color", "green");
            $("#image").html("<img src='assets/images/name.gif'></img>")
            $("#answers").html("<p> WHAT....... IS YOUR NAME!? </p>")
            $("#question").html("CORRECT!");
            $("#nextQ4").html("<button class='btn btn-default' type='submit'id='nextQ'>RESULTS</button>");
            correctAnswer++;

        });
    }
    $("#nextQ4").on("click", function(){
        results();
    });
    function results(){
        $(".jumbotron").css("background-color", "lightblue");
        $("#nextQ4").html("");
        $("timeLeft").html(" ");
        $("#answers").html(" ");
        $("#question").html(" GAME OVER ");
        $("#answers").append("<p> Correct Answers: " + correctAnswer + "</p>");
        $("#answers").append("<p> Incorrect Answers: " + incorrectAnswer + "</p>");
        $("#image").html(" ");
        $("#tryAgain").html("<button class='btn btn-default' type='submit'id='nextQ'>TRY AGAIN?</button>");
    }
    $("#tryAgain").on("click", function(){
        firstQuestion();
        $("#tryAgain").html("");
    })
}
    


startGame();
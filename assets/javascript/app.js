var questions= ["The Knights who say Ni wanted...", "The Holy Hand Grenade was used to kill what animal?", "It's just a..."]




function startGame(){
    var htmlAnswerArray = ["<button type='button' class='btn btn-primary btn-lg btn-block' id='answer0'></button>","<button type='button' class='btn btn-primary btn-lg btn-block' id='answer1'></button>", "<button type='button' class='btn btn-primary btn-lg btn-block' id='answer2'></button>", "<button type='button' class='btn btn-primary btn-lg btn-block' id='answer3'></button>"]
    var correctAnswers = 0;
    var incorrectAnswer= 0;
    $("#startButton").on("click", function(){
        firstQuestion();
        $("#openMessage").html("");
    });

    function firstQuestion(){
        var number = 30;
        
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
            correctAnswer++;

        });

        $("#answer1").on("click", function(){
            stop();
            $("timeLeft").html("");
            $(".jumbotron").css("background-color", "red");
            $("#answers").html("<p> The Knights who say Ni requests a shrubbery to allow someone to pass through. </p>");
            $("#question").html("INCORRECT!");
            $("#nextQ1").html("<button class='btn btn-default' type='submit'id='nextQ'>NEXT QUESTION</button>");
            incorrectAnswer++;

        });

        $("#answer2").on("click", function(){
            stop();
            $("timeLeft").html("")
            $(".jumbotron").css("background-color", "red");
            $("#answers").html("<p> The Knights who say Ni requests a shrubbery to allow someone to pass through. </p>");
            $("#question").html("INCORRECT!");
            $("#nextQ1").html("<button class='btn btn-default' type='submit'id='nextQ'>NEXT QUESTION</button>");
            incorrectAnswer++;

        });

        $("#answer3").on("click", function(){
            stop();
            $("timeLeft").html("")
            $(".jumbotron").css("background-color", "red");
            $("#answers").html("<p> The Knights who say Ni requests a shrubbery to allow someone to pass through. </p>");
            $("#question").html("INCORRECT!");
            $("#nextQ1").html("<button class='btn btn-default' type='submit'id='nextQ'>NEXT QUESTION</button>");
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
        $("#answers").html(" ")
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
            correctAnswer++;

        });

        $("#answer1").on("click", function(){
            stop();
            $("timeLeft").html("")
            $(".jumbotron").css("background-color", "red");
            $("#answers").html("<p> In order to pass onto the Holy Grail, the Holy Hand Grenade was used to kill the Killer Rabbit. </p>");
            $("#question").html("INCORRECT!");
            $("#nextQ2").html("<button class='btn btn-default' type='submit'id='nextQ'>NEXT QUESTION</button>");
            incorrectAnswer++;

        });

        $("#answer2").on("click", function(){
            stop();
            $("timeLeft").html("")
            $(".jumbotron").css("background-color", "red");
            $("#answers").html("<p> In order to pass onto the Holy Grail, the Holy Hand Grenade was used to kill the Killer Rabbit. </p>")
            $("#question").html("INCORRECT!")
            $("#nextQ2").html("<button class='btn btn-default' type='submit'id='nextQ'>NEXT QUESTION</button>");
            incorrectAnswer++;

        });

        $("#answer3").on("click", function(){
            stop();
            $("timeLeft").html("")
            $(".jumbotron").css("background-color", "red");
            $("#answers").html("<p> In order to pass onto the Holy Grail, the Holy Hand Grenade was used to kill the Killer Rabbit. </p>")
            $("#question").html("INCORRECT!");
            $("#nextQ2").html("<button class='btn btn-default' type='submit'id='nextQ'>NEXT QUESTION</button>");
            incorrectAnswer++;

        });

    }




    
}

startGame();



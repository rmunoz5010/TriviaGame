var questions= ["The Knights who say Ni wanted...", "The Holy Hand Grenade was used to kill what animal?", "It's just a..."]




function startGame(){
    var htmlAnswerArray = ["<button type='button' class='btn btn-primary btn-lg btn-block' id='answer0'></button>","<button type='button' class='btn btn-primary btn-lg btn-block' id='answer1'></button>", "<button type='button' class='btn btn-primary btn-lg btn-block' id='answer2'></button>", "<button type='button' class='btn btn-primary btn-lg btn-block' id='answer3'></button>"]

    function firstQuestion(){
        $("#question").html(questions[0]) 
        var answers= ["A Shrubbery", "Money", "Pigs", "Nothing at All!"];
        for(var i = 0; i < answers.length; i++){
            $("#answers").append(htmlAnswerArray[i]);
            $("#answer"+[i]).html(answers[i]);
        }

        $("#answer0").on("click", function(){
            $(".jumbotron").css("background-color", "green");
            $("#answers").html("<p> The Knights who say Ni requests a shrubbery to allow someone to pass through. </p>")
            $("#question").html("CORRECT!")

        });

        $("#answer1").on("click", function(){
            $(".jumbotron").css("background-color", "red");
            $("#answers").html("<p> The Knights who say Ni requests a shrubbery to allow someone to pass through. </p>")
            $("#question").html("INCORRECT!")

        });

        $("#answer2").on("click", function(){
            $(".jumbotron").css("background-color", "red");
            $("#answers").html("<p> The Knights who say Ni requests a shrubbery to allow someone to pass through. </p>")
            $("#question").html("INCORRECT!")

        });

        $("#answer3").on("click", function(){
            $(".jumbotron").css("background-color", "red");
            $("#answers").html("<p> The Knights who say Ni requests a shrubbery to allow someone to pass through. </p>")
            $("#question").html("INCORRECT!")

        });
        
    }




    firstQuestion();
}

startGame();



class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option Number");

 



    this.button = createButton('Submit');
    this.question = createElement('H3');
    this.option1 = createElement('H4');
    this.option2 = createElement('H5');
    this.option3 = createElement('H6');
    this.option4 = createElement('H7');
    this.message = createElement("H2");





    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box


    this.message.html("Thank You, Your Answer Has Been Submitted"); 
    this.message.position(350, 350);


  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
      this.question.position(150, 80);
      this.option1.html("1: Everyone " ); 
      this.option1.position(150, 100); 
      this.option2.html("2: Envelope" ); 
      this.option2.position(150, 120); 
      this.option3.html("3: Estimate " ); 
      this.option3.position(150, 140); 
      this.option4.html("4: Example" ); 
      this.option4.position(150, 160);



    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{

    })


  }
}

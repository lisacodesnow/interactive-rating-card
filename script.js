// JavaScript Document

const button = document.querySelectorAll(".button_1"); //because its a list with the same class I have to use querySelectorAll so it becomes a list. Because its a list I don't have to put the buttons in an array
const frontPage = document.querySelector(".front_content-wrapper");
const thankYouPage = document.querySelector(".thank_you_content-wrapper")
const submitButton = document.querySelector(".submit_button");
const ratingSelected = document.querySelector("span");
console.log(button);
const goBack = document.querySelector(".go_back");


submitButton.addEventListener("click",function(){
	frontPage.classList.add("hide");
	thankYouPage.classList.remove("hide");
});

//forEach function is used to loop through an array, list, which is what button is by using the querySelectorAll
	button.forEach(function(buttonPushed){
		buttonPushed.addEventListener("click", function(){
			ratingSelected.innerHTML = buttonPushed.innerHTML;
				});
	
});



goBack.addEventListener("click", function(){
	frontPage.classList.remove("hide");
	thankYouPage.classList.add("hide");
});
// JavaScript Document

const button = document.querySelectorAll(".button_1"); 
const frontPage = document.querySelector(".front_content-wrapper");
const thankYouPage = document.querySelector(".thank_you_content-wrapper")
const submitButton = document.querySelector(".submit_button");
const ratingSelected = document.querySelector("span");
const goBack = document.querySelector(".go_back");


button.forEach(function(buttonPushed){
	buttonPushed.addEventListener("click", function(){
	ratingSelected.innerHTML = buttonPushed.innerHTML;
	submitButton.addEventListener("click", function(){
	frontPage.classList.add("hide");
	thankYouPage.classList.remove("hide");
			})
	});
	
});	

goBack.addEventListener("click", function(){
	frontPage.classList.remove("hide");
	thankYouPage.classList.add("hide");
	submitButton.value = "";
});


var app=angular.module('book_app',[]);

app.controller('data_book',function($scope,$http,$rootScope){
$http.get('http://localhost:3000/books').then(function (responce){
$rootScope.count=0;
console.log(responce);
$scope.books=responce.data;
},function (error){
console.log(error);
});

$scope.submitReview=function(index,id,star,rev,email){
if(validator(id,email)){
	console.log(id);
var obj={'star':star,'comment':rev,'email':email};
$scope.books[index].reviews.push(obj);
var review=$scope.books[index];
var data=angular.toJson(review);
var ad=index+1;
url="http://localhost:3000/books/"+ad;
console.log(url);
$http.patch(url,data).then(function (responce){	
},function (error){
console.log(error);
});
}
else{
	alert("Enter Valid Data");
}
}

$scope.cart=function(){
	alert("Added to cart successfully");
}

$scope.validate=function(c){
	if(c==1)
		var i="star";
	if(c==2)
		var i="comment";
	if(c==3)
		var i="email";
	
	var inputVal = document.getElementById(i);
    if (inputVal.value == "") {
        inputVal.style.borderColor = "red";
    }
else
{   
	inputVal.style.borderColor = "green";
}
if(c==3){
	var Val = document.getElementById(i).value;
	if(!validateEmail(Val)){
      inputVal.style.borderColor = "red";
	}
	else{
		 inputVal.style.borderColor = "green";
	}
}
}

function validator(i,email){
if(i.star.$valid && i.comment.$valid && validateEmail(email)){
return true;
}
return false;
};

});

function validateEmail(x) {
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        return false;
    }
    return true;
}


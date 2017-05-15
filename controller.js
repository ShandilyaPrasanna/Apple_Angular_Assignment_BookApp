var app=angular.module('book_app',[]);

app.controller('data_book',function($scope,$http){
$http.get('http://127.0.0.1:8080/booklist.json').then(function (responce){
	console.log(responce);
$scope.books=responce.data.books;
},function (error){
console.log(error);
})
});



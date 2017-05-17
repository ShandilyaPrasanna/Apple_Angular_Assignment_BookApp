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
var obj={'star':"5",'comment':rev,'email':email};
$scope.books[index].reviews.push(obj);
console.log($scope.books);
console.log("id",id);

var review=$scope.books[index];
var data=JSON.stringify(review);
console.log(data);
url="http://localhost:3000/books/"+id;
console.log(url);
$http.patch(url,data).then(function (responce){
console.log(responce);
},function (error){
console.log(error);
});
}});


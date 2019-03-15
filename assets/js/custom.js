/////
//FrontEnd by: Inti Mateo www.imateo.com
//
var posofDoor=0;
var nike = angular.module('nikeApp', ['duParallax']);
nike.controller('HomeController',function ($scope,parallaxHelper) {
    var initDate = new Date("09/01/2016");
    var currentTime = new Date();
    var FinalDate = new Date("09/23/2016");
    var timeDiff = Math.abs(FinalDate.getTime() - initDate.getTime());
    var diffDaysOrigin = Math.round(timeDiff / 1000);
    var timenow = currentTime.getTime() - initDate.getTime();
    if(timenow>0){
      var diffDaysNow = Math.round(timenow / 1000);
      //console.log(initDate.getTime()+"-"+currentTime.getTime()+" "+timenow);
      var totalSec=Math.ceil((diffDaysNow*10000)/diffDaysOrigin);
      if(totalSec>10000){
        totalSec=10000;
      }
      //console.log(totalSec);
      var lengthNum=Math.ceil(Math.log(totalSec + 1) / Math.LN10);
      var NuminChar=totalSec.toString().split('');
      var numinCss;
      var count=0;
      posofDoor=totalSec*50/10000;
     }
     else{
      posofDoor=0;
     }
    for (var i = parseInt(lengthNum); i > 0; i--) {
      switch(NuminChar[i-1]){
        case "1":
          numinCss="one";
          break;
        case "2":
          numinCss="two";
          break;
        case "3":
          numinCss="three";
          break;
        case "4":
          numinCss="four";
          break;
        case "5":
          numinCss="five";
          break;
        case "6":
          numinCss="six";
          break;
        case "7":
          numinCss="seven";
          break;
        case "8":
          numinCss="eight";
          break;
        case "9":
          numinCss="nine";
          break;
      }
      var d = document.getElementById(count);
      d.className += " "+numinCss;
      count++;
    }
    $scope.background = parallaxHelper.createAnimator(-0.3);
});
/////
//FrontEnd by: Inti Mateo www.imateo.com
//
var posofDoor=0;
var nike = angular.module('nikeApp', ['duParallax']);
nike.controller('HomeController',function ($scope,parallaxHelper) {
    var initDate = new Date("08/15/2016");
    var currentTime = new Date();
    var FinalDate = new Date("09/08/2016");
    var timeDiff = Math.abs(FinalDate.getTime() - initDate.getTime());
    var diffDaysOrigin = Math.round(timeDiff / 1000);
    var timenow = Math.abs(currentTime.getTime() - initDate.getTime());
    var diffDaysNow = Math.round(timenow / 1000);

    var totalSec=Math.ceil((diffDaysNow*10000)/diffDaysOrigin);
    if(totalSec>10000){
      totalSec=9865;
    }
    var lengthNum=Math.ceil(Math.log(totalSec + 1) / Math.LN10);
    var NuminChar=totalSec.toString().split('');
    var numinCss;
    var count=0;
    posofDoor=totalSec*50/10000;
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
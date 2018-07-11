// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

var hyperchargedApp = angular.module("mainPage", []);
app.directive("header", function() {
	return {
		template: '<nav class="white navbar" role="navigation"> <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo"><img src="/assets/headlogo.png" class="navimg"/></a> <ul class="right hide-on-med-and-down"> <li><a href="#" class="light-blue-text lighten-1">About</a></li> <li><a href="#" class="light-blue-text lighten-1">Contact</a></li> <li><a href="#" class="light-blue-text lighten-1">Images</a></li> <li><a href="#" class="light-blue-text lighten-1">Calendar</a></li> <li><a href="https://www.youtube.com/channel/UCWX3ATF1LEWSbaPkAaDgxZw" class="red-text lighten-1"><i class="fa fa-youtube small"></i></li> </ul> <ul id="nav-mobile" class="side-nav"> <li><a href="#" class="light-blue-text lighten-1">About</a></li> <li><a href="#" class="light-blue-text lighten-1">Contact</a></li> <li><a href="#" class="light-blue-text lighten-1">Images</a></li> <li><a href="#" class="light-blue-text lighten-1">Calendar</a></li> <li><a href="https://www.youtube.com/channel/UCWX3ATF1LEWSbaPkAaDgxZw" class="red-text lighten-1">YouTube</li> </ul> <a href="#" data-activates="nav-mobile" class="button-collapse black-text"><i class="material-icons">menu</i></a> </div> </nav> <div class="section no-pad-bot" id="index-banner"> <div class="parallax-container"> <div class="parallax"> <img src="/assets/wall1.JPG" style="display: block; transform: translate3d(-50%, 20%, 0px);"/> </div> <h1 class="headpub white-text center" >Hypercharged</h1> </div> </div>'
	};
});
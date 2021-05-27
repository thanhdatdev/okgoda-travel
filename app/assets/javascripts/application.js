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
//= require scripts
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require js.cookie
//= require customizes/cookies
//= require customizes/bundlescripts
//= require customizes/scripts
//= require customizes/addcsstoclass
//= require chosen-jquery
//= require moment
//= require bxslider
//= require pnotify
//= require pnotify/pnotify
//= require pnotify/pnotify.buttons

$(document).on('turbolinks:load', function() {
  $(".chosen-select").chosen();
});

setTimeout(function(){
  $('.alert alert-info').fadeOut();
}, 5000);

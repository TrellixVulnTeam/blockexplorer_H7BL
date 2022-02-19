import $ from 'jquery'; 

export default function header() {
    $( "#header" ).load( "./header/header.html", function() {
        alert( "Load was performed." );
      });
}
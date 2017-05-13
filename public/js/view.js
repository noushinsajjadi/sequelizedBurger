/* global moment */
$.get("/", function(data) {
 
   if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<ul>");
      row.addClass("chirp");
      row.append("<form action=/:"+data[i].id+"?_method=PUT method=POST>" );
      row.append("<li>");
      row.append("<p>" + data[i].burger_name + "</p>");
      row.append("<input type=hidden name=devoured value=true>");
      row.append("<button type=submit>devoured it!</button>");   
      row.append("</form>");  
      row.sppend("</li>"); 
      
      $("#chirp-area").prepend(row);

    }

  }
console.log("Helllllllooooooo");
});


$.post("/", function()
  {
    var row = $("<ul>");
      row.addClass("chirp");
      row.append("<form >" );
      row.append("<li>");
      row.append("<p>" + $("#name").val().trim() + "</p>");
      row.append("<input type=hidden name=devoured value=true>");
      row.append("<button type=submit>devoured it!</button>");   
      row.append("</form>");  
      row.sppend("</li>"); 
      
      $("#chirp-area").prepend(row);
  // Empty each input box by replacing the value with an empty string
  $("#name").val("");
  });

// When the page loads, grab all of our burgers


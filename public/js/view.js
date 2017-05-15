/* global moment */
$.get("/burgers", function(data) {
  console.log('data: ',data);
 
   if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {
     console.log(data[i].devoured);
      if(data[i].devoured === false)
      {
      var row1 = $("<li>");
      row1.addClass("chirp");
      row1.append("<form action=/burgers/"+data[i].id+"?_method=PUT method=POST>" );
      row1.append("<p>" + data[i].burger_name + "</p>");
      row1.append("<input type=hidden name=devoured value=true>");
      row1.append("<button type=submit>devoured it!</button>");   
      row1.append("</form>"); 
        $("#chirp-area").prepend(row1);
      }
      else
      {
      var row2 = $("<li>");
      row2.addClass("chirp");
      row2.append("<form >" );
      row2.append("<p>" + data[i].burger_name + "</p>");
      row2.append("<input type=hidden name=devoured value=true>");
      row2.append("<button type=submit>devoured it!</button>");   
      row2.append("</form>"); 
        $("#chirp-area_2").prepend(row2);
      }
    }

    }

  
});


// $.post("/:id", function()
//   {
//     // var row = $("<li>");
//     //   row.addClass("chirp");
//     //   row.append("<form>" );
//     //   row.append("<p>" + data.burger_name + "</p>");
//     //   row.append("<input type=hidden name=devoured value=false>");
//     //   row.append("</form>");  
      
//     //   $("#chirp-area-2").prepend(row);
  
//   });

// When the page loads, grab all of our burgers


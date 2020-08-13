$('#searchin').bind('input', function() {
    document.getElementById("list").style.display="none";
    document.getElementById("btngo").disabled=true;

    if ($(this).val() != "") {
         var list = document.getElementById("list").childNodes;
         for (var i=0;i<list.length;i++) {
              var values = list[i].innerHTML;
              if(values){
                   list[i].style.display="none";
                   if (values.toLowerCase().includes($(this).val().toLowerCase()) == 1) {
                         document.getElementById("list").style.display="block";
                         list[i].style.display="block";
                   }
                   else {
                         list[i].style.display="none";
                   }
              }
          }
    }
});

$("#list li").click(function() {
     document.getElementById("searchin").value=this.outerText;
     document.getElementById("list").style.display="none";
     document.getElementById("btngo").disabled=false;

     var link = $(this).attr("href");

     document.getElementById("btngo").addEventListener("click", function(){
           window.open(link,'_self',false)
     })
});
$(document).ready(function () {

    var allFields = $("#registration-form").find("input, select, textarea");
    var totalFields = 0;
    for (var i = 0; i < allFields.length; i++) {
        if(allFields[i].getAttribute("required") != null){  
            totalFields = totalFields + 1;
        }
    }
    setInterval(updateInputProgress, 2000);

    function updateInputProgress(){
        var filledFields = 0;
        $("#registration-form").find("input, select, textarea").each(function(){
            if($(this).val() != "" && $(this).attr("required")){
                filledFields++;
            }
        });
        
        var percent = Math.ceil(100 * filledFields / totalFields);
        $(".progress-bar").attr("aria-valuenow", percent).width(percent + "%");
    }

    showPhotos();

    function showPhotos() {
        var i;
        var photos = document.getElementsByClassName("retreatPhotos");
        for (i = 0; i < photos.length; i++) {
          photos[i].style.display = "none";  
        }
        photoIndex++;
        if (photoIndex > photos.length) {photoIndex = 1}    
      
        photos[photoIndex-1].style.display = "block";  
        setTimeout(showPhotos, 6000);
    }
});
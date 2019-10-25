$(".imagen").click(function(e){
    var enlaceImagen = e.target.src;
    var details = '<div class="details">'+
        '<img src="'+enlaceImagen+'" alt="">'+
        '<div class="btn-close">X</div>'+
        '</div>';

    $("body").append(details)
    $(".btn-close").click(function(){
        $(".details").remove();
    }
}
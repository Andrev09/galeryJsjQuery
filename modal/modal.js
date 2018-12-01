$(function() {
    
    const modal = $('#myModal');
    const img = $('.avatar_photo');
    const modalImage = $('.image');
    const downloadHref = $('.download_href');
    const captionText = $('.caption_text_photo');
    const closeBtn = $('.close_btn');
    img.click(function(){
        modal.css({"display": "block"});
        modalImage.attr("src", this.src);
        downloadHref.attr("href", this.src);
        downloadHref.attr("download", this.alt);
        captionText.html(this.alt);
    });
    closeBtn.click(function(){
        modal.css({"display": "none"});
    })
   
});

$(function() {
    
    const modal = $('#myModalTap');
    const imgTap = $('.wallpaper_photo');
    const downloadHref = $('.download_href');
    const modalImageTap = $('.image');
    const captionText = $('.caption_text_photo');
    const closeBtn = $('.close_btn');

imgTap.click(function(){
        modal.css({"display": "block"});
        modalImageTap.attr("src", this.src);
        downloadHref.attr("href", this.src);
        downloadHref.attr("download", this.alt);
        captionText.html(this.alt);
    });
    closeBtn.click(function(){
        modal.css({"display": "none"});
    })
});
    
    
    
    
    
    
    
    
    
    
    
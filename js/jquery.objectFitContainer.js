(function ( $ ) {

  $.fn.objectFitContainer = function() {
    var naturalWidth = this[0].naturalWidth;
    var naturalHeight = this[0].naturalHeight;
    var elementHeight = this.height();
    var desiredElementWidth = (elementHeight * naturalWidth) / naturalHeight;
    console.log('naturalWidth',
               naturalWidth,
               'naturalHeight',
               naturalHeight,
               'elementHeight',
               elementHeight);
    this.width(desiredElementWidth);
    return this;
  };

}( jQuery ));

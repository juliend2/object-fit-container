/*!
 * objectFitContainer 1.0.0
 *
 * Released under the MIT license
 * http://jquery.org/license
 */
var jQuery = require("jquery");

export default (function ( $ ) {
  "use strict";

  return function(jqueryObj) {
    return jqueryObj.each(function(i, element) {
      var naturalWidth = element.naturalWidth;
      var naturalHeight = element.naturalHeight;
      var elementHeight = $(element).height();
      var desiredElementWidth = (elementHeight * naturalWidth) / naturalHeight;
      $(element).width(desiredElementWidth);
      return element;
    });
  };

}( jQuery ));

function facechange (objName) {
 if ( $(objName).css('display') == 'none' ) {
 $(objName).animate({height: 'show'}, 400);
 } else {
 $(objName).animate({height: 'hide'}, 200);
 }
};
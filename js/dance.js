
var dance = {
  
    init: function() {
      this.dance();
    },
    
    config: {
      newSize: 40,
    },
    
    dance: function(config) {
      var newText = '',
          h1 = $('#namana'),
          text = $('#namana').text(),
          oldSize = $("#namana").css("font-size"),
          length = text.length,
          i;
        console.log(oldSize) 
      for( i = 0; i < length; i++ ) {
        
        newText += '<span>' + text.charAt(i) + '</span>';    
      }
      
      h1.html(newText);
      
      h1.on('mouseenter mouseleave', 'span', function(e) {
        var span = $(this);
        
        if( e.type == 'mouseenter') {
           
          span.stop(true,false).animate({fontSize: dance.config.newSize + 'px'});
          
        } else if( e.type == "mouseleave" ) {
          
          span.animate({fontSize: oldSize});
        }  
      });
    }
  };
  
  $(function() {
    dance.init();
  });
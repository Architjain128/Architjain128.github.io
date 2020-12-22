$(document).ready(function(){
    var skillset = {
    "languages": [
        {
            "name": "C",
            "skill": 4
        },
        {
            "name": "C++",
            "skill": 4
        },
        {
          "name": "JavaScript",
          "skill": 3.5
        },
        {
            "name": "Python",
            "skill": 3
        },
        {
          "name": "HTML",
          "skill": 4
        },
        {
          "name": "CSS",
          "skill": 3.8
        },
        {
            "name": "BASH",
            "skill": 3
        }
      ],
    "frameworks": [
        {
            "name": "NodeJS",
            "skill": 3.5
          },
          {
            "name": "Express",
            "skill": 3.2
          },
        {
          "name": "ReactJS",
          "skill": 4
        },
        {
          "name": "Bootstrap",
          "skill": 3
        },
        {
            "name": "jQuery",
            "skill": 2.5
        },
        {
            "name": "FastAPI",
            "skill": 4
        },
        {
            "name": "Flask",
            "skill": 3.8
        },
        {
            "name": "Pygame",
            "skill": 4
        },
        {
            "name": "PyMySQL",
            "skill": 4
        },
      ],
    "databases": [
        {
            "name": "MYSQL",
            "skill": 3
        },
        {
          "name": "MongoDB",
          "skill": 2
        },
    ],
    
    "os": [
        {
          "name": "Linux",
          "skill": 4
        },
        
    ],
    "tools": [
        {
            "name": "Git",
            "skill": 3
        }
      ]
    }
    
    
    
    for(var i in skillset.languages){
       var percent=(skillset.languages[i].skill*100)/5
      var str='<div class="skillbar-container"><div class="skillbar" style="background: #2ecc71;" data-percent="'+percent+'%"><li>'+skillset.languages[i].name+'</div></div></li>';
       $(str).appendTo($('.languages'));
    }
      
    for(var i in skillset.frameworks){
       var percent=(skillset.frameworks[i].skill*100)/5
      var str='<div class="skillbar-container"><div class="skillbar" style="background: #2ecc71;" data-percent="'+percent+'%"><li>'+skillset.frameworks[i].name+'</div></div></li>';
       $(str).appendTo($('.frameworks'));
    }  
      for(var i in skillset.databases){
       var percent=(skillset.databases[i].skill*100)/5
      var str='<div class="skillbar-container"><div class="skillbar" style="background: #2ecc71;" data-percent="'+percent+'%"><li>'+skillset.databases[i].name+'</div></div></li>';
       $(str).appendTo($('.databases'));
    }  
        for(var i in skillset.os){
       var percent=(skillset.os[i].skill*100)/5
      var str='<div class="skillbar-container"><div class="skillbar" style="background: #2ecc71;" data-percent="'+percent+'%"><li>'+skillset.os[i].name+'</div></div></li>';
       $(str).appendTo($('.os'));
    }  
    
    for(var i in skillset.tools){
    var percent=(skillset.tools[i].skill*100)/5
    var str='<div class="skillbar-container"><div class="skillbar" style="background: #2ecc71;" data-percent="'+percent+'%"><li>'+skillset.tools[i].name+'</div></div></li>';
    $(str).appendTo($('.tools'));
    }

  $('.skillset').one("mouseover",function(){
    $('.skillbar').each(function(){
      $(this).animate({
        width:$(this).attr('data-percent'),
      },2000);
  });
  })    

  })
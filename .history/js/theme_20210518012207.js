;(function($){
    "use strict"

	/*----------------------------------------------------*/
    /*  Parallax Effect js
    /*----------------------------------------------------*/
	// function parallaxEffect() {
    // 	$('.bg-parallax').parallax();
	// }
	// parallaxEffect();

	/*----------------------------------------------------*/
    /*  Isotope Fillter js
    /*----------------------------------------------------*/
	function gallery_isotope(){
        if ( $('.gallery_f_inner').length ){
       
			$(".gallery_f_inner").imagesLoaded( function() {
                $(".gallery_f_inner").isotope({
                    layoutMode: 'fitRows',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                }); 
            });
			
       
            $(".gallery_filter li").on('click',function(){
                $(".gallery_filter li").removeClass("active");
                $(this).addClass("active");
                var selector = $(this).attr("data-filter");
                $(".gallery_f_inner").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });
            $(".gallery_filter select").on('click',function(){
                var xy=document.getElementById('archit_xy')

                var selector =xy.value;
                $(".gallery_f_inner").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });
        }
    }
    gallery_isotope();
	

})(jQuery)

let project_descriptions = {
    "jodar": `<br/>A platform where job recruiters can post the jobs and applicant can apply for it and then recruiter can shortlist/reject/accept there application based on applicant's skills and resume.`,
    "amongthem": `<br/>A game inspired from Among Us were player have to go from one exit to other in random maze and collect objects to increse the points and stay away from imposter wich will be moving towards you from shortest path possible.`,
    "covid": `<br/>Working as a Frontend Open Source contributor for a multidisciplinary volunteer team on technology enabled response to the COVID19 pandemic in India.`,
    "osdg": `<br/>Contributed as a Full stack developer for my college’s club website as summer activity with a team of batchmates under mentorship of seniors.`,
    "dbms": `<br/>Collaborated on a command line applications to be used to perform CRUD operations on a database of a Hotel Managnement company.`,
    "xv6": `<br/>Tweaked the xv6 Operating System to add several new scheduling algorithms, namely first-cum-first-serve, priority-based and multi-level-feedback-queue, along with a couple of system calls.`,
    "multi": `<br/>Used concepts of multithreading, mutex locks, semaphores, and process synchronization to implement two real-life systems.`,
    "shell": `<br/>A command-line interface based on the Unix Bash shell. Supports multiple commands per line, signal handling, and chained redirection and piping.`,
    "joystick": `<br/>Created a river crossing game as a part of Intro to Software Systems course in Python, and using the PyGame library <br><br>This is a two-player game, with increasing difficulty as the game progresses. The aim is to dodge the moving and fixed obstacles and reach the other end.`,
    "skyfall": `<br/>Created a river crossing game as a part of Intro to Software Systems course in Python, and using the PyGame library <br><br>This is a two-player game, with increasing difficulty as the game progresses. The aim is to dodge the moving and fixed obstacles and reach the other end.`,
    "skyfall": `<br/>A flutter anodroid app where users can call a verified expert to discuss about a specifics topic `
}


function henlo(txt, img){
    Swal.fire({
            html: txt,
            showCloseButton: true,
            showConfirmButton: false,
            focusConfirm: false,
            imageUrl: img
        }
    )
}

function generateHtml(title, tech, img, gh = "#", lnk = "#",demo="#"){
   
    let final = ""
    let gh_shiz = ""
    let gh_shiz2 = ""
    let lnk_shiz = ""
    let lnk_shiz2 = ""
    let social_shiz = ""


    if(gh != "#"){
        gh_shiz = `<a href="` + gh + `"><i class="fa fa-github fa-3x"></i></a><br/>`
    }
    if(gh != "#"){
        gh_shiz2 = `<a> Source Code </a>`
    }
    if(lnk != "#"){
        lnk_shiz = `<a href="` + lnk + `"><i class="fa fa-link fa-3x"></i></a><br/>`
    }
    if(lnk != "#"){
        lnk_shiz2 = `<a> View Live </a>`
    }
    if(lnk_shiz != "" || gh_shiz != ""){
        social_shiz = `<div class="social_icon">
        ` + gh_shiz + gh_shiz2 + '<br/>' +lnk_shiz + lnk_shiz2 +
        `</div>`;
    }

  

    final = `
            <div class="blog_right_sidebar">
                <aside class="single_sidebar_widget author_widget">
                    <!--<img class="author_img rounded-circle popup-img" src="img/gallery/` + img + `.png" alt="">-->
                    <h4>` + title + `</h4>
                    <p>` + tech + `</p>
                    ` + social_shiz + `
                    <p>` + project_descriptions[img] + `</p>
                    <div class="br"></div>
                </aside>
            </div>`

    img = "img/gallery/" + img + ".png"
    // img = "img/gallery/" + img + ".jpg"



    henlo(final, img)
}

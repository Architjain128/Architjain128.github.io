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
            $(".gallery_filter select").on('change',function(){
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
    "jodar": `<br/>A platform where job recruiters can post the jobs and applicants can apply for it and allow recruiters to shortlist/reject/accept their application based on applicant's skills and resume uploaded.`,
    "amongthem": `<br/>A game inspired by Among Us where a player has to go from one exit to another in a randomly generated maze by staying away from an impostor who will move towards him from the shortest path possible.`,
    "covid": `<br/>Worked as an Open-Source contributor for a multidisciplinary volunteer team on technology enabled response to the COVID19 pandemic in India.`,
    "osdg": `<br/>Contributed as a Full stack developer for my college’s club website as a summer activity with a team of my batch mates under the mentorship of seniors.`,
    "dbms": `<br/>A database project in MYSQL and has a CLI via python PyMySQL for a Hotel Management Company. It covers all CRUD operations for all entities with Normalization.`,
    "xv6": `<br/>Tweaked the XV6 Operating System to add several new scheduling algorithms, namely first-cum-first-serve, priority-based and multi-level-feedback-queue, along with a couple of system calls.`,
    "multi": `<br/>Used concepts of multi-threading, mutex locks, semaphores and process synchronization to implement two real-life systems simulating :
    <ul>
    <li>Performance Scheduling in event management with the timed wait.</li>
    <li>Production and Distribution of Vaccines in different zones for vaccination of people arriving at random times.</li>
    </ul>`,
    "shell": `<br/>A command-line interface based on the Unix Bash shell. Supports multiple commands per line, signal handling, and chained redirection and piping.`,
    "joystick": `<br/>A two-player game like river crossing implemented using OOPS concepts. Has multiple stationery as well as moving obstacles like thorns and sharks with a time countdown for scoring.`,
    "skyfall": `<br/>A 3D web-based game in which a player has a limited number of missiles that he can use to explode enemy planes and, it has to dodge a bunch of obstacles as the game progress.`,
    "bestie": `<br/>A flutter based android app where users can call over the internet to a verified expert to discuss a listed specific topic and charged on per minute basis.`,
    "kwazy":`<br/>A terminal-based python game similar to classic DX-Ball with a bunch of different powerups, obstacles and a modular object-oriented design.`,
    "mlalgo":`<br/>Implemented various machine learning algorithms and their concepts as part of my course including, genetic algorithm, linear regression and analysis of bias-variance trends, value iteration, MDP and POMDP.`,
    "health":`<br/>Currently developing a web-based Health Care app using MERN stack, which helps medical organisations in data collection with the help of medical assistance as well as help patients to track their medical reports.`
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
    let you_shiz = ""
    let you_shiz2 = ""
    let social_shiz = ""


    if(gh != "#"){
        gh_shiz = `<a href="` + gh + `"><i class="fa fa-github fa-3x"></i></a><br/>`
    }
    if(gh != "#"){
        gh_shiz2 = `<a> Source Code </a><br/>`
    }
    if(lnk != "#"){
        lnk_shiz = `<a href="` + lnk + `"><i class="fa fa-link fa-3x"></i></a><br/>`
    }
    if(lnk != "#"){
        lnk_shiz2 = `<a> View Live </a><br/>`
    }
    if(demo != "#"){
        you_shiz = `<a href="` + lnk + `"><i class="fa fa-youtube-play fa-3x"></i></a><br/>`
    }
    if(demo != "#"){
        you_shiz2 = `<a> Demo Link </a><br/>`
    }
    if(lnk_shiz != "" || gh_shiz != "" ||you_shiz!="" ){
        social_shiz = `<div class="social_icon">` 
        + gh_shiz + gh_shiz2  +lnk_shiz + lnk_shiz2  +you_shiz + you_shiz2 +
        `</div>`;
    }

    final = `
            <div class="blog_right_sidebar" >
                <aside class="single_sidebar_widget author_widget">
                <div style="width:300px,height:400px,overflow-y:auto">
                    <!--<img class="author_img rounded-circle popup-img" src="img/gallery/` + img + `.png" alt="">-->
                    <h4>` + title + `</h4>
                    <p>` + tech + `</p>
                    ` + social_shiz + `
                    <p>` + project_descriptions[img] + `</p>
                    <div class="br"></div>
                </div>
                </aside>
            </div>`

    img = "img/gallery/" + img + ".png"
    // img = "img/gallery/" + img + ".jpg"



    henlo(final, img)
}

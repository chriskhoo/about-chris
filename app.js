$(function() {
  console.log('app js linked');

  // display messages for projects page
  var kindjobs = {
    title: 'KindJobs',
    description: 'Kind jobs is a job portal for jobseekers looking for a position in the Social Good Sector. It is an initiative launched by our client - Conjunct Consulting. <br/>\
    The project was executed by our team of 3 (Ren Cheng, Luqman, and I) with rotating technical roles to maximize learning. Interesting features such as search filters were pair programmed. The management roles such as structuring the work, client communication and product design were allocated. <br/>\
    I helped structure the work plan and developed the initial front end site with basic functionality before focusing on developing the backend user authentication using JWT tokens and Passport.',
    stack: 'Technology Stack: <br/>\
    <img src="./assets/img/bw_logos/html5.png" alt="html5"/>\
    <img src="./assets/img/bw_logos/css3.png" alt="css3"/>\
    <img src="./assets/img/bw_logos/js.png" alt="js"/>\
    <img src="./assets/img/bw_logos/github.png" alt="github"/>\
    <img src="./assets/img/bw_logos/heroku.png" alt="heroku"/>\
    <img src="./assets/img/bw_logos/bootstrap.png" alt="bootstrap"/>\
    <img src="./assets/img/bw_logos/sass.png" alt="sass"/>\
    <img src="./assets/img/bw_logos/es6.png" alt="es6"/>\
    <img src="./assets/img/bw_logos/react.png" alt="react"/>\
    <img src="./assets/img/bw_logos/redux.png" alt="redux"/>\
    <img src="./assets/img/bw_logos/webpack.png" alt="webpack"/>\
    <img src="./assets/img/bw_logos/npm.png" alt="npm"/>\
    <img src="./assets/img/bw_logos/nodejs.png" alt="nodejs"/>\
    <img src="./assets/img/bw_logos/expressjs.png" alt="expressjs"/>\
    <img src="./assets/img/bw_logos/mongodb.png" alt="mongodb"/>',
    github: '<i class="fa fa-github" aria-hidden="true"></i>',
    link: '<i class="fa fa-link" aria-hidden="true"></i>',
    github_src: 'https://github.com/CLR-WDI/KindJobs',
    link_src: 'https://kindjobs.herokuapp.com/',
    image: 'url("./assets/img/kindjobs.png")'
  };
  var amealzing = {
    title: 'A-MEAL-ZING',
    description: 'A-MEAL-ZING is a meal planner with recipes. <br/>\
    The application was built by our team of 6 (Kai, Stephanie, Chen Xin, Ming, Yuzeng and I). I was the team leader for this project providing direction, structure and task assignment for the project. My primary technical contribution was to plan the data structure, file structure and routes, as well as pair programming when team-mates required assistance.',
    stack: 'Technology Stack: <br/>\
    <img src="./assets/img/bw_logos/html5.png" alt="html5"/>\
    <img src="./assets/img/bw_logos/css3.png" alt="css3"/>\
    <img src="./assets/img/bw_logos/js.png" alt="js"/>\
    <img src="./assets/img/bw_logos/github.png" alt="github"/>\
    <img src="./assets/img/bw_logos/heroku.png" alt="heroku"/>\
    <img src="./assets/img/bw_logos/bootstrap.png" alt="bootstrap"/>\
    <img src="./assets/img/bw_logos/jquery.png" alt="jquery"/>\
    <img src="./assets/img/bw_logos/npm.png" alt="npm"/>\
    <img src="./assets/img/bw_logos/nodejs.png" alt="nodejs"/>\
    <img src="./assets/img/bw_logos/expressjs.png" alt="expressjs"/>\
    <img src="./assets/img/bw_logos/mongodb.png" alt="mongodb"/>',
    github: '<i class="fa fa-github" aria-hidden="true"></i>',
    link: '<i class="fa fa-link" aria-hidden="true"></i>',
    github_src: 'https://github.com/wdi4GroupProject/front_end_consume_A_Pie',
    link_src: 'https://wdi4groupproject.github.io/front_end_consume_A_Pie/views/',
    image: 'url("./assets/img/amealzing.png")'
  };
  var guestronomy = {
    title: 'Guestronomy',
    description: 'Guestronomy is an ecosystem for home cooking. The platform allows chefs to host private dinners and an opportunity for guests to experience novel private dining experiences.<br/>\
    This was the second project of the course and provided a rich testing ground as my first foray into ruby, rails and databases. The application took approximately 3 days to complete and whilst it enables basic functionality, it\'s form remains raw.<br/>\
    I intend to build out this app in the future using the skills developed since this app was created (using a different stack!).',
    stack: 'Technology Stack: <br/>\
    <img src="./assets/img/bw_logos/html5.png" alt="html5"/>\
    <img src="./assets/img/bw_logos/css3.png" alt="css3"/>\
    <img src="./assets/img/bw_logos/js.png" alt="js"/>\
    <img src="./assets/img/bw_logos/github.png" alt="github"/>\
    <img src="./assets/img/bw_logos/heroku.png" alt="heroku"/>\
    <img src="./assets/img/bw_logos/bootstrap.png" alt="bootstrap"/>\
    <img src="./assets/img/bw_logos/jquery.png" alt="jquery"/>\
    <img src="./assets/img/bw_logos/ruby.png" alt="ruby"/>\
    <img src="./assets/img/bw_logos/rails.png" alt="rails"/>\
    <img src="./assets/img/bw_logos/database.png" alt="database"/>\
    <img src="./assets/img/bw_logos/postgresql.png" alt="postgresql"/>',
    github: '<i class="fa fa-github" aria-hidden="true"></i>',
    link: '<i class="fa fa-link" aria-hidden="true"></i>',
    github_src: 'https://github.com/chriskhoo/PrivateKitchen2B',
    link_src: 'https://mighty-basin-50114.herokuapp.com',
    image: 'url("./assets/img/guestronomy.png")'
  };
  var reversi = {
    title: 'Reversi: Return to the dark side',
    description: 'Reversi is a classic board game for 2. Reversi is traditionally played with black and white pieces that represent the dark and the light, the good and the bad, or in this case the dark side and the Jedi. <br/>\
    This application is one of 3 applications built after my first 2 weeks of web development. My personal objective for this application was to code using Object-oriented Programming, using no references to other solutions. This application helped to build my confidence in programming in javascript and solidified my understanding of closures, scoping and hoisting. <br/>\
    (note: the first app was a quiz required by the syllabus, the second was a 2 player version of PONG to experiment on techniques not taught, i.e. canvas. These may be found in my GitHub repository)',
    stack: 'Technology Stack: <br/>\
    <img src="./assets/img/bw_logos/html5.png" alt="html5"/>\
    <img src="./assets/img/bw_logos/css3.png" alt="css3"/>\
    <img src="./assets/img/bw_logos/js.png" alt="js"/>\
    <img src="./assets/img/bw_logos/github.png" alt="github"/>\
    <img src="./assets/img/bw_logos/jquery.png" alt="jquery"/>',
    github: '<i class="fa fa-github" aria-hidden="true"></i>',
    link: '<i class="fa fa-link" aria-hidden="true"></i>',
    github_src: 'https://github.com/chriskhoo/1B-Reversi',
    link_src: 'https://chriskhoo.github.io/1B-Reversi/',
    image: 'url("./assets/img/reversi.png")'
  };

  // function for the option
  var fill_project_fn = function(string, name){
    $('#'+string).click(function(){
      $('#project_instructions').html('');
      $('.selected').toggleClass('selected');
      $('#'+string).toggleClass('selected');
      $.each(name, function(index, value) {
        $('#project_'+index).html(value)
      });
      $('#project_github').attr('href', name.github_src);
      $('#project_link').attr('href', name.link_src);
      $('#computer').css('background-image', name.image);
    })
  };

  // set up for all the projects
  fill_project_fn('kindjobs', kindjobs);
  fill_project_fn('amealzing', amealzing);
  fill_project_fn('guestronomy', guestronomy);
  fill_project_fn('reversi', reversi);

  // hover message for contact page

  var hover_msg = function(id, message){
    $(id).on({
        mouseenter: function () {
            //stuff to do on mouse enter
            $('#text_display').html(message);
        },
        mouseleave: function () {
            //stuff to do on mouse leave
            $('#text_display').html('');
        }
    });
  }
  hover_msg(  '#cv',        'Download my CV'            );
  hover_msg(  '#linkedIn',  'Visit my LinkedIn profile' );
  hover_msg(  '#git',       'Visit my GitHub page'      );
  hover_msg(  '#email',     'Drop me an email'          );



}); // jquery

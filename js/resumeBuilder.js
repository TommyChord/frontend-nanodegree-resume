var bio = {
	"name" : "Tommy Walderhaug",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "+47 934 03 609",
		"email" : "tommy.walderhaug@online.no",
		"github" : "TommyChord",
		"twitter" : "@TommyChord",
		"location" : "Buvika, Norway"
		},
	"welcomeMessage" : "Welcome to my fantastic resume page!<br>On this page I will try to show off my essential skills for you.",
	"skills" : ["JavaScript","HTML/CSS","JSON","jQuery","PHP","Java","Perl","Visual Basic","MySQL","PostgreSQL","Integration"],
	"biopic" : "images/tommy.jpg",
	"display" : function(){
		$("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
		$("#header").append(HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage));
		$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
		$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
		$("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
		$("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
		$("#topContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
		$("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
		$("#footerContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
		$("#footerContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
		$("#footerContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
		$("#footerContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
		$("#footerContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
		
		// Display skills if present
		if (bio.skills.length > 0){
			$("#header").append(HTMLskillsStart);
			for (skill in bio.skills){
				$("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
			}
		}
	}
}

var education = {
    "schools": [
	    {
		"name": "Naeringsakademiet",
		"location": "Aalesund, Norway",
		"degree" : "Candidate",
		"majors" : "Computer Science",
		"dates": "1995",
		"url" : "http://www.treider.no/it/"
        },
        {
		"name": "NTNU",
		"location": "Trondheim, Norway",
		"degree" : "Bachelor",
		"majors" : "Computer Science",
		"dates": "1994",
		"url" : "http://www.ntnu.no"
        },
        {
		"name": "Teknisk fagskole",
		"location": "Kristiansund, Norway",
		"degree" : "Tekniker",
		"majors" : "Electonics and Automations",
		"dates": "1993",
		"url" : "http://www.krsund.vgs.no/"
        }
    ],
	"onlineCourses" : [
		{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"date" : "January 2015",
		"url" : "http://www.udacity.com/course/ud804"
		},
		{
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"date" : "December 2014",
		"url" : "http://www.udacity.com/course/ud304"
		}
	],
	"display" : function(){
		// Display Schools if any
		if (education.schools.length > 0){
			$("#education").append(HTMLschoolStart);
			for (school in education.schools){
				var fomattedSchool = HTMLschoolName.replace("%data%",education.schools[school].name)
									+ HTMLschoolDegree.replace("%data%",education.schools[school].degree);
				$(".education-entry:last").append(fomattedSchool);
				$(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[school].dates));
				$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[school].location));
				$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[school].majors));
			}
		}
		// Display Online Courses if any
		if (education.onlineCourses.length > 0){
			$(".education-entry:last").append(HTMLonlineClasses);
			for (onlineCourse in education.onlineCourses){
				var formattedCourse = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title)
							+ HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school);
				$(".education-entry:last").append(formattedCourse);
				$(".education-entry:last").append(HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].date));
				$(".education-entry:last").append(HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourse].url));
			}
		}
	}
}

var work = {
	"jobs" : [
		{
		"employer" : "AT&T",
		"title" : "Professional Developer",
		"location" : "Buvika, Norway",
		"dates" : "October 2008 - Current",
		"description" : "Network monitoring & management. Integration and application development."	
		},
		{
		"employer" : "IBM",
		"title" : "Senior IT Specialist",
		"location" : "Trondheim, Norway",
		"dates" : "June 2000 - October 2008",
		"description" : "Network monitoring & management. Integration and application development."	
		},
		{
		"employer" : "Storebrand ASA",
		"title" : "IT Consultant",
		"location" : "Oslo, Norway",
		"dates" : "June 1997 - June 2000",
		"description" : "Network configuration, monitoring and troubleshooting."	
		}
	],
	"display" : function(){
		if (work.jobs.length > 0){
			$("#workExperience").append(HTMLworkStart);
			for (jobIndex in work.jobs){
				$(".work-entry:last").append(HTMLworkEmployer.replace("%data%",work.jobs[jobIndex].employer) + HTMLworkTitle.replace("%data%",work.jobs[jobIndex].title));
				$(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[jobIndex].dates));
				$(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[jobIndex].location));
				$(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[jobIndex].description));
			}
		}
	}
}

var projects = {
	"projects" : [
		{
		"title" : "GTAC",
		"dates" : "Current",
		"description" : "Front- and backend development.",
		"images" : ["images/1.jpg","images/2.jpg"]
		},
		{
		"title" : "GPS EMEA Bridge",
		"dates" : "Current",
		"description" : "Automated asset bridge with GUI for management.",
		"images" : ["images/2.jpg","images/1.jpg"]
		},
		{
		"title" : "Attlas",
		"dates" : "Current",
		"description" : "New reporting engine using Pentaho",
		"images" : ["images/1.jpg","images/2.jpg"]
		}
	],
	"display" : function(){
		if (projects.projects.length > 0){
			$("#projects").append(HTMLprojectStart);
			for (project in projects.projects){
				$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[project].title));
				$(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[project].dates));
				$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[project].description));
				for (image in projects.projects[project].images){
					$(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.projects[project].images[image]));
				}
			}
		}
	}
}

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);

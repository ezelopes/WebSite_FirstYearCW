/*FUNCTION FOR NAVIGATION BAR ICON*/

function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
          x.className += " responsive";
      } else {
          x.className = "topnav";
      }
  }


/*Button to top*/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*FUNCTION TO WRITE LITREV DINAMICALLY
function writeLit(){
const litcont = ['Understanding the danger of sharing information on the web has become increasingly important during the past years. People not only can see what others publish, but can also be threatened by someone who accessed the data illegally. Types of cyber attack and ways of taking the precautions to avoid them will be deepened by focusing on the importance of passwords and management systems. The aim of the literature review is to inform readers about the danger and give a basic knowledge about the threats. As confirmed by Mr. Pawar, networks design is developed to provide security and inaccessibility to the data while it is transferred from one device to another. There are two main features that it must supply: confidentiality - packets are read only by sender and receiver - and integrity - the guarantee that data will not be altered  (Pawar, M. V., Anuradha, J., 2015).',
 'The network security is becoming considerable relevant as a result of the growing interconnection of the world, the large amount of data online and the easiness of acquiring intellectual property through the Internet (Pawar, M. V., Anuradha, J., 2015). For instance, when a virus goes through a flaw in a router, domain or switch, it becomes responsible for malfunctioning the whole system. In the worst case, the virus is likely to reach the rest of the network, despite the fact that each computer uses virus scans and domains use firewalls to protect exposure to malware. (Acemoglu, D., Malekian, A., Ozdaglar, A., 2016). Although, the utilization of firewalls could generate other issues. First, it is possible that both application and network are not aware of each other. Secondly,  the interaction with firewalls could be challenging while testing it in a global environment, since the debugging phase is made in a local area (Niederberger, R et. al, 2016).',
 'Since people have started to store data and information on the cloud facilities, attacks have not been addressed only to traditional infrastructures,indeed the popularity of DDoS (Distributed Denial of Service) attacks have increased. This type of threats consist of making unavailable services by sending a big amount of requests (overloading the service) through a group of machines (Somani, G et al., 2017). Studies prove that DDoS attacks could hit basing on the protocol targeted, whose can be the transport-level and the application-level. In the first case, a hacker will try to use up the network’s bandwidth and the router processing capacity, sending TCP, UDP, ICMP requests or via a  Smurf attack. In the other case, a hacker will try to exhaust the server resources such as network sockets, CPU and the memory by using DNS, HTTP or SIP protocols (Zargar, S. T., Joshi, J., & Tipper, D, 2013). According to Shameli-Sendi, there are different strategies to protect systems, which are grouped in collaborative or non-collaborative. The main idea of the former involves the usage of more firewalls, that operate and exchange information together, with the aim of blocking undesired attacks to the firewall node.  The latter is distinguished in two categories; Static - that identifies a DDoS via the volume counting and drops malicious information - and dynamic - that filter out the packets and then direct them to the destination. (Shameli-Sendi et al., 2015) An additional severe threat that concerns Internet Security is phishing; it consists of a spoofed website made with the intention of steal user’s details and passwords.  In order to defend against that, organisations and communities like Anti-Phishing Working Group and  APWG have been created and many other secure browsing systems have been made available, such as Google Safe Browsing and McAfee SiteAdvisor. (Zhao, R, 2017)',
'Another key point to protect networks is represented by passwords. They are secure thanks to encryption and hash algorithms and they allow legal users to operate safety with the resources found in remote systems. There are three ways of identity authentication defined by information known - passwords, information own -smart cards and some personal characteristic - fingerprint. (Liao, I., Lee, C., Hwang, M.,  2006) Despite the fact passwords are safe, they are a feeble form of protection due to the linkage of the weakest component in the network security: the human user, whom do not pay enough attention to creating a strong password (Kessler, G. C., 1996) Besides, user passwords have different accesses depending upon the authorization level of each user/group within the system. These are managed by the Password Management System, that provides updated passwords on a regular basis. The user ‘root’/’administrator’ has limitless authorizations, implementing whatever task. This system has pros and cons; the bigger disadvantage is found when a super user moves department or quits the company, indeed all his/her privilege must be revoked. Furthermore, systems have to make sure that the employee has not left any backdoor that could use to access data in the future. (Huseyin, T., Kerem, E., 2011)',
'Bring Your Own Device (BYOD) has gained more and more popularity, meaning that end-users need to be educated as never before. In an organisation, every employee might be taught in basics of cyber-security, indeed the only IT team is not enough if the everyone is not aware of security threats (Kim, J., 2017). Furthermore, the usage of outdated device firmware and insecure protocols leaves several gaps in networks security, meaning that the organisation is vulnerable and wide open to attackers. Although, even if organisations are provided by the best and latest technology, having a team that does not know how to manipulate it properly could lead to mistakes and weaknesses inside the network (Kim, J., 2017).',
'As described in this literature review, there is not only one way to minimise risks related to the exposure of data online and there is not any solution to cease them eternally. Organisations have developed strategies as new types of attacks has emerged and spread across the web, jeopardising the security of both end-users and companies of great importance. Teaching people how to behave against these dangers is crucial in order to mitigate them, because cyber security could be attacked in any moment and having employees ready to defend the network can benefit everyone over the company or organisation.'
];
const litBody = document.querySelector("#LitRev");

litcont.forEach(text => {
  const ptag = document.createElement("p");
  ptag.textContent = text;
  litBody.appendChild(document.importNode(ptag, true));
});

}*/

/*FUNCTION TO WRITE SELECTED WEEK OF DISC LOG*/

function discLogFunction(val){
    const data =
    {
        "Week1":{
            "Lecture": "The first lecture was a welcome and an introduction to the course and the explanation of the coursework. It was really helpful in order to understand how University works and to be aware that we need to be independent. We have been shown a big schema with all the topics we are going to study (from security to HTML, CSS and VM). Our lecturer told us that for any enquiry we could ask to anyone (peers, personal and even unit tutor).",
            "Practical": "The first practical lesson Mr Boakes taught us how to manage our time and he gave us several tips we may follow to achieve a great time management, avoiding waste of time. We watched some videos and read some graphs to understand how most students spend their own time in order to be able to organise our days and trying to get the most of every single hour."
        },
        "Week2":{
            "Lecture": "The second lecture was about cyber security. We talked about the importance of not giving sensitive information to anyone and we see all the consequences that this could lead to. We learnt to be careful of sharing our data on the web and to not trust everyone. This lecture has been constructive for our Literature Review.",
            "Practical": "During the second practical lesson, we have started to work with the VM (already done in DB course) and afterwards we have been looking for the best and the worst website in term of reliability according to anyone. In the google form we needed also to enter a website we would like to create and/or improve. This lesson was another step forward to the comprehension of the Literature Review."
        },
        "Week3":{
            "Lecture": "In the third lecture we watched some videos with Mr. Savage about cyber security and how information could be stolen. Covering this topic, our lecturer explained us the features that information need to have to be secure. We have learnt how cyber attacks can affect companies and individuals (in an economic and personal way).",
            "Practical": "The third practical lesson we talked about different kinds of information that we share in a daily basis. In a group, we had to create a document containing."
        },
        "Week4":{
            "Lecture": "The fourth lecture we have been shown how to write a Literature Review, References and search for academic sources (do not use Wikipedia etc.) through keywords, authors or core themes. We have been explained the differences between an Essay and a Literature Review (do not give opinions …).",
            "Practical": "During the fourth practical lecture we’ve been able to search information for our Literature Review, with the opportunity of asking questions to the lecturer. He also suggested us to use Google Scholar and the University Discovery as sources."
        },
        "Week5":{
            "Lecture": "The fifth lecture we looked at different kind of papers (post, journals, cooking receipt) to see the difference among them and to learn which features and characteristics to  Literature Review might have: references (APA V6) objective, factual, impersonal, no personal thoughts, no brackets, avoid hyperbole and contractions.",
            "Practical": "In the fifth practical lesson we went through improving our Review by replacing phrasal verbs with formal and academic terms. This lesson has been useful for learning other ways to say what I want to communicate to the reader/people."
        },
        "Week6":{
            "Lecture": "In the sixth lecture we learnt the basics of one of the most important markup language: HTML (HyperText Markup Language). We cover the most important tags such as <html> <h1..2...3...4> <strong> <section> etc.",
            "Practical": "During the sixth practical lesson we created two basic and short websites (with no css) and uploaded on our Virtual Machine. Thanks to the web server provided, we could see our webpages just typing the IP address of the VM. Typing only the IP address we will be addressed to the index.html page; adding /helloworld.html we can see the other webpage. That is because “index.html” is the first web page that any computer will search for."
        },
        "Week7":{
            "Lecture": "READING WEEK",
            "Practical": "READING WEEK"
        },
        "Week8":{
            "Lecture": "During the eight lecture, our lecturers gave us an example of the usage of CSS step by step. Starting from a normal HTML page, with no graphics at all, they animated the text, set a background, set a sound and set all the graphics required (like bold or italic text etc.).",
            "Practical": "In the eight practical lesson, we have seen how to create a basic HTML page using a file CSS. We learnt how to import this file in our index.html and how to reference to every specific style using tags. There are 2 different methods: ‘id’ and ‘class’."
        },
        "Week9":{
            "Lecture": "During the ninth lecture, we focused on how to be productive and efficient by using shortcuts with the keyboard instead of using the cursor. This can bring a huge save of time when it is needed to change information inside a web page (otherwise it would be a ‘monkey job’)",
            "Practical": "During the ninth practical lesson, we install packages on Atom in order to make this software more efficient and to let ourselves work faster."
        },
        "Week10":{
            "Lecture": "In the tenth lecture, we defined the importance of the Design in Software Development. Design could mean several things: 'Desing is the application of intent - the opposite of happenstance, and an antidote to accident' (Robert L. Peters). We also agreed that the more work a programmer does, the less work the end-user will do.",
            "Practical": "During the tenth practical lesson, we have been given several cards regarding different topics. We had to group them by the topic we thought was the better. This is to let us understand how designing anything can improve the efficiency of our work."
        },
        "Week11":{
            "Lecture": "In the eleventh lecture we covered the influence that a responsive and dynamic website has on the end user. Nowadays, any website need to be able to adapt to every single device with different sizes, otherwise it would look messy and hard to understand.",
            "Practical": "In the eleventh practical lesson we implemented what we learnt in the lecture and try to work it out on our website."
        },
        "Week12":{
            "Lecture": "In the last lecture of the first term, our lecture showed us an example of dynamic website. In the html page, only the structure is defined while all the content/object is loaded dynamically thanks to JavaScript and css.",
            "Practical": "In the last practical session I carried on with my website. I did researches about new HTML5 tags that I did not know."
        },
        "Week13":{
            "Lecture": "In the first lecture of the second term, we went through the peer review marking guide, in order to know what we need to check on the website specifically.",
            "Practical": "In the first practical session of the second term, we used the HTML and CSS validators. Thanks to this, we could spot all the mistakes that have been made so we could fix them and understand the reason why an error is shown."
        },
        "Week14":{
            "Lecture": "In this lecture we have learnt how to type a URL inside our <a href=””>, <img src=””> or <script=””> tags and the difference between a relative and an absolute URLs. This lecture has been helpful for our own website, since we need to use them and understanding how to use them is relevant in terms of security (do not write passwords inside the URL etc).",
            "Practical": "In this practical session we put in practice what we have learnt in the lecture. We created a little web page that calls both other pages inside the same folder and other website online (like BBC etc). Again, this it has been helpful to carry on with our website."
        },
        "Week15":{
            "Lecture": "I think that this lecture was really important since most of the time, website are not user friendly and hard to understand. Our lecturer explained us that whenever we need to develop a project, we need to do it based on user requirements. Furthermore we need to perform cyclically  the following process if we want to do a great job: Design, Implement and Evaluate.",
            "Practical": "In this practical session we had the opportunity to give and receive feedback from another coursemate regarding usability of the website. The feedback was mainly based on the structure, navigation and feeling of the page."
        },
        "Week16":{
            "Lecture": "While creating websites, we often forget to think about those people with any kind of disability that want to access our page. We need to provide them all the tools that would allow them to have a great and easy experience when navigating. Good contrast with the colours, good structure and well-organised, screen-readers etc. are some of the features that any website should have.",
            "Practical": "During this practical I had to dress some glasses and a glove with wood sticks inside in order to simulate a disability. I had to navigate the web and it was not easy at all. My course mates helped me monitoring my movements on the screen and telling me when to click. This lecture made me think that we need to develop a website that is suitable for everyone."
        },
        "Week17":{
            "Lecture": "In this lecture we covered SVGs (Scalable Vector Graphics) and the importance of using them. They can reduce significantly the size of any website since an image in SVG take up less than a half memory of a normal image. Also, when zooming into them we will not see any pixel because they are vectorised. This improve the quality of any website.",
            "Practical": "During this practical, we have been shown how to create the University of Portsmouth Logo using SVGs. I realised that with practice it is absolutely not hard creating these efficient drawings."
        },
        "Week18":{
            "Lecture": "Introduction to javascript. Our lecturer started with a basic stick figure drawn in JavaScript and he finished up with a multiplayer game,implementing step by step the original code. It was really interesting because we learnt the functionalities and potential of this programming language. It was important to me, indeed I finally chose the Web Scripting Unit for the second year.",
            "Practical": "I could not attend this practical session because of illness. I carried on with my website at home, doing few researches about javascript and how to import text from a file to an HTML file."
        },
        "Week19":{
            "Lecture": "READING WEEK",
            "Practical": "READING WEEK"
        },
        "Week20":{
            "Lecture": "In this lecture we talked about the importance of standards. We use standards every day (weight, electricity, communication protocols etc.). They are really relevant when developing a team project. If members of the team use different standards (miles instead of metres or stone instead of kilograms), the results could be wrong and cause an economic or social disaster.",
            "Practical": "This was the last practical session before submission. I asked feedback to my lecturer and he suggested me to use an utf-8 emoji for a button, which is a great idea and helped me improving my website. Also I added all the missing discovery log within the website and submitted it into the virtual machine."
        },
        "Week21":{
            "Lecture": "NOT DONE YET",
            "Practical": "NOT DONE YET"
        },
        "Week22":{
            "Lecture": "NOT DONE YET",
            "Practical": "NOT DONE YET"
        },
        "Week23":{
            "Lecture": "NOT DONE YET",
            "Practical": "NOT DONE YET"
        },
        "Week24":{
            "Lecture": "NOT DONE YET",
            "Practical": "NOT DONE YET"
        }
    };

    var list = document.getElementById("DiscLog");
    if (list.childElementCount > 0) {
        while (list.firstChild) {
            list.removeChild(list.firstChild);
            }
    }

    const discoveryBody = document.querySelector("#DiscLog");
    const discoveryTemplate = document.querySelector("#DiscLog2");
    const templateContent = discoveryTemplate.content.querySelectorAll("p");

    templateContent[0].textContent = data[val].Lecture;
    templateContent[1].textContent = data[val].Practical;

    discoveryBody.appendChild(document.importNode(discoveryTemplate.content, true));
}

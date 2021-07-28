const contact =  document.querySelector("#contact");
const work =  document.querySelector("#work");
const projects =  document.querySelector("#projects");
const about =  document.querySelector("#about");
const outPut =  document.querySelector("#output");

about.addEventListener('click', () => {
    outPut.innerHTML = '<h2>About Me</h2>' 
    +'<p>Am still learning and preparing for a race that has been going on between software engineers who are striving to build better programs.</p>'
    + '<h2>Favourite Quote</h2>' +'<p>“Start where you are. Use what you have. Do what you can.”</P>';
});

contact.addEventListener('click', () => {
    outPut.innerHTML = '<h2>Call Me/SMS</h2>' +'<a class="tel-number" href="tel: 0748965854">0748965854</a>' + '<hr>' + '<h2>Contact Me</h2>'
    + '<a target="_blank" href="mailto: mwangiantony247@gmail.com"><img class="social-img" src="images/gmail.png" alt="gmail"></a>'
    + '<a target="_blank" href="http:www.instagram.com/nani_dangerous"><img class="social-img" src="images/instagram.png" alt="instagram"></a>'
    + '<a target="_blank" href="https://twitter.com/MrRed254"><img class="social-img" src="images/twitter.png" alt="twitter"></a>'
    + '<a target="_blank" href="https://wa.me/+254748965854"><img class="social-img" src="images/whatsapp.png" alt="twitter"></a>';
});

work.addEventListener('click', () => {
    outPut.innerHTML = '<h2>WorkPlace</h2>' +'<p>Student</p>'+ '<h2>High School</h2>' + '<p>Muguga High School</p>'
    +'<h2>College/University</h2>' + '<p>Not joined yet</p>';
});

projects.addEventListener('click', () => {
    outPut.innerHTML = '<h2>Projects Done</h2>' + '<a class="quote-generator" href="https://mwangiantony.github.io/quotes.com/" target="_blank">Quote Generator</a>'
    + '</br>' + '<a class="quote-generator" href="https://mrndoch254.github.io/mr.ndoch.com/" target="_blank">Mr. Ndoch Portfolio</a>';
});

function fetchNews() {
    fetch('http://localhost:3000/Gelatolist')
    .then((response) => response.json())
    .then((json) => {console.log(json);json.forEach(item =>addCard(item.flavor,item.description,item.image))}); //this works because the function newscars is not defined by let or const
}
fetchNews()



    function addCard(text, body, image) {
    // clone the template
    const template = 
    document.getElementById("card-template")
    .content.cloneNode(true);
    // populate the template
    template.querySelector('.card-title').innerText = 
    text;
    template.querySelector('.card-text').innerText = 
    body;
    template.querySelector('.card-image').src = 
    image;
    // include the populated template into the page
    document.querySelector('#card-list')
    .appendChild(template);
    }
data.forEach(item =>addCard(item.flavor,item.description));
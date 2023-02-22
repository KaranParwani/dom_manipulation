
// get_element by id 
const get_element_id = document.getElementById('heading');  

// console.log(some_variable);

const get_element_tagname = document.getElementsByTagName('h2');

// console.log(get_element_tagname);

// this will return all the tags which has h1 heading and we can access them by indexing
const element_by_tagname = document. getElementsByTagName('h1');
  
//  get the element by class name
const class_name = document.getElementsByClassName('class_name');

// query selector
// for class
const query_selector = document.querySelector('.heading');

// for id
const query_selector_id = document.querySelector('#heading');

// query selector all
// same as the above 
const query_selector_all = document.querySelectorAll('.heading');

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Traverse through DOM

 // 1. Child Node
const child_element = document.querySelector('.child');
// console.log(child_element);

const parent_class = child_element.parentNode;
// console.log(parent_class);

// 2. Parent Node
const parent_element = document.querySelector('.parent');
// console.log(parent_element.childNodes);

// 3. Next Element Sibling
// console.log(child_element.nextElementSibling);

// 3. Previous Element Sibling
// console.log(child_element.previousElementSibling);


/////////////////////////////////////////////////////////////////////////////////////////////////////


// DOM manipulation

const dom_manipulate = document.querySelector('.one');
dom_manipulate.innerHTML = 'performing the DOM manipulation';

dom_manipulate.style.color = 'Red';

dom_manipulate.style.fontSize = '10px';

// console.log(dom_manipulate)


////////////////////////////////////////////////////////////////////////////////////////////////////////


// CREATE / ADD elements using JS

const parent_ele = document.querySelector('.create_elements'); 

// from here you can create any element of your choice in HTML eg: image, button
const create_elements = document.createElement('h1');

// from this we can add class to the element
create_elements.classList.add('title');

// from this we can remove the class from the element
create_elements.classList.remove('title');

create_elements.innerHTML = 'Added by Javascript';
parent_ele.appendChild(create_elements);

// console.log(create_elements);


// Adding a new element / child

const new_child = document.createElement('h3');
new_child.innerHTML = 'New Element has been created';

parent_ele.appendChild(new_child);


// we can also add the element before or after the desired element

const adjecsent_child = document.createElement('h3');
adjecsent_child.innerHTML = 'Before the desired element';

// new_child.insertAdjacentElement('beforebegin',  adjecsent_child);

new_child.insertAdjacentElement('beforebegin',  adjecsent_child);


// DOM events

const change_button = document.querySelector('#btn');
const some_heading = document.querySelector('#some_heading');


change_button.addEventListener('click', function () {
    some_heading.style.fontSize = '10px';
    some_heading.style.color = 'Red';
    some_heading.innerHTML = 'Got changed';
}) 


// TURN ON OFF THE BULB

const bulb_switch = document.querySelector('#bulbSwitch');
const bulb = document.querySelector('#bulb');


bulb_switch.addEventListener('click', function () {
    
    // console.log(bulb.src);

    if (bulb.src.match('off')) {
        bulb.src = './bulb-on.gif';
        bulb_switch.innerHTML = 'Turn OFF'; 
    }
    
    else {
        bulb.src = './bulb-off.gif';
        bulb_switch.innerHTML = 'Turn ON'; 
    }

})

// API

URL = 'https://jsonplaceholder.typicode.com/albums/'

page_no = 1

variable_name = 'photos'

const root = document.querySelector('#root');
const fetch_data = document.querySelector('#fetch');


// STEP 1 - fetch method will hit the URL we have passed
// STEP 2 - with the help of THEN keyword the response will be stored in a temporary variable called response
// STEP 3 - then whatever data we have to display, Image or something else, a function made by us can be called

fetch_data.addEventListener('click', function () {
    fetch(URL + page_no + '/' + variable_name).
        then((response) => response.json()).
            then((items) => {displayImages(items);
    });
});        


// FUNCTION TO DISPLAY IMAGES

function displayImages(items) {
    
    console.log(items.length);

    for(let i = 0; i < items.length; i++) {
        
        const root = document.querySelector('.root');
        const album_title = document.createElement('h1');
        
        album_title.innerHTML = items[i].title;
        root.appendChild(album_title);       
    }    
}
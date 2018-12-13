// Selecting the elements already here inside the DOM
const pageElt                 = document.querySelector('.page');
const pageHeader              = document.querySelector('.page-header');
const studentList             = document.querySelector('.student-list');
const studentsItem            = document.querySelectorAll('.student-item');


// Creating DOM Elements
const studentSearchContainer  = document.createElement('div');
const searchInput             = document.createElement('input');
const searchButton            = document.createElement('button');
const notFoundTitle           = document.createElement('h3');
const paginationContainer     = document.createElement('div');
const paginationList          = document.createElement('ul');


// Adding classes, attributes & texts when needed
studentSearchContainer.classList.add('student-search');
searchInput.setAttribute('placeholder', 'Search for students...');
searchButton.textContent = "Search";
notFoundTitle.textContent = 'Nope, this name is not present';
paginationContainer.className = 'pagination';


// Adding the elements to the parent node element first
studentSearchContainer.appendChild(searchInput);
studentSearchContainer.appendChild(searchButton);
paginationContainer.appendChild(paginationList);
// Then adding them to the DOM
  // The not found title, by default, hidden
pageElt.insertBefore(notFoundTitle, studentList);
notFoundTitle.className = 'hidden';
  // Add the search box
pageHeader.appendChild(studentSearchContainer);
document.querySelector('.page').appendChild(paginationContainer);


// Return the total number of pages
const numPages = () => Math.ceil(studentsItem.length / 10) - 1;


// Return the students selected by their range
const displayResults = (begin, end) => {
  // First hide all the students
  for (let y = 0; y < studentsItem.length; y++) {
    studentsItem[y].className = 'not-active';
  }
  // Then show those are needed
  for (let i = begin; i <= end; i++) {
    studentsItem[i].className = 'student-item cf';
  }
};


// When a pagination list item is clicked
const setActiveClass = (target) => {
  const paginationAnchors = paginationList.querySelectorAll('a');
  // First, remove all the active class
  for (let i = 0; i < paginationAnchors.length; i++) {
    paginationAnchors[i].className = '';
  }
  // Then, append the class to the item clicked
  target.className = 'active';
};


// Create the number of anchors needed
const pagination = () => {
  for (let i = 0; i <= numPages(); i++) {
    // First create the elements
    let item = document.createElement('li');
    let anchor = document.createElement('a');
    // Then the text
    anchor.textContent = i + 1;
    // Then add them
    item.appendChild(anchor);
    paginationList.appendChild(item);
    // Then the event listener
    anchor.addEventListener('click', function(event) {
        // If this is the latest page, show only the last item
        if (i === numPages()) {
            let startAt = i * 10;
            let finishAt = studentsItem.length - 1;
            displayResults(startAt, finishAt);
        // For the previous page, do this
        } else {
            let startAt = i * 10;
            let finishAt = startAt + 10 - 1;
            displayResults(startAt, finishAt);
        }

        // Set the active class statement when this class is clicked
        setActiveClass(this);
    });
  }
};


// The search function
const searchForAName = () => {
  // Asigning the search input value
  const searchText = searchInput.value.toLowerCase();
  // If the search input is not filled in, show all students
  if (searchText.length === 0) {
    for (let i = 0; i < studentsItem.length; i++) {
      let studentContainer = studentsItem[i];
      studentContainer.className = 'student-item cf';
      notFoundTitle.className = 'hidden';
      paginationContainer.className = 'pagination';
    }
    // And reboot the pagination system
    displayResults(0, 9);
    setActiveClass(paginationList.querySelectorAll('a')[0]);
  // Else search for the name
  } else {
    // Loop into the studentsArray in order to search for a name
    for (let i = 0; i < studentsItem.length; i++) {
      // Take the name within the h3 tag, build the variables needed
      let studentContainer  = studentsItem[i];
      let studentFullName   = studentsItem[i].querySelector('h3').textContent;
      studentFullName       = studentFullName.split(' ');
      let firstName         = studentFullName[0].toLowerCase();
      let lastName          = studentFullName[1].toLowerCase();
      // Then display the students who match
      if ( (firstName === searchText) || (lastName === searchText) ) {
        studentContainer.className = 'student-item cf';
      } else {
        // When student does not match, hide it
        studentContainer.className = 'not-active';
      }
    }

    // If all student are hidden, show not found title
    if (document.querySelectorAll('.not-active').length === studentsItem.length) {
      notFoundTitle.className = '';
      paginationContainer.className = 'hidden';
    // Else, hide the not found title
    } else {
      notFoundTitle.className = 'hidden';
      paginationContainer.className = 'hidden';
    }
  }

  // Clean the input text
  searchInput.value = '';
} // End: searchForAName function


// Create the event handlers
searchButton.onclick = searchForAName;


// When the page loads, show the first results
window.onload = () => {
    pagination();
    // By default, when the page loads, the first page is always selected
    displayResults(0, 9);
    // And the style is applied to its relative anchor.
    paginationList.querySelector('a').className = 'active';
};

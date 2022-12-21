{\rtf1\ansi\ansicpg1252\cocoartf2706
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 \
\
<!-- JavaScript for interactivity -->\
<script>\
  // Get references to the form and list elements\
  const form = document.querySelector('#todo-form');\
  const list = document.querySelector('#todo-list');\
\
  // Add a submit event listener to the form\
  form.addEventListener('submit', (event) => \{\
    // Prevent the form from refreshing the page\
    event.preventDefault();\
\
    // Get the value of the todo input field\
    const todo = document.querySelector('#todo-input').value;\
\
    // Add a new list item with the todo text and checkbox\
    const item = document.createElement('li');\
    item.innerHTML = `\
      <input type="checkbox">\
      <label>$\{todo\}</label>\
      <button>Delete</button>\
    `;\
\
    // Add the new item to the list\
    list.appendChild(item);\
\
    // Clear the todo input field\
    document.querySelector('#todo-input').value = '';\
  \});\
</script>\
}
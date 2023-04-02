{\rtf1\ansi\ansicpg1252\cocoartf2708
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Smooth scrolling for navigation links\
document.querySelectorAll('a[href^="#"]').forEach(anchor => \{\
    anchor.addEventListener('click', function (event) \{\
        event.preventDefault();\
        document.querySelector(this.getAttribute('href')).scrollIntoView(\{\
            behavior: 'smooth'\
        \});\
    \});\
\});\
\
// Form submission\
document.querySelector('form').addEventListener('submit', function (event) \{\
    event.preventDefault();\
\
    const name = document.getElementById('name').value;\
    const email = document.getElementById('email').value;\
    const message = document.getElementById('message').value;\
\
    console.log(`Name: $\{name\}`);\
    console.log(`Email: $\{email\}`);\
    console.log(`Message: $\{message\}`);\
\
    alert('Thank you for your message!');\
\
    // Clear form fields\
    document.getElementById('name').value = '';\
    document.getElementById('email').value = '';\
    document.getElementById('message').value = '';\
\});\
}
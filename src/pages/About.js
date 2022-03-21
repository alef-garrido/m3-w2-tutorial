import React from 'react';

function About() {
  return (
    <div className="about-container">
      <h1>About this App</h1>
      <p>
        `
        In this app, you can add, delete, submit and edit items.
        To edit items, simply double click on it.
        Once you are done, press the enter key to resubmit.
        This app will persist your data in the browser local storage.
        So whether you reload, close your app or reopened it,
        you still have access to your to-dos items.
        `
      </p>
      <h2>About the Author</h2>
      <p>
        `
        This app was developed by Alef-Garrido (based on Ibas Majid&aposs React tutorial).
        I&aposm open to freelance Gigs. So go ahead and connect with me on Twitter @alef-garrido.
        `
      </p>
    </div>
  );
}

export default About;

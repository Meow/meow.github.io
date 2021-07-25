import React from "react";

function CharactersPage(_props) {
  return <div className="description">
    <h1><i className="fa fa-dog"></i> My characters</h1>
    <p>All of the characters linked here are my own and have been designed by me.</p>
    <div className="block block--danger block--solid">
      <div className="block__content">
        <i className="fa fa-info-circle"></i> This page will be updated later with a list of my characters.
      </div>
    </div>
    <div className="block block--warning block--solid">
      <div className="block__content">
        <strong>While I cannot prevent you from doing anything, I'd still like to ask you the following:</strong>
        <ul>
          <li>Do not roleplay publicly as my characters</li>
          <li>Do not publish drawings of my characters in scenarios I would dislike (please ask me if you're unsure!)</li>
          <li>Do not claim my characters as your own</li>
        </ul>
      </div>
    </div>
    <p>Most of my characters are very meaningful to me, and sit in a special place in my heart. I'd love for them to bring you joy as well, but please be considerate to me, okay?</p>
  </div>;
}

export default CharactersPage;

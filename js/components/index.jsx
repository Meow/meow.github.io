import React from "react";

class Index extends React.Component {
  render() {
    return <div className="description">
      <h1>Luna, aka Nighty Cloud</h1>
      <p>Artist, programmer, and many other things.</p>
      <h3><i className="fa fa-code"></i> Programmer</h3>
      <p>I've been coding since 2011, starting off with Garry's Mod Lua, trying my hand at game development with Unreal Engine, and ultimately moving on to web development. In 2017 I was invited to work on Derpibooru, an image hosting site dedicated to the My Little Pony cartoon, which caused my web development and sysadmin skills to skyrocket, turning me into a fairly competent systems administrator and web developer... hopefully. I'm experienced with Ruby, Lua, C (and coincidentally C++), as well as most of web dev stack (CSS, HTML, SQL, and such).</p>
      <p>Before web development, game development was my passion, and it still remains one of my "guilty pleasures". I've been coding some simple personal 2D games, drawing sprites and making silly stories. I've been looking to also get into VR game development, but have been postponing this plan until Source 2 SDK becomes available to the general public.</p>
      <h3><i className="fa fa-paint-brush"></i> Artist</h3>
      <p>I've been drawing since 2014, not being too consistent with my art, however trying my best to improve and learn new things, never refusing a challenge when it arose. My main motivation for art is to just make others happy, or otherwise bring you fun and enjoyment through my drawings!</p>
      <p>I mostly draw digitally using a drawing tablet, but I'm also quite proficient with drawing using regular pen and pencil, as well as markers. I often find myself sketching on whatever piece of paper is available to me while waiting on things.</p>
      <h3><i className="fa fa-brain"></i> Personality</h3>
      <p>I am fairly introverted, but that doesn't stop me from enjoying a good conversation with my friends. I just have a lot of trouble making contact and getting to know new people. If I get into the right groove, I'll probably turn into a chatterbox and reveal all of my secrets to you on accident.</p>
      <p>I've always embraced change and tried new things with pleasure. If I don't know something, my first reaction is to find out information about it. If someone tells me something, I'd wish to find out why it is so. This curiousity and attitude have let me experience many things in life which I otherwise may have missed, picking up random hobbies like music making, writing, pottery, 3D modelling, and a lot more. I may not have gotten good at any of it, but it's all about diversifying myself, learning and having fun!</p>

      <h1>More...</h1>
      <div className="block block--information block--solid">
        <div className="block__content">
          <i className="fa fa-question-circle"></i> <strong>Wish to know more about me?</strong> Click the links above!
        </div>
      </div>
    </div>;
  }
}

export default Index;

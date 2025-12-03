import React from "react";

class Index extends React.Component {
  render() {
    return <div className="description">
      <div className="block">
        <div className="block__content">
          <div className="avatar__container">
            <div className="avatar">
              <img src="/assets/avatar.png"></img>
            </div>
            <div className="avatar__description">
              <h1>Nighty Cloud</h1>
              <h3>Luna • 26 • F • Germany</h3>
              <p>Artist, programmer, <s>somewhat crappy</s> web designer, witch of technical operations, part-time fox, full-time chaotic neutral, full stack (whatever that means), fully stacked, stacks the stacks of stacky stuffs, amateur progamer on sundays, apparently also electrician if half of your charger gets stuck in the power socket.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="block__header">
          <i className="fa fa-code"></i> Programmer
        </div>
        <div className="block__content">
          <p>I've been coding since 2011, starting off with Garry's Mod Lua, trying my hand at game development with Unreal Engine, and ultimately moving on to web development. In 2017 I was invited to work on Derpibooru, an image hosting site dedicated to the My Little Pony cartoon, which caused my web development and sysadmin skills to skyrocket, turning me into a fairly competent systems administrator and web developer... hopefully. I'm experienced with Ruby, Lua, C (and coincidentally C++), as well as most of web dev stack (CSS, HTML, SQL, and such).</p>
          <p>Before web development, game development was my passion, and it still remains one of my "guilty pleasures". I've been coding some simple personal 2D games, drawing sprites and making silly stories. I've been looking to also get into VR game development, but have been postponing this plan until Source 2 SDK becomes available to the general public.</p>
        </div>
      </div>
      <div className="block">
        <div className="block__header">
          <i className="fa fa-paint-brush"></i> Artist
        </div>
        <div className="block__content">
          <p>I draw pretty much at least once a week since 2014. I mainly draw stylized animals, primarily related to the furry fandom. The hardest thing about art is finding time to do it between all the other hobbies and projects I need to work on, but even so I usually do manage to do it at least once a week.</p>
          <p>I have always had a love and hate relationship with art. On one hand, I consider my art nice looking and I'm happy about any self-improvement I achieve, but on the other any job prospects for artists are in very short supply, and my situation would be dire if I focused exclusively on making artwork. Additionally I am quite sensitive to negative feedback about my art, so it's probably best if I don't publish anything I am actually proud of.</p>
          <p>There are people who like my art, there are people who told me I am horrible at it and would never amount to anything. Overall, I am just tired of not progressing any further. My art feels like it's in a state of stagnation and I lack talent at this moment to bring it around. Perhaps one day I'll be able to try new things and improve a lot, but I simply don't have time for that right now.</p>
        </div>
      </div>
      <div className="block">
        <div className="block__header">
          <i className="fa fa-brain"></i> Personality
        </div>
        <div className="block__content">
          <p>I am fairly introverted, but that doesn't stop me from enjoying a good conversation with my friends or really holding a discussion when I need to. I just have trouble making contact and getting to know new people. However, if I get into the right groove, I'll probably turn into a chatterbox and reveal all of my secrets to you on accident.</p>
          <p>I've always embraced change and tried new things with pleasure. If I don't know something, my first reaction is to find out more about it. If someone tells me something, I'd wish to find out why it is so. This curious attitude has allowed me to gain knowledge and experience which I otherwise may have missed. Over the years, I ended up picking up random hobbies like music making, writing, pottery, 3D modelling, and many more. I may not have gotten good at any of them, but I am grateful for all the fun I had, and it helped make my days more exciting.</p>
        </div>
      </div>
      <div className="block">
        <div className="block__header">
          <i className="fa fa-circle-question"></i> More?
        </div>
        <div className="block__content">
          <p><strong>Do you wish to know more about me?</strong> Then take a look at the links at the top of the page!</p>
        </div>
      </div>
    </div>;
  }
}

export default Index;

import React from "react";

class Index extends React.Component {
  render() {
    return (
      <div className="description">
        <div className="block">
          <div className="block__content">
            <div className="avatar__container">
              <div className="avatar">
                <img src="/assets/avatar.png"></img>
              </div>
              <div className="avatar__description">
                <h1>Nighty Cloud</h1>
                <h3>Luna • 27 • F • Germany</h3>
                <p>
                  Artist, programmer, <s>somewhat crappy</s> web designer, witch
                  of technical operations, part-time fox, full-time chaotic
                  neutral, full stack (whatever that means), fully stacked,
                  stacks the stacks of stacky stuffs, amateur progamer on
                  sundays, apparently also electrician if half of your charger
                  gets stuck in the power socket.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="block">
          <div className="block__header">
            <i className="fa fa-code"></i> Programmer
          </div>
          <div className="block__content">
            <p>
              I've been coding since 2011, starting off with Garry's Mod Lua,
              trying my hand at game development with Unreal Engine, and
              ultimately moving on to web development. In 2017 I was invited to
              work on Derpibooru, an image hosting site dedicated to the My
              Little Pony cartoon, which caused my web development and sysadmin
              skills to develop at an exponential pace, turning me into a fairly
              competent systems administrator and web developer, as well as
              giving me very valuable hands-on DevOps experience. I'm familiar
              with Ruby, PHP, Lua, C/C++, Rust, as well as most of web dev stack
              (CSS, HTML, SQL, JavaScript, etc).
            </p>
            <p>
              Coding is one of my primary skills, and I enjoy tinkering and
              learning new things. I am always looking for new challenges and
              opportunities. I am no stranger to learning on the job and
              thinking on my feet. Even if I don't know something when I start,
              I will make it a goal to learn it and become proficient at it. I
              am a fast learner!
            </p>
          </div>
        </div>
        <div className="block">
          <div className="block__header">
            <i className="fa fa-paint-brush"></i> Artist
          </div>
          <div className="block__content">
            <p>
              I draw pretty much at least once a week since 2014. I mainly draw
              stylized animals, primarily related to the furry fandom. The
              hardest thing about art is finding time to do it between all the
              other hobbies and projects I need to work on, but even so I
              usually do manage to do it at least once a week.
            </p>
            <p>
              I have always had a deep passion for art and drawing, and have
              been striving to improve my skills over the years. Social media
              following has never really been of priority to me, I like to draw
              for myself and my own fun, not for some number on a website that
              can very well decide that furries aren't okay and delete my
              account and all my progress with it. Nevertheless, I always strive
              to improve the quality of my art and learn new techniques. I am
              open to constructive criticism and feedback!
            </p>
            <p>
              Thanks to my art skills, I do have a keen eye for design and
              colors. I have spent some time learning color theory and design
              principles. Composition, perspective, lighting and other aspects
              of art theory come naturally to me. This has indirectly helped me
              when designing websites and user interfaces. I am familiar with
              the principles of design and can apply them to my work. I am also
              familiar with accessibility and usability principles, and always
              strive to make sure my websites are readable and accessible by
              everyone.
            </p>
          </div>
        </div>
        <div className="block">
          <div className="block__header">
            <i className="fa fa-brain"></i> Personality
          </div>
          <div className="block__content">
            <p>
              I am fairly introverted, but that doesn't stop me from enjoying a
              good conversation with my friends or really holding a discussion
              when I need to. I just have trouble making contact and getting to
              know new people. However, if I get into the right groove, I'll
              probably turn into a chatterbox and reveal all of my secrets to
              you on accident.
            </p>
            <p>
              I've always embraced change and tried new things with pleasure. If
              I don't know something, my first reaction is to find out more
              about it. If someone tells me something, I'd wish to find out why
              it is so. This curious attitude has allowed me to gain knowledge
              and experience which I otherwise may have missed. Over the years,
              I ended up picking up random hobbies like music making, writing,
              pottery, 3D modelling, and many more. I may not have gotten good
              at any of them, but I am grateful for all the fun I had, and it
              helped make my days more exciting.
            </p>
          </div>
        </div>
        <div className="block">
          <div className="block__header">
            <i className="fa fa-circle-question"></i> More?
          </div>
          <div className="block__content">
            <p>
              <strong>Do you wish to know more about me?</strong> Then take a
              look at the links at the top of the page!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;

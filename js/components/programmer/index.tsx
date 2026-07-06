import ProgrammerProjects from "./_projects";
import ProgrammerLanguages from "./_languages";
import ProgrammerSkills from "./_skills";
import ProgrammerFrameworks from "./_frameworks";

function ProgrammerPage() {
  return (
    <div className="description">
      <div className="block">
        <div className="block__header">
          <i className="fa fa-code"></i> Programmer
        </div>
        <div className="block__content">
          <p>
            I've been coding since 2011, starting off with Garry's Mod Lua,
            trying my hand at game development with Unreal Engine, and
            ultimately moving on to web development. In 2017 I was invited to
            work on Derpibooru, an image hosting site dedicated to the My Little
            Pony cartoon, which caused my web development and sysadmin skills to
            skyrocket, turning me into a fairly competent systems administrator
            and web developer... hopefully. I'm experienced with Ruby, Lua, C
            (and coincidentally C++), as well as most of web dev stack (CSS,
            HTML, SQL, and such).
          </p>
          <p>
            Before web development, game development was my passion, and it
            still remains one of my "guilty pleasures". I've been coding some
            simple personal 2D games, drawing sprites and making silly stories.
            I've been looking to also get into VR game development, but have
            been postponing this plan until Source 2 SDK becomes available to
            the general public.
          </p>
        </div>
      </div>
      <div className="block">
        <div className="block__header">
          <i className="fa fa-briefcase"></i> Projects
        </div>
        <div className="block__content">
          <ProgrammerProjects />
        </div>
      </div>
      <div className="block">
        <div className="block__header">
          <i className="fa fa-question"></i> Skill Level Explanation
        </div>
        <div className="block__content">
          <ul>
            <li>
              <strong>Beginner</strong> - I have some experience with this, but
              not enough to be considered competent. I am still learning! It is
              by learning that one improves and becomes an expert.
            </li>
            <li>
              <strong>Intermediate</strong> - I am competent with this, but not
              super comfortable with it yet. I can get the job done, but it may
              take me a while to figure out the best way to do it.
            </li>
            <li>
              <strong>Advanced</strong> - I am very competent with this, and
              comfortable enough to work with it on a daily basis. I can get the
              job done efficiently. However, some knowledge is not yet entirely
              intuitive to me, and I might be slow at some things.
            </li>
            <li>
              <strong>Expert</strong> - I am extremely competent and comfortable
              with this, and could probably teach it to others. This is my area
              of expertise, and most concepts are entirely intuitive to me.
            </li>
          </ul>
        </div>
      </div>
      <div className="block">
        <div className="block__header">
          <i className="fa fa-code"></i> Languages
        </div>
        <div className="block__content">
          <ProgrammerLanguages />
        </div>
      </div>
      <div className="block">
        <div className="block__header">
          <i className="fa fa-code"></i> Skills
        </div>
        <div className="block__content">
          <ProgrammerSkills />
        </div>
      </div>
      <div className="block">
        <div className="block__header">
          <i className="fa fa-code"></i> Frameworks
        </div>
        <div className="block__content">
          <ProgrammerFrameworks />
        </div>
      </div>
      <div className="block block--information">
        <div className="block__content block__content--centered">
          <a href="https://github.com/Meow" className="logo_link">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProgrammerPage;

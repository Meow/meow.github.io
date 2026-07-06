import ProgrammerProjects from "./_projects";
import ProgrammerLanguages from "./_languages";
import ProgrammerSkills from "./_skills";
import ProgrammerFrameworks from "./_frameworks";
import ProgrammerTech from "./_technologies";
import SkillLevel from "./_skill_level";

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
            develop at an exponential pace, turning me into a fairly competent
            systems administrator and web developer, as well as giving me very
            valuable hands-on DevOps experience. I'm familiar with Ruby, PHP,
            Lua, C/C++, Rust, as well as most of web dev stack (CSS, HTML, SQL,
            JavaScript, etc).
          </p>
          <p>
            Coding is one of my primary skills, and I enjoy tinkering and
            learning new things. I am always looking for new challenges and
            opportunities. I am no stranger to learning on the job and thinking
            on my feet. Even if I don't know something when I start, I will make
            it a goal to learn it and become proficient at it. I am a fast
            learner!
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
          <ul className="skill-legend">
            <li className="skill-legend__item language--beginner">
              <SkillLevel level="beginner" />
              <span className="skill-legend__desc">
                I have some experience with this, but not enough to be
                considered competent. I am still learning! It is by learning
                that one improves and becomes an expert.
              </span>
            </li>
            <li className="skill-legend__item language--intermediate">
              <SkillLevel level="intermediate" />
              <span className="skill-legend__desc">
                I am competent with this, but not super comfortable with it yet.
                I can get the job done, but it may take me a while to figure out
                the best way to do it.
              </span>
            </li>
            <li className="skill-legend__item language--advanced">
              <SkillLevel level="advanced" />
              <span className="skill-legend__desc">
                I am very competent with this, and comfortable enough to work
                with it on a daily basis. I can get the job done efficiently.
                However, some knowledge is not yet entirely intuitive to me, and
                I might be slow at some things.
              </span>
            </li>
            <li className="skill-legend__item language--expert">
              <SkillLevel level="expert" />
              <span className="skill-legend__desc">
                I am extremely competent and comfortable with this, and could
                probably teach it to others. This is my area of expertise, and
                most concepts are entirely intuitive to me.
              </span>
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
          <i className="fa fa-code"></i> Frameworks
        </div>
        <div className="block__content">
          <ProgrammerFrameworks />
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
          <i className="fa fa-code"></i> Technologies
        </div>
        <div className="block__content">
          <ProgrammerTech />
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

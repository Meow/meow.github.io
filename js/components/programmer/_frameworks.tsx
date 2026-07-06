function ProgrammerFrameworks() {
  return (
    <table className="projects">
      <thead>
        <tr>
          <th></th>
          <th>
            <i className="fa fa-dumbbell"></i> Skill Level
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="language--expert">
          <td>Ruby on Rails</td>
          <td>Expert</td>
        </tr>
        <tr className="language--advanced">
          <td>Phoenix (Elixir)</td>
          <td>Advanced</td>
        </tr>
        <tr className="language--intermediate">
          <td>Laravel</td>
          <td>Intermediate</td>
        </tr>
        <tr className="language--expert">
          <td>
            NodeJS (not really a framework but I thought I'd put this here)
          </td>
          <td>Expert</td>
        </tr>
        <tr className="language--advanced">
          <td>React</td>
          <td>Advanced</td>
        </tr>
        <tr className="language--advanced">
          <td>VueJS</td>
          <td>Advanced</td>
        </tr>
        <tr className="language--intermediate">
          <td>Bevy (Rust)</td>
          <td>Intermediate</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProgrammerFrameworks;

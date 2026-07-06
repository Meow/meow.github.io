type Level = "beginner" | "intermediate" | "advanced" | "expert";

interface SkillLevelProps {
  level: Level;
}

const LABELS: Record<Level, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  expert: "Expert",
};

function SkillLevel({ level }: SkillLevelProps) {
  return (
    <span className={`skill-badge language--${level}`}>
      <span className="skill-signal" aria-hidden="true"></span>
      {LABELS[level]}
    </span>
  );
}

export default SkillLevel;

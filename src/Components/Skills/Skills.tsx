import React, { ReactNode } from "react";
import "./Skills.scss";
import { GitHubIcon } from "../../assets/icons/GitHubIcon";

interface ISkillboxProps {
  skillHeader: string;
  SkillIcon: any;
  subSkills: string[];
}

export const Skills = () => {
  const skillsList: ISkillboxProps[] = [
    {
      skillHeader: "Frontend",
      SkillIcon: GitHubIcon,
      subSkills: ["Angular", "React", "Zustand"],
    },
    {
      skillHeader: "Backend",
      SkillIcon: GitHubIcon,
      subSkills: ["Node", "Express", "mongo"],
    },
    {
      skillHeader: "Others",
      SkillIcon: GitHubIcon,
      subSkills: ["Javascript", "Java", "Python"],
    },
  ];
  return (
    <section>
      <h1>Skills Overview</h1>
      <h4>
        I have a one and half year of experience of building and managing web
        applications that faces for than 5 lakhs of monthly active users. Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Dolor nisi inventore
        harum voluptates deserunt commodi dicta accusantium, consequatur,
        eveniet tenetur ab eius atque, quam adipisci.
      </h4>
      <div className="skills">
        {skillsList.map((skillBoxProps) => (
          <SkillBox
            skillHeader={skillBoxProps.skillHeader}
            SkillIcon={skillBoxProps.SkillIcon}
            subSkills={skillBoxProps.subSkills}
          />
        ))}
      </div>
    </section>
  );
};

const SkillBox = ({ skillHeader, SkillIcon, subSkills }: ISkillboxProps) => {
  return (
    <div className="skillbox">
      <h2>{skillHeader}</h2>

      <div className="skillbox__icon">
        <SkillIcon />
      </div>
      <div className="skillbox__skills">
        {subSkills.map((skill) => (
          <div className="skillbox__skill">{skill}</div>
        ))}
      </div>
    </div>
  );
};

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
    <section className="skills">
      {skillsList.map((skillBoxProps) => (
        <SkillBox
          skillHeader={skillBoxProps.skillHeader}
          SkillIcon={skillBoxProps.SkillIcon}
          subSkills={skillBoxProps.subSkills}
        />
      ))}
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
      {subSkills.map((skill) => (
        <div className="skillbox__skill">{skill}</div>
      ))}
    </div>
  );
};

import { skills } from "../constants";

const SkillsList = ({ filter, className }) => {

  let resultFilter;

  if (filter) {
    resultFilter = skills.filter((skill, index) => filter.find(item => item === skill) )
  }

  return (
    <>
      {filter
        ? resultFilter.map((skill, index) => (
          <li
            key={index}
            className={`bg-db px-[8px] py-[8px] text-xs font-mulish font-bold text-cream ${className ? className : ""}`}
          >
            {skill}
          </li>
        ))
        : skills.map((skill, index) => (
            <li
              key={index}
              className={`bg-db px-[10px] py-[5px] text-base font-mulish font-bold text-cream ${className ? className : ""}`}
            >
              {skill}
            </li>
          ))}
    </>
  );
};

export default SkillsList;

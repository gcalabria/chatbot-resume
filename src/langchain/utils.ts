import {
  LinkedInProfile,
  Language,
  Position,
  Education,
  Date,
  Month,
} from "@/interfaces";

function dateToText(date: Date) {
  return `${Month[date.month]} ${date.year}`;
}

function languagesToText(languages: Language[]) {
  const num_languages = languages.length;
  if (num_languages === 0) {
    return;
  }
  let text = "I can speak ";
  languages.forEach((lang, i) => {
    if (i === num_languages - 1) {
      text = text + ` and ${lang.name}.`;
    } else {
      text = text + `${lang.name} ,`;
    }
  });
  return text;
}

function positionsToText(positions: Position[]) {
  const num_positions = positions.length;
  if (num_positions === 0) {
    return;
  }
  let text = "I have worked at ";
  positions.forEach((pos, i) => {
    if (i === num_positions - 1) {
      text =
        text +
        ` and ${pos.companyName} from ${dateToText(
          pos.start
        )} until ${dateToText(pos.end)}.`;
    } else {
      text =
        text +
        `${pos.companyName} from ${dateToText(pos.start)} until ${dateToText(
          pos.end
        )},`;
    }
  });
  return text;
}

function educationsToText(educations: Education[]) {
  const num_educations = educations.length;
  if (num_educations === 0) {
    return;
  }
  let text = "My academic background includes ";
  educations.forEach((edu, i) => {
    if (i === num_educations - 1) {
      text =
        text +
        ` and ${edu.schoolName} from ${dateToText(
          edu.start
        )} until ${dateToText(edu.end)}.`;
    } else {
      text =
        text +
        `${edu.schoolName} from ${dateToText(edu.start)} until ${dateToText(
          edu.end
        )},`;
    }
  });
  return text;
}

function linkedInProfileToText(profile: LinkedInProfile) {
  let text =
    `My name is ${profile.firstName} ${profile.lastName}.` +
    `I am currently living in ${profile.geo.city}, ${profile.geo.country}.`;

  text = text + languagesToText(profile.languages);

  text = text + educationsToText(profile.educations);

  text = text + positionsToText(profile.positions);

  return text;
}

export { linkedInProfileToText };

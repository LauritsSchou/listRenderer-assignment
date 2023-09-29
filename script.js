import { initTabs } from "./tabs.js";
import * as result from "./results.js";
import * as member from "./members.js";
import * as ListRenderer from "./ListRenderer.js";
import { MemberRenderer } from "./MemberRenderer.js";
import { ResultRenderer } from "./ResultRenderer.js";

window.addEventListener("load", initApp);
let results = [];
let members = [];
async function initApp() {
  initTabs();
  await getMembers();
  const memberList = ListRenderer.construct(
    members,
    "#memberTableBody",
    MemberRenderer
  );
  memberList.render();
  await getResults();
  const resultList = ListRenderer.construct(
    results,
    "#resultTableBody",
    ResultRenderer
  );
  resultList.render();
}
async function getResults() {
  const response = await fetch("./results.json");
  const resultsJSON = await response.json();
  for (const resultData of resultsJSON) {
    const constructedResult = result.constructResult(resultData, members);

    results.push(constructedResult);
  }
}
async function getMembers() {
  const response = await fetch("./members.json");
  const membersJSON = await response.json();
  for (const memberData of membersJSON) {
    const constructedMember = member.constructMember(memberData);
    members.push(constructedMember);
  }
}
function checkResultType(result) {
  let HTML;
  if (result.isTraining() === true) {
    HTML = /*html*/ `Træning`;
    return HTML;
  } else if (result.isCompetition() === true) {
    HTML = /*html*/ `Stævne`;
    return HTML;
  }
}
function checkMemberAgeGroup(member) {
  let HTML;
  if (member.isJunior === true) {
    HTML = /*html*/ `Junior`;
    return HTML;
  } else {
    HTML = /*html*/ `Senior`;
    return HTML;
  }
}
function checkMemberStatus(member) {
  let HTML;
  if (member.active === true) {
    HTML = /*html*/ `Aktiv`;
    return HTML;
  } else {
    HTML = /*html*/ `Inaktiv`;
    return HTML;
  }
}

function translateDisciplinesToDanish(result) {
  let HTML;
  if (result.discipline === "breaststroke") {
    HTML = /*html*/ "Bryst";
    return HTML;
  } else if (result.discipline === "backstroke") {
    HTML = "Ryg";
    return HTML;
  } else if (result.discipline === "butterfly") {
    HTML = "Butterfly";
    return HTML;
  } else if (result.discipline === "freestyle") {
    HTML = "Freestyle";
    return HTML;
  }
}
function translateDateToDanish(result) {
  const date = new Date(result.date);
  const options = {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const danishDate = date.toLocaleDateString("da-DK", options);
  return danishDate;
}
function findMember(memberId) {
  const foundMember = members.find((member) => member.id === memberId);
  return foundMember;
}
export {
  findMember,
  checkMemberAgeGroup,
  checkMemberStatus,
  checkResultType,
  translateDateToDanish,
  translateDisciplinesToDanish,
};

import {
  translateDateToDanish,
  translateDisciplinesToDanish,
  checkResultType,
} from "./script.js";

const ResultRenderer = {
  render(result) {
    let name = "Ukendt medlem";
    if (result.member !== undefined) {
      name = result.member.name;
    }
    const resultHTML = /*html*/ `
    <tr>
   <td>${translateDateToDanish(result)}</td>
   <td>${name}</td>
   <td>${translateDisciplinesToDanish(result)}</td>
   <td>${checkResultType(result)}</td>
   <td>${result.originalTime}</td>
   </tr>`;
    return resultHTML;
  },
};
export { ResultRenderer };

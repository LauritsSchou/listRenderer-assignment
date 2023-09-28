import { checkMemberAgeGroup, checkMemberStatus } from "./script.js";

function construct(list, container, MemberRenderer) {
  const ListRenderer = {
    render() {
      for (const member of list) {
        const memberHTML = MemberRenderer.render();
        this.container.insertAdjacentHTML("beforeend", memberHTML);
      }
    },
  };
  const MemberRenderer = {
    render() {
      const member = this.item;
      const memberHTML = /*html*/ `
          <tr>
          <td>${member.name}</td>
          <td>${checkMemberStatus(member)}</td>
          <td>${member.birthday}</td>
          <td>${member.age}</td>
          <td>${checkMemberAgeGroup(member)}</td>
          </tr>
          `;
      return memberHTML;
    },
  };
  return ListRenderer;
}
export { construct };

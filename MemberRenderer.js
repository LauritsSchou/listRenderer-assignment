const MemberRenderer = {
  render(member) {
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
export { MemberRenderer };

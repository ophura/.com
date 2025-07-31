'use strict';

const YearOnly = Intl.DateTimeFormat(undefined, { year: 'numeric' });

document.addEventListener('DOMContentLoaded', () => {

    year.removeChild(year.firstChild);

    year.appendChild(document.createTextNode(YearOnly.format(Date.now())));
});

const VRChatAccount = 'https://vrchat.com/home/user/usr_2b4e288f-a8cb-48bc-afe9-72be97e83842';

const GitHubAccount = 'https://github.com/8chan-co/ophura.com';

console.group('related links');

console.log([location.href, VRChatAccount.href, GitHubAccount.href].join('\n'));

console.groupEnd();
const ThisWebsite = new URL('https://ophura.com');
const VRChatAccount = new URL('https://vrchat.com/home/user/usr_2b4e288f-a8cb-48bc-afe9-72be97e83842');
const GitHubAccount = new URL('https://github.com/8chan-co/ophura.com');

console.group('related links');
console.log([ThisWebsite.href, VRChatAccount.href, GitHubAccount.href].join('\n'));
console.groupEnd();
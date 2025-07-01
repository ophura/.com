'use strict';

document['addEventListener']('DOMContentLoaded', () => {

    const Element = document['getElementById']('year');

    if (!Element) return;

    if (Element['hasChildNodes']()) {

        for (const Node of Element['childNodes']) {

            if (Node['nodeType'] === Node['TEXT_NODE']) {

                Element['removeChild'](Node);
            }
        }
    }

    const Year = new this['Date']()['getFullYear']()['toString']();

    Element['appendChild'](document['createTextNode'](Year));
});

const VRChatAccount = new this['URL']('https://vrchat.com/home/user/usr_2b4e288f-a8cb-48bc-afe9-72be97e83842');

const GitHubAccount = new this['URL']('https://github.com/8chan-co/ophura.com');

console['group']('related links');

console['log']([location['href'], VRChatAccount['href'], GitHubAccount['href']]['join']('\n'));

console['groupEnd']();
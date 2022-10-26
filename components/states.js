const { atom } = require("recoil");

const openState = atom({
    key: 'isOpened',
    default: false
})


export {openState};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createUser = function (user) {
    return { uname: 'ashish', email: 'ashish@g.com', isActive: true };
};
var newUser = createUser({ uname: '', email: '', isActive: false });
console.log(newUser);

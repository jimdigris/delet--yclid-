(function () {
    let link = document.location.href;
    let key = '?yclid=';
    
    if (link.includes(key)) {
        let position = link.indexOf(key);
        let newlink = link.substr(0, position);
        document.location.href = newlink;
    }
})(); 
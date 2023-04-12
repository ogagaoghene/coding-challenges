const getElementsByAtrribute = (attribute, value) => {
    var all = document.getElementsByTagName('*');
    var found = [];

    for (var idx = 0; idx < all.length; idx++) {
        element = all[idx];
        if(element.getAttribute(attribute) === value) {
            found.push(element);
        }
    }   

    return found; 
}
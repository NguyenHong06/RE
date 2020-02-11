$(document).ready(function() {

    var link = document.querySelector('link[rel="import"]');
    var template = link.import.querySelector('template');
    var header = document.importNode(template.content.firstElementChild, true);
    var footer = document.importNode(template.content.lastElementChild, true);
    document.querySelector('#header').appendChild(header);
    document.querySelector('#footer').appendChild(footer);

});

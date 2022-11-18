document.oncopy = Event => {
    Event.preventDefault();
    Event.clipboardData.setData('text/plain','Contenido con derechos de autor ♥');
}
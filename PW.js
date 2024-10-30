function showInfo(id) {
    var infos = document.querySelectorAll('.info');

    // Primeiro, escondemos todas as informações
    infos.forEach(function(info) {
        info.style.display = 'none';
    });

    // Selecionamos a informação específica para o item clicado
    var infoToShow = document.getElementById(id + '-info');

    // Verificamos se a informação está visível; se sim, ocultamos, se não, mostramos
    if (infoToShow) {
        if (infoToShow.style.display === 'block') {
            infoToShow.style.display = 'none'; // Oculta se já estiver visível
        } else {
            infoToShow.style.display = 'block'; // Exibe se estiver oculta
        }
    }
}

// Adiciona evento de clique a cada item
var items = document.querySelectorAll('.item');
items.forEach(function(item) {
    item.addEventListener('click', function() {
        var id = this.textContent.trim(); 
        showInfo(id);
    });
});

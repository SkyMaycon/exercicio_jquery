$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();

        const adicionarTarefa = $('#adicionar-tarefa').val();
        const novoItem = $('<li></li>');

        $(`<li>${adicionarTarefa}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');

        $('li').click(function () {
            $(this).addClass('riscar');
        });
        $('adicionar-tarefa').val("");
        });
    });


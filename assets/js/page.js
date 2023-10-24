         $(document).ready(function () {
            function toggleLogoImg() {
                var logoImg = document.getElementById("logo-img");
                if (window.innerWidth <= 1200) {
                    logoImg.style.display = "block";
                } else {
                    logoImg.style.display = "none";
                }
            }

            toggleLogoImg();
            window.onresize = toggleLogoImg;
        });

        var win = navigator.platform.indexOf('Win') > -1;
        if (win && document.querySelector('#sidenav-scrollbar')) {
            var options = {
                damping: '0.5'
            }
            Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
        }

        function toggleConfig() {
            var modalMenu = document.getElementById("navbModal");
            if (modalMenu.classList.contains("show")) {
                modalMenu.classList.remove("show");
            } else {
                modalMenu.classList.add("show");
            }
        }

        function copiarLink(btn) {
            var link = btn.getAttribute("data-link");
            var input = document.createElement("input");
            input.value = link;
            document.body.appendChild(input);
            input.select();
            document.execCommand("copy");
            document.body.removeChild(input);
            alert("O link foi copiado para a área de transferência.");
        }

    function excluirLink(id) {
        Swal.fire({
            title: 'Tem certeza que deseja excluir este link?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sim, excluir!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                // Enviar solicitação de exclusão para o servidor
                $.ajax({
                    type: 'POST',
                    url: '../home/excluir_link.php',
                    data: { id: id },
                    success: function (response) {
                        // Exibir mensagem de sucesso
                        Swal.fire({
                            icon: 'success',
                            title: 'Link excluído com sucesso!',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // Recarregar a página após a exclusão
                        setTimeout(function () {
                            location.reload();
                        }, 1500);
                    },
                    error: function () {
                        // Exibir mensagem de erro
                        Swal.fire({
                            icon: 'error',
                            title: 'Erro ao excluir o link.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                });
            }
        });
    }

document.getElementById('executar-script-btn').addEventListener('click', function() {
  // Exibir a caixa de diálogo SweetAlert2 com uma barra de progresso
  Swal.fire({
    title: 'Instalando módulos',
    html: '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div></div>',
    showCancelButton: false,
    showConfirmButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    didOpen: function() {
      // Iniciar a instalação dos módulos
      installModules(function(progress) {
        // Atualizar a barra de progresso
        var progressBar = Swal.getHtmlContainer().querySelector('.progress-bar');
        progressBar.style.width = progress + '%';
        progressBar.setAttribute('aria-valuenow', progress);
      });
    }
  });
});

function installModules(progressCallback, completeCallback) {
  // Aqui você pode colocar o código para baixar e instalar os módulos
  // Use o progressCallback para atualizar a barra de progresso
  // Quando a instalação estiver concluída, chame o completeCallback
  // Exemplo:
  var progress = 0;
  var interval = setInterval(function() {
    progress += 50;
    if (progress > 100) {
      progress = 100;
      clearInterval(interval);
      completeCallback();
    }
    progressCallback(progress);
  }, 1000);
}


 $(document).ready(function () {

            $('#usuario').DataTable({
                paging: true,           // Habilita a paginação
                pageLength: 10,         // Quantidade de registros por página
                lengthMenu: [10, 25, 50, 100],   // Opções de quantidade de registros por página
                language: {             // Tradução dos textos da tabela
                    lengthMenu: "Mostrar _MENU_",
                    zeroRecords: "Nenhum registro encontrado",
                    info: "Página _PAGE_ de _PAGES_",
                    infoEmpty: "Nenhum registro disponível",
                    infoFiltered: "(filtrado de _MAX_ registros totais)"
                }
            });
        });

 


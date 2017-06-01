$(document).ready(function () {

	var agenda = {
		nome: 'Contatos Pessoais',
		contatos: [],
		adicionar: function (contato) {
			var emailValido = /^(\w+[._-]?)+@\w+(\w+[.]?)+$/; //ailton.santos@email.com
			var telefoneValido = /^\d{5}-\d{4}$/; // 98765-8765
			if (contato.nome && telefoneValido.test(contato.telefone) && emailValido.test(contato.email)) {
				for (indice in this.contatos) {
					var contatointeracao = this.contatos[indice];
					if (contatointeracao.telefone === contato.telefone) {
						throw new Error('o telefone ' + contato.telefone + ' ja existe');
					}
				}
				this.contatos.push(contato);
				this.salvar();
			} else {
				throw new Error('Erro ao adicionar o novo contato.');
			}
		},
		remover: function (telefone) {
			for (indice in this.contatos) {
				var contato = this.contatos[indice];
				if (contato.telefone === telefone) {
					this.contatos.splice(indice, 1);
					this.salvar();
					return true;
				}
			}
			throw new Error('Erro ao remover usuario');
		},

		atualizar: function (telefoneAntigo, contatoAtualizado) {
			var indiceAtualixado;

			for (indice in this.contatos) {
				var contato = this.contatos[indice];
				if (contato.telefone === telefoneAntigo) {
					indiceAtualixado = indice;
				} else if (contato.telefone === contatoAtualizado) {
					throw new Error('Erro ao adicionar o novo contato.');
				}
			}

			if (indiceAtualixado) {
				this.contatos[indiceAtualixado].nome = contatoAtualizado.nome;
				this.contatos[indiceAtualixado].email = contatoAtualizado.email;
				this.contatos[indiceAtualixado].telefone = contatoAtualizado.telefone;
				this.contatos[indiceAtualixado].pagina = contatoAtualizado.pagina;
				return true;
			}
			throw new Error('Contato nao encontrado');

		},
		listar: function () {
			this.pegarContatosSalvos();
			for (indice in this.contatos) {
				var contato = this.contatos[indice];
				criarNovoContato(contato);
			}
		},
		salvar: function () {
			var contatosString = JSON.stringify(this.contatos);
			localStorage.contatos = contatosString;
		},
		pegarContatosSalvos: function () {
			this.contatos = JSON.parse(localStorage.contatos);
		}
	};

	$('#frmCadastro').submit(function (event) {
		event.preventDefault();
		var contato = {
			nome: $('#txtNome').val(),
			email: $('#txtEmail').val(),
			telefone: $('#txtTelefone').val(),
			pagina: $('#txtPagina').val(),
		}
		if ($('#btnSubmit').val() === 'Cadastrar') {
			try {
				agenda.adicionar(contato);
				criarNovoContato(contato);
			} catch (e) {
				alert(e.message);
			}
		} else {
			var telefoneAntigo = $('#txtTelefoneAntigo').val();
			agenda.atualizar(telefoneAntigo, contato);
			atualizarContato(telefoneAntigo, contato);
			$('#btnSubmit').val('Cadastrar');
		}


		$('#txtNome').val('');
		$('#txtEmail').val('');
		$('#txtTelefone').val('');
		$('#txtPagina').val('');
	});

	var atualizarContato = function(telefoneAntigo, contatoAtualizado){
		var $caixa = $('#'.concat(telefoneAntigo));
		
		var $nome = $caixa.find('.nome');
		var $email = $caixa.find('.email');
		var $telefone = $caixa.find('.telefone');
		var $pagina = $caixa.find('.pagina');
		var $editar = $caixa.find('.btnEditar');
		var $deletar = $caixa.find('.btnDeletar');

		$caixa.attr('id', contatoAtualizado.telefone);
		$nome.text(contatoAtualizado.nome);
		$email.text(contatoAtualizado.email);
		$telefone.text(contatoAtualizado.telefone);
		$pagina.text(contatoAtualizado.pagina);
		$editar.data('telefone', contatoAtualizado.telefone);
		$deletar.data('telefone', contatoAtualizado.telefone);

	};

	var criarNovoContato = function (contato) {
		var cores = [
			'caixa-verde',
			'caixa-laranja',
			'caixa-azul',
			'caixa-roxa',
		]

		var cor = cores[Math.floor(Math.random() * cores.length)];

		var $caixa = $('<div>', { class: 'caixa-contato ' + cor, id: contato.telefone });
		var $nome = $('<h3>', { text: contato.nome, class: 'nome' });
		var $email = $('<p>', { text: contato.email, class: 'email' });
		var $telefone = $('<p>', { text: contato.telefone, class: 'telefone' });
		var $pagina = $('<p>', { text: contato.pagina, class: 'pagina' });
		var $contatos = $('#contatos');
		var $deletar = $("<span>", { class: 'btnDeletar', text: 'Deletar', 'data-telefone': contato.telefone });
		var $editar = $("<span>", { class: 'btnEditar', text: 'Editar', 'data-telefone': contato.telefone });

		$deletar.click(function (event) {
			var $btn = $(event.target);
			var telefone = $btn.data('telefone');
			var $caixa = $('#'.concat(telefone));
			try {
				agenda.remover(telefone);
				$caixa.remove();
			} catch (e) {
				alert(e.message);
			}

		});

		$editar.click(function (event) {
			var $btn = $(event.target);
			var telefone = $btn.data('telefone');
			var $caixa = $('#'.concat(telefone));

			var $nome = $caixa.find('.nome');
			var $email = $caixa.find('.email');
			var $telefone = $caixa.find('.telefone');
			var $pagina = $caixa.find('.pagina');


			$('#txtNome').val($nome.text());
			$('#txtEmail').val($email.text());
			$('#txtTelefone').val($telefone.text());
			$('#txtPagina').val($pagina.text());
			$('#txtTelefoneAntigo').val($telefone.text());
			$('#btnSubmit').val('Atualizar');
		});

		$caixa.append($nome);
		$caixa.append($email);
		$caixa.append($telefone);
		$caixa.append($pagina);
		$caixa.append($editar);
		$caixa.append($deletar);
		$contatos.append($caixa);
	}

	agenda.listar();

});
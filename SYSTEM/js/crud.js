$(function () {
    
    var operacao = "C"; // C de Cadastrar
    var selectedIndex = -1; // Item selecionado na lista
    var tableClientes = localStorage.getItem("tableClientes"); // Retorna os dados armazenados
    tableClientes = JSON.parse(tableClientes); // Converter string em objeto
    if (tableClientes == null)
        tableClientes = [];

    function Cadastrar() {
        // Obtendo os valores do HTML
        var cliente = JSON.stringify ({
            Nome: $("#txtNome").val(),
            Cpf: $("#txtCpf").val(),
            Rg: $("#txtRg").val(),
            Email: $("#txtEmail").val(),
            Telefone: $("#txtTelefone").val(),
            Celular: $("#txtCelular").val(),
            Cidade: $("#txtCidade").val(),
            Estado: $("#txtEstado").val(),
            Cep: $("#txtCep").val(),
            Rua: $("#txtRua").val(),
            Bairro: $("#txtBairro").val(),
            Numero: $("#txtNumero").val()
        });
        // Adiciona o objeto na tabela
        tableClientes.push(cliente);
        // Armazena os dados no Local Storage
        localStorage.setItem("tableClientes", JSON.stringify(tableClientes));
        // Mensagem
        alert ("Cliente Cadastrado");
        return true;    
    }
    
    function Editar() {
        tableClientes[selectedIndex] = JSON.stringify({
            Nome: $("#txtNome").val(),
            Cpf: $("#txtCpf").val(),
            Rg: $("#txtRg").val(),
            Email: $("#txtEmail").val(),
            Telefone: $("#txtTelefone").val(),
            Celular: $("#txtCelular").val(),
            Cidade: $("#txtCidade").val(),
            Estado: $("#txtEstado").val(),
            Cep: $("#txtCep").val(),
            Rua: $("#txtRua").val(),
            Bairro: $("#txtBairro").val(),
            Numero: $("#txtNumero").val()
        });
        
        localStorage.setItem("tableClientes", JSON.stringify(tableClientes));
        alert ("Cliente Editado");
        operacao = "C";
        return true;
    }
    
    function Deletar() {
        tableClientes.splice(selectedIndex, 1);
        localStorage.setItem("tableClientes", JSON.stringify(tableClientes));
       
    }
    
    function Listar() {
        $("#tbCliente").html("");
        $("#tbCliente").html (
            "<thead>" +
            "   <tr>" +
            "       <th>Nome</th>" +
            "       <th>CPF</th>" +
            "       <th>Email</th>" +
            "       <th>Celular</th>" +
            "       <th>Cidade</th>" +
            "       <th class='actions'>Ações</th>" +
            "   </tr>" +
            "</thead>" +
            "<tbody>" +
            "</tbody>"
        );
        
        for (var i in tableClientes) {
            var cli = JSON.parse(tableClientes[i]);
            $("#tbCliente tbody").append("<tr>");
                $("#tbCliente tbody").append("<td>" + cli.Nome + "</td>");
                $("#tbCliente tbody").append("<td>" + cli.Cpf + "</td>");
                $("#tbCliente tbody").append("<td>" + cli.Email + "</td>");
                $("#tbCliente tbody").append("<td>" + cli.Celular + "</td>");
                $("#tbCliente tbody").append("<td>" + cli.Cidade + "</td>");
                $("#tbCliente tbody").append("<td> <a class='btn btn-success btn-xs' href='detalhes.html'>Visualizar</a> <a class='btn btn-warning btn-xs botaoEditar' href='#'>Editar</a> <a class='btn btn-danger btn-xs botaoDeletar' href='#' data-toggle='modal' data-target='#delete-modal'>Excluir</a>" + "</td>");
            $("#tbCliente tbody").append("</tr>");
        }
    }
        
        $("#formCliente").on("submit", function() {
            if (operacao == "C") {
                return Cadastrar();
            }
            else {
                return Editar();
            }
        });
    
        Listar();
        
        $("#tbCliente").on("click", ".botaoEditar", function() {
            operacao = "E"; // E de Editar
            
            selectedIndex = parseInt($(this).attr("alt"));
            var cli = JSON.parse(tableClientes[selectedIndex]);
            
//            $("#txtNome").val(cli.Nome);
//            $("#txtCpf").val(cli.Cpf);
            
            document.getElementById("txtNome").value = cli.Nome;
            document.getElementById("txtCpf").value = cli.Cpf;
            document.getElementById("txtRg").value = cli.Rg;
            document.getElementById("txtEmail").value = cli.Email;
            document.getElementById("txtTelefone").value = cli.Telefone;
            document.getElementById("txtCelular").value = cli.Celular;
            document.getElementById("txtCidade").value = cli.Cidade;
            document.getElementById("txtEstado").value = cli.Estado;
            document.getElementById("txtCep").value = cli.Cep;
            document.getElementById("txtRua").value = cli.Rua;
            document.getElementById("txtBairro").value = cli.Bairro;
            document.getElementById("txtNumero").value = cli.Numero;
            $("#txtNome").focus();
        });
        
        $("#tbCliente").on("click", ".botaoDeletar", function() {
            selectedIndex = parseInt($(this).attr("alt"));
            
            Deletar();
            Listar();
        });
});
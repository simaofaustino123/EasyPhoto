$(function () {

function Listar() {
    
        var operacao = "C"; // C de Cadastrar
    var selectedIndex = -1; // Item selecionado na lista
    var tableClientes = localStorage.getItem("tableClientes"); // Retorna os dados armazenados
    tableClientes = JSON.parse(tableClientes); // Converter string em objeto
    if (tableClientes == null)
        tableClientes = [];
        
    
        $("#tbCliente").html("");
        $("#tbCliente").html (
            "<tread>" +
            "   <td>" +
            "       <th>Nome</th>" +
            "       <th>CPF</th>" +
            "       <th>RG</th>" +
            "       <th>Email</th>" +
            "       <th>Telefone</th>" +
            "       <th>Celular</th>" +            
            "       <th>Cidade</th>" +
            "       <th>Estado</th>" +
            "       <th>CEP</th>" +
            "       <th>Rua</th>" +
            "       <th>Bairro</th>" +
            "       <th>Numero</th>" +
            "   </td>" +
            "</thead>" +
            "<tbody>" +
            "</tbody>"
        );
        
        for (var i in tableClientes) {
            var cli = JSON.parse(tableClientes[i]);
            $("#tbCliente tbody").append("<tr>");
                $("#tbCliente tbody").append("<td>" + cli.Nome + "</td>");
                $("#tbCliente tbody").append("<td>" + cli.Cpf + "</td>");
                $("#tbCliente tbody").append("<td>" + cli.Rg + "</td>");
                $("#tbCliente tbody").append("<td>" + cli.Email + "</td>");
                $("#tbCliente tbody").append("<td>" + cli.Telefone + "</td>");
                $("#tbCliente tbody").append("<td>" + cli.Celular + "</td>");
                $("#tbCliente tbody").append("<td>" + cli.Cidade + "</td>");
                $("#tbCliente tbody").append("<td>" + cli.Estado + "</td>");
                $("#tbCliente tbody").append("<td>" + cli.Cep + "</td>");
                $("#tbCliente tbody").append("<td>" + cli.Rua + "</td>");
                $("#tbCliente tbody").append("<td>" + cli.Bairro + "</td>");
                $("#tbCliente tbody").append("<td>" + cli.Numero + "</td>");
                  $("#tbCliente tbody").append("<td> <a class='btn btn-success btn-xs' href='detalhes.html'>Visualizar</a>" + "</td>");
                
            $("#tbCliente tbody").append("</tr>");
        }
        
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
            document.getElementById("txtCidade").value = cli.Cidade;
            document.getElementById("txtEstado").value = cli.Estado;
            document.getElementById("txtCep").value = cli.Cep;
            document.getElementById("txtRua").value = cli.Rua;
            document.getElementById("txtBairro").value = cli.Bairro;
            document.getElementById("txtNumero").value = cli.Numero;
            $("#txtNome").focus();
        });
        
    };
    
});
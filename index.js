( async () => {

    const database = require('./db');
    const cadastro = require('./cadastro');
    await database.sync();



    const novoCadastro = await cadastro.create({
        nome: 'Giovanna Feracini Souza',
        cpf: '456.110.582-00',
        unsername: 'ferracinigi',
        endereco: 'Rua dos meninos 552',
        celular: '(11) 9 4970-1896',
        area: 'TI',
        cargo: 'Estagiário em TI',
        senha: 'Gi09091996'
    })

    console.log (novoCadastro)

    const cadastros = await cadastro.findByPk(1);
    console.log(cadastros);

    await cadastros.destroy();

    // cadastros.endereco = 'fdgfdgfdgdfgdfgdf';
    // await cadastros.save();
})();

const isValidFields = () => {
  return  document.getElementById('form').reportValidity()
}

const SalvarCadastro = () =>{
    if(isValidFields()){
        const cadastro = {
            nome: document.getElementById('nome').value,
            cpf: document.getElementById('cpf').value,
            unsername: document.getElementById('unsername').value,
            cep: document.getElementById('cep').value,
            bairro: document.getElementById('bairro').value,
            cidade: document.getElementById('cidade').value,
            estado: document.getElementById('estado').value,
            ibge: document.getElementById('ibge').value,
            numero: document.getElementById('num').value,
            complemento: document.getElementById('comp').value,
            celular: document.getElementById('cel').value,
            area: document.getElementById('area').value,
            cargo: document.getElementById('cargo').value,
            senha: document.getElementById('senha').value

        }
        novoCadastro(cadastro)
    }
}
//calcular o TOTAL(quantidade adquirida * preço unitário) / VALOR (desconto) / TOTAL A PAGAR(total a pagar= total - desconto)
    // quantidade <== 5 desconto de 2%
    // quantidade > 5 e quantidade <=10 2%
    // quantidade > 10 5%

class Produto {

    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
        this.editId = null;
        
    }

    salvar() {
        let produto = this.lerDados();
       
        if(this.Validacao(produto)) {
            if(this.editId == null) {
                this.adicionar(produto);
                this.cancelar();
                
            }else {
                this.atualizar(this.editId, produto);
                this.cancelar();
            }
            
        }
        this.listaTabela();
    }

    listaTabela(){
        let tbody = document.getElementById('tbody');
        
        

        tbody.innerText = '';
        for(let i = 0; i < this.arrayProdutos.length; i++){
            
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_quantidade = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_deletar = tr.insertCell();
            let td_editar = tr.insertCell();
            

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_quantidade.innerText = this.arrayProdutos[i].quantidade < 10 ? + '0' + this.arrayProdutos[i].quantidade : this.arrayProdutos[i].quantidade; 
            td_valor.innerText = 'R$' + this.arrayProdutos[i].valor;
            td_deletar.innerText = '🗑️';
            td_deletar.setAttribute("onclick", "produto.deletar("+ this.arrayProdutos[i].id +")");
            td_editar.innerText = '✏️';
            td_editar.setAttribute("onclick", "produto.editar("+ JSON.stringify(this.arrayProdutos[i]) +")");
    
        }
    }

    adicionar(produto){
        produto.valor = parseInt(produto.valor);
        this.arrayProdutos.push(produto);
        this.id++;
    }

    cancelar(){
        produto.nomeProduto = document.getElementById('name').value = '';
        produto.quantidade = document.getElementById('quantidade').value = '';
        produto.valor = document.getElementById('valor').value = '';

        document.getElementById('BtnAtualizar').value = "Salvar!";
        this.editId = null;
    }

    deletar(id){
        if(confirm('Deseja realmente deletar?')){
            let tbody = document.getElementById('tbody');
        for(let i = 0; i < this.arrayProdutos.length; i++) {
            if(this.arrayProdutos[i].id == id) {
                this.arrayProdutos.splice(i, 1);
                tbody.deleteRow(i);
        }   
            }
        }
    }

    editar(dados){
        this.editId = dados.id;

        document.getElementById('name').value = dados.nomeProduto;
        document.getElementById('quantidade').value = dados.quantidade;
        document.getElementById('valor').value = dados.valor;

        document.getElementById('BtnAtualizar').value = 'Atualizar';
    }

    atualizar(id, produto){
        for (let i = 0; i < this.arrayProdutos.length; i++){
            if(this,this.arrayProdutos[i].id == id) {
                this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
                this.arrayProdutos[i].quantidade = produto.quantidade;
                this.arrayProdutos[i].valor = produto.valor;
            }
        }
    }

    lerDados() {
        let produto = {}
        produto.id = this.id;
        produto.nomeProduto = document.getElementById('name').value;
        produto.quantidade = document.getElementById('quantidade').value;
        produto.valor = document.getElementById('valor').value;        
        return produto;   
        
    }

    Validacao(produto){
        let msg = '';
        
        if(produto.nomeProduto == ''){
            msg += 'Informe o nome do Produto </br>';
        }
        if(produto.quantidade == ''){
            msg += 'Informe a Quantidade do Produto </br>';
        }
        if(produto.valor == ''){
            msg += 'Informe o Valor do Produto </br>';
        }
        if(msg != '') {
            let informar = document.getElementById('Informar').innerHTML = (msg);
            return false
        }else{
            let clear = document.getElementById('Informar').innerHTML = '';
        }
        
        return true;
         
    }

    

}

var produto = new Produto();

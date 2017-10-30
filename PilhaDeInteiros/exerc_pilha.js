/* Referências:
1) "How to test if a number is float or int in javascript": https://stackoverflow.com/questions/3885817/how-do-i-check-that-a-number-is-float-or-integer
2) Tutorial para construir uma pilha: https://www.youtube.com/watch?v=Gj5qBheGOEo&list=PLWKjhJtqVAbmoiNlqLJg1gxEjEuKHHcn_&index=75 
OBS: Escolhi nomear os métodos 'push' e 'pop' com o '2' no final para distinguir dos métodos de mesmo nome já existentes para objetos do tipo Array. */

class PilhaInt {
  constructor() {
    this.pilha = {}; // pilha vazia
    this.menor = null; // menor valor da pilha
    this.contador = 0; // tamanho da lista
		this.pilhaMenores = []; // pilha que armazena os antigos menores valores em relação ao atual menor (utilizado para atualizar 'menor' caso  o menor valor atual seja removido da pilha)
  }

  // INSERE NO TOPO DA PILHA
  push2(valor) {
    if ((typeof valor !== 'number') || (verificaInteiro(valor) !== true)) {
			console.log('Valor não numérico ou não inteiro inserido.');
    }
		else {
			this.pilha[this.contador] = valor;
      this.contador++;			
			this.atualizaMenor(valor);
		}
  }

  // REMOVE O TOPO DA PILHA E RETORNA
  pop2() {
    if (this.contador === 0) {
      return 'Pilha vazia.';
    }
		else {
			this.contador--;
    	var retirado = this.pilha[this.contador];
    	delete this.pilha[this.contador];
			if (retirado === this.menor) {
				this.menor = this.pilhaMenores.pop(); // metodo pop para arrays já está implementado. é nativo para objetos desse tipo.
			}
    	return retirado;
		}
  }
	
	// RETORNA O ATUAL MENOR VALOR
	min() {
		return this.menor;
	}
	
	/* adiciona o menor valor ATUAL a variavel 'menor' e guarda os antigos menores a 'pilhaMenores'.
	nv -> novo valor */
	atualizaMenor(nv) {
		if (this.menor === null) {
				this.menor = nv;
		} 
		else {
			if (nv < this.menor) {
				this.pilhaMenores.push(this.menor);
				this.menor = nv;
			}
		}
	}	
	
	// debugger
	mostrarPilhas() {
		console.log(this.pilha);
		console.log("pilhaMenores -> " + this.pilhaMenores);
	}
	
} // FIM DA CLASSE PILHAINT


/* FUNÇÕES EXTERNAS
---------------------------------*/
function verificaInteiro (num) {
  return num % 1 === 0; // se o numero for inteiro, retorna 'true'
}
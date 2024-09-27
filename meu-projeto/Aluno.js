class Aluno {
    constructor(nome, notas) {
        this.nome = nome;

        // Validação
        if (!Array.isArray(notas) || notas.length === 0) {
            throw new Error('Notas devem ser um array com pelo menos uma nota.');
        }

        for (const nota of notas) {
            if (typeof nota !== 'number') {
                throw new Error('As notas devem ser números!');
            }
            if (nota < 0 || nota > 10) {
                throw new Error('Média acima da máxima permitida!');
            }
        }

        this.notas = notas;
    }

    calcularMedia() {
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / this.notas.length;
    }

    obterMencao() {
        const media = this.calcularMedia();
        if (media >= 9) return 'SS';  
        if (media >= 7) return 'MM';  
        if (media >= 5) return 'MS';  
        return 'MI';                  
    }

    statusAprovacao() {
        const media = this.calcularMedia();
        return media >= 5 ? 'aprovad@' : 'reprovad@'; 
    }
}

module.exports = Aluno;

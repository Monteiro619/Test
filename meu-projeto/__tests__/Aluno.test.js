const Aluno = require('../Aluno');

describe('Teste da classe Aluno', () => {
    test('1. Testar se a média está sendo calculada corretamente', () => {
        const aluno = new Aluno('João', [8, 10]);
        expect(aluno.calcularMedia()).toBe(9);
    });

    test('2. Testar se a menção "MM" é retornada corretamente', () => {
        const aluno = new Aluno('Maria', [7, 8]);
        expect(aluno.obterMencao()).toBe('MM');  
    });
    
    test('3. Testar se @ alun@ foi aprovad@ ou reprovad@', () => {
        const aluno = new Aluno('Ana', [8, 7]);
        expect(aluno.statusAprovacao()).toBe('aprovad@'); 
    });

    test('4. Testar para menção "SS"', () => {
        const aluno = new Aluno('Carlos', [9, 10]);
        expect(aluno.obterMencao()).toBe('SS'); 
    });

    test('5. Testar se o aluno foi aprovado com menção SS', () => {
        const aluno = new Aluno('Roberta', [9, 10]);
        expect(aluno.statusAprovacao()).toBe('aprovad@');
    });

    test('6. Testar para menção "MS"', () => {
        const aluno = new Aluno('Paula', [7, 6]);
        expect(aluno.obterMencao()).toBe('MS'); 
    });
    
    test('7. Testar se o aluno foi aprovado com menção MM', () => {
        const aluno = new Aluno('Lúcia', [8, 7]);
        expect(aluno.statusAprovacao()).toBe('aprovad@');
    });

    test('8. Testar para menção "MI"', () => {
        const aluno = new Aluno('Rafael', [4, 3]);
        expect(aluno.obterMencao()).toBe('MI'); 
    });

    test('9. Testar se o aluno foi reprovado com menção MI', () => {
        const aluno = new Aluno('Simone', [3, 4]);
        expect(aluno.statusAprovacao()).toBe('reprovad@');
    });

    test('10. Testar se a média de um array vazio retorna NaN', () => {
        expect(() => new Aluno('Vacío', [])).toThrow('Notas devem ser um array com pelo menos uma nota.');
    });

    test('11. Testar se notas com valores decimais são calculadas corretamente', () => {
        const aluno = new Aluno('Pedro', [6.5, 7.5]);
        expect(aluno.calcularMedia()).toBe(7);
    });

    test('12. Testar se notas fora do intervalo [0,10] geram erro', () => {
        expect(() => new Aluno('Roberto', [11, 9])).toThrow('Média acima da máxima permitida!');
        expect(() => new Aluno('Clara', [-1, 5])).toThrow('Média acima da máxima permitida!');
    });

    test('13. Testar se as notas são números', () => {
        expect(() => new Aluno('Simone', [5, 'notas'])).toThrow('As notas devem ser números!');
    });

    test('14. Testar se o aluno pode ser aprovado faltando uma prova e tirando nota máxima na última', () => {
        const aluno = new Aluno('Mário', [10, 0]);
        expect(aluno.statusAprovacao()).toBe('aprovad@');
    });

    test('15. Testar se todas as notas iguais a zero retornam menção "MI"', () => {
        const aluno = new Aluno('Cecília', [0, 0]);
        expect(aluno.obterMencao()).toBe('MI'); 
    });

    test('16. Testar se notas muito próximas de 7 retornam a menção correta', () => {
        const aluno = new Aluno('Júlio', [6.9, 7.1]);
        expect(aluno.obterMencao()).toBe('MM'); 
    });

    test('17. Testar se uma única nota zero afeta a aprovação', () => {
        const aluno = new Aluno('Renata', [0, 10]);
        expect(aluno.statusAprovacao()).toBe('aprovad@'); 
    });

    test('18. Testar se a soma total das notas é correta', () => {
        const aluno = new Aluno('Ricardo', [5, 5]);
        expect(aluno.calcularMedia()).toBe(5);
    });

    test('19. Testar se a função aprovado funciona com menção MM', () => {
        const aluno = new Aluno('Patrícia', [6, 6]);
        expect(aluno.statusAprovacao()).toBe('aprovad@'); 
    });

    test('20. Testar se aluno com notas abaixo de 5 é reprovado', () => {
        const aluno = new Aluno('Lúcia', [3, 4]);
        expect(aluno.statusAprovacao()).toBe('reprovad@'); 
    });
});

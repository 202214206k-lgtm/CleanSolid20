(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    const RED_FRUITS = new Set(['manzana', 'cereza', 'ciruela']);

    function isRedFruit( fruit: string ): boolean {
        return RED_FRUITS.has(fruit);
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores

    type FruitColor = 'red' | 'yellow' | 'purple';

    const FRUITS_BY_COLOR: Record<FruitColor, string[]> = {
        red:    ['manzana', 'fresa'],
        yellow: ['piña', 'banana'],
        purple: ['moras', 'uvas'],
    };

    function getFruitsByColor( color: string ): string[] {
        const fruits = FRUITS_BY_COLOR[color as FruitColor];

        if ( !fruits ) throw new Error('the color must be: red, yellow, purple');

        return fruits;
    }

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

        function workingSteps(): string {
        if ( !isFirstStepWorking )  return 'First step broken.';
        if ( !isSecondStepWorking ) return 'Second step broken.';
        if ( !isThirdStepWorking )  return 'Third step broken.';
        if ( !isFourthStepWorking ) return 'Fourth step broken.';

        return 'Working properly!';
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // false

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();
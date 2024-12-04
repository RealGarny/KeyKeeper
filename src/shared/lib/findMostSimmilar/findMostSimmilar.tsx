export const findMostSimilar = <T extends any[]>(
    items: T,
    key: string,
    searchString: string,
    minSimmilarity?: number,
) => {
    // Функция для вычисления расстояния Левенштейна
    function levenshteinDistance(a: string, b: string) {
        const matrix = [];

        for (let i = 0; i <= b.length; i++) {
            matrix[i] = [i];
        }
        for (let j = 0; j <= a.length; j++) {
            matrix[0][j] = j;
        }

        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                if (b[i - 1] === a[j - 1]) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1, // Замена
                        matrix[i][j - 1] + 1, // Вставка
                        matrix[i - 1][j] + 1, // Удаление
                    );
                }
            }
        }

        return matrix[b.length][a.length];
    }

    // Сравнение всех объектов с введённой строкой
    const simmilarities = items.map(item =>
        levenshteinDistance(item[key].toLowerCase(), searchString.toLowerCase()),
    );

    items.sort((a, b) => simmilarities[items.indexOf(a)] - simmilarities[items.indexOf(b)]); // Сортируем по схожести
    if (minSimmilarity) {
        // Фильтруем все не подходящие под минимальную схожесть позиции
        return items.filter(item => {
            return simmilarities[items.indexOf(item)] < minSimmilarity;
        });
    }
    return items;
};

interface GeneratePasswordOpts {
    characterCount: number | string;
    hasNumbers?: boolean;
    hasSymbols?: boolean;
    hasUppercase?: boolean;
    hasLowercase?: boolean;
    userCharacters?: string;
}
export const generatePassword = (options: GeneratePasswordOpts): string => {
    if (!options.characterCount) return "";
    const count =
        typeof options.characterCount === "string"
            ? parseInt(options.characterCount, 10)
            : options.characterCount;
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";

    let charPool = "";
    if (options.userCharacters) {
        charPool = options.userCharacters;
    } else {
        if (options.hasNumbers) charPool += numbers;
        if (options.hasSymbols) charPool += symbols;
        if (options.hasUppercase) charPool += uppercase;
        if (options.hasLowercase) charPool += lowercase;
    }

    // Если пул пустой — ошибка
    if (charPool.length === 0) {
        throw new Error("No character types selected. Enable at least one character type.");
    }

    // Генерация пароля
    let password = "";
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }

    return password;
};

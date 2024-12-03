import { ChangeEvent, useEffect, useState } from "react";
import { Input } from "shared/ui/Input/Input";
import { Slider } from "shared/ui/Slider/Slider";
import { FormGenerator, FormGeneratorSchema } from "widgets/FormGenerator/ui/FormGenerator";
import { SliderWithInput } from "widgets/SliderWithInput";
import { generatePassword } from "shared/lib/generatePassword/generatePassword";

const passwordSettingsSchema: FormGeneratorSchema = {
    withSymbols: {
        label: {
            text: "Символы",
            position: "after",
        },
        inputInfo: {
            type: "checkbox",
        },
    },
    withNumbers: {
        label: {
            text: "Цифры",
            position: "after",
        },
        inputInfo: {
            type: "checkbox",
        },
    },
    withUppercase: {
        label: {
            text: "Верхний регистр",
            position: "after",
        },
        inputInfo: {
            type: "checkbox",
        },
    },
    withLowercase: {
        label: {
            text: "Нижний регистр",
            position: "after",
        },
        inputInfo: {
            type: "checkbox",
        },
    },
};

interface PasswordFormSettingsProps {
    onChange?: (password: { [key: string]: string }) => void;
    password?: string;
}

export const PasswordFormSettings: React.FC<PasswordFormSettingsProps> = ({
    onChange,
    password,
}) => {
    const [generationOptions, setGenerationOptions] = useState<string[]>([]);
    const [isGenerationManual, setIsGenerationManual] = useState(false);
    const [generationLength, setGenerationLength] = useState<number>(0);
    const maxSymbols = 30;

    const handleOptionsChange = (change: Record<string, any>) => {
        setGenerationOptions(prev => {
            let newOptions = [...prev];
            for (const [key, value] of Object.entries(change)) {
                if (value) {
                    newOptions.push(key);
                } else {
                    newOptions = newOptions.filter(option => key !== option);
                }
            }
            return newOptions.length < 1 ? prev : newOptions;
        });
        /*
        setSettings(prev => {
            const newValues: Record<string, any> = { ...prev, ...change };
            if (
                !newValues.withSymbols &&
                !newValues.withLowercase &&
                !newValues.withSymbols &&
                !newValues.withUppercase
            )
                return prev;
            if (onChange) {
                const newPassword = generatePassword({
                    characterCount: newValues.symbolsAmount,
                    hasSymbols: newValues.withSymbols,
                    hasLowercase: newValues.withLowercase,
                    hasNumbers: newValues.withNumbers,
                    hasUppercase: newValues.withUppercase,
                });
                onChange({ password: newPassword });
            }
            return newValues;
        });
        */
    };

    const analyzePassword = (password: string) => {
        const options = [];

        /[a-z]/.test(password) && options.push("withLowercase");
        /[.,;\[\]]/.test(password) && options.push("withSymbols");
        /\d/.test(password) && options.push("withNumbers");
        /[A-Z]/.test(password) && options.push("withUppercase");

        return options;
    };

    const testChange = (e: any) => {
        console.log(e);
    };

    useEffect(() => {
        if (!password) return;

        const opts = analyzePassword(password);
        setGenerationOptions(opts);
        setGenerationLength(password.length);
    }, []);

    const handleOptionsValues = () => {
        return Object.keys(passwordSettingsSchema).reduce((prev, option) => {
            return {
                ...prev,
                [option]: {
                    value: generationOptions.includes(option),
                    disabled: isGenerationManual,
                },
            };
        }, {});
    };

    return (
        <div className="flex flex-col gap-4">
            <SliderWithInput onChange={testChange} max={maxSymbols} value={generationLength} />
            <div className="flex gap-2">
                <FormGenerator
                    onChange={handleOptionsChange}
                    schema={passwordSettingsSchema}
                    values={handleOptionsValues()}
                    className="justify-center"
                />
            </div>
        </div>
    );
};

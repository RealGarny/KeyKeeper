import { useEffect, useState } from "react";
import { generatePassword } from "shared/lib/generatePassword/generatePassword";
import { Checkbox } from "shared/ui/Checkbox/Checkbox";
import { Input } from "shared/ui/Input/Input";
import { FormGenerator, FormGeneratorSchema } from "widgets/FormGenerator/ui/FormGenerator";
import { SliderWithInput } from "widgets/SliderWithInput";

const passwordSettingsSchema: FormGeneratorSchema = {
    hasSymbols: {
        label: {
            text: "Символы",
            position: "after",
        },
        inputInfo: {
            type: "checkbox",
        },
    },
    hasNumbers: {
        label: {
            text: "Цифры",
            position: "after",
        },
        inputInfo: {
            type: "checkbox",
        },
    },
    hasUppercase: {
        label: {
            text: "Верхний регистр",
            position: "after",
        },
        inputInfo: {
            type: "checkbox",
        },
    },
    hasLowercase: {
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
    const [isUserInteracted, setIsUserInteracted] = useState(false);
    const [generationLength, setGenerationLength] = useState<number>(0);
    const [manualCharacters, setManualCharacters] = useState("");
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
        setIsUserInteracted(true);
    };

    const handleOptionsLenghtChange = (e: any) => {
        setGenerationLength(e);
        setIsUserInteracted(true);
    };

    const analyzePassword = (password: string) => {
        const options = [];

        /[a-z]/.test(password) && options.push("hasLowercase");
        /[.,;\[\]]/.test(password) && options.push("hasSymbols");
        /\d/.test(password) && options.push("hasNumbers");
        /[A-Z]/.test(password) && options.push("hasUppercase");

        return options;
    };

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

    useEffect(() => {
        if (!password) return;
        const opts = analyzePassword(password);
        setGenerationOptions(opts);
        setGenerationLength(password.length);
    }, []);

    useEffect(() => {
        if (!isUserInteracted || !onChange) return;

        let passwordOptions: Parameters<typeof generatePassword>[0] = {
            characterCount: generationLength,
        };

        if (isGenerationManual && manualCharacters.length > 0) {
            passwordOptions = {
                ...passwordOptions,
                userCharacters: manualCharacters,
            };
        } else if (generationOptions.length > 0) {
            passwordOptions = {
                ...passwordOptions,
                ...generationOptions.reduce((prev, option) => {
                    return {
                        ...prev,
                        [option]: true,
                    };
                }, {}),
            };
        }
        Object.keys(passwordOptions).length > 1 &&
            onChange({ password: generatePassword(passwordOptions) });
    }, [generationLength, generationOptions, manualCharacters]);

    return (
        <div className="flex flex-col gap-4">
            <SliderWithInput
                onChange={handleOptionsLenghtChange}
                max={maxSymbols}
                value={generationLength}
            />
            <div>
                <p>свой набор</p>
                <Checkbox
                    checked={isGenerationManual}
                    onCheckedChange={() => setIsGenerationManual(prev => !prev)}
                />
                {isGenerationManual && (
                    <Input
                        onChange={e => setManualCharacters(e.target.value)}
                        value={manualCharacters}
                    />
                )}
            </div>
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

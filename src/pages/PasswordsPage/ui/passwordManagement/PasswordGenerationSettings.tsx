import { ChangeEvent, useState } from "react";
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
    onChange?: (password: string) => void;
    password: string;
}

export const PasswordFormSettings: React.FC<PasswordFormSettingsProps> = ({
    onChange,
    password,
}) => {
    const analyzePassword = (password: string) => {
        const settings: Record<string, any> = {};
        settings.symbolsAmount = password.length;
        settings.withSymbols = /[a-z]/.test(password);
        settings.withLowercase = settings.withSymbols;
        settings.withNumbers = /\d/.test(password);
        settings.withUppercase = /[A-Z]/.test(password);
        return settings;
    };
    const [settings, setSettings] = useState(analyzePassword(password || ""));
    const maxSymbols = 30;
    const handleChange = (change: Record<string, any>) => {
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
                onChange(
                    generatePassword({
                        characterCount: newValues.symbolsAmount,
                        hasSymbols: newValues.withSymbols,
                        hasLowercase: newValues.withLowercase,
                        hasNumbers: newValues.withNumbers,
                        hasUppercase: newValues.withUppercase,
                    }),
                );
            }
            return newValues;
        });
    };
    return (
        <div className="flex flex-col gap-4">
            <SliderWithInput max={maxSymbols} value={settings.symbolsAmount} />
            <div className="flex gap-2">
                <FormGenerator
                    onChange={handleChange}
                    schema={passwordSettingsSchema}
                    values={settings}
                    className="justify-center"
                />
            </div>
        </div>
    );
};

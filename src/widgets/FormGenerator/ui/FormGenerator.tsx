import { ChangeEvent } from "react";
import { cn } from "shared/lib/cn/cn";
import { Checkbox } from "shared/ui/Checkbox/Checkbox";
import { Slider } from "shared/ui/Slider/Slider";

interface SliderInfo {
    type: "slider";
    min?: number;
    max?: number;
}

interface CheckboxInfo {
    type: "checkbox";
    checked?: boolean;
}

interface PasswordSchemaItem {
    label: {
        text: string;
        position: "before" | "after";
    };
    inputInfo: SliderInfo | CheckboxInfo;
}

export type FormGeneratorSchema = Record<string, PasswordSchemaItem>;

interface FormGeneratorProps {
    schema: FormGeneratorSchema;
    values?: Record<string, any>;
    onChange?: (e: any) => void;
    className?: string;
}

export const FormGenerator: React.FC<FormGeneratorProps> = ({
    schema,
    values,
    onChange,
    className,
}) => {
    return Object.keys(schema).map(key => {
        const input = schema[key];
        return (
            <div className={cn("flex gap-2 flex-1 items-center", className)} key={key}>
                {input.label.position === "before" && <p>{input.label.text}</p>}
                {(() => {
                    switch (input.inputInfo.type) {
                        case "checkbox":
                            const isChecked = values ? values[key].value || false : false;
                            const isDisabled = values ? values[key].disabled || false : false;

                            return (
                                <Checkbox
                                    onCheckedChange={checked =>
                                        onChange && onChange({ [key]: checked })
                                    }
                                    name={key}
                                    disabled={isDisabled}
                                    checked={isChecked}
                                />
                            );
                        case "slider":
                            const defaultValue = values ? values[key] || 0 : 0;
                            return (
                                <Slider
                                    name={key}
                                    onChange={(e: any) =>
                                        onChange && onChange({ [key]: e.target.value })
                                    }
                                    min={input.inputInfo.min || 0}
                                    value={defaultValue}
                                ></Slider>
                            );
                        default:
                            return <></>;
                    }
                })()}
                {input.label.position === "after" && <p>{input.label.text}</p>}
            </div>
        );
    });
};

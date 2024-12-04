import { WithFormLabels } from "shared/lib/withFormLabels/withFormLabels";
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

interface SchemaItem {
    label: Parameters<typeof WithFormLabels>[0]["label"];
    inputInfo: SliderInfo | CheckboxInfo;
}

export type FormGeneratorSchema = Record<string, SchemaItem>;

interface FormGeneratorProps {
    schema: FormGeneratorSchema;
    className?: string;
    values?: Record<string, any>;
    onChange?: (e: any) => void;
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
            <WithFormLabels
                label={schema[key].label}
                disabled={values && values[key] ? values[key].disabled : undefined}
                className={className}
                key={key}
            >
                <FormInputSwitch
                    inputValue={values ? values[key] : undefined}
                    inputName={key}
                    input={input}
                    onChange={onChange}
                />
            </WithFormLabels>
        );
    });
};

interface FormInputSwitch {
    inputValue?: Record<string, any>;
    input: SchemaItem;
    onChange?: (e: any) => void;
    inputName: string;
}
const FormInputSwitch: React.FC<FormInputSwitch> = ({ onChange, inputValue, input, inputName }) => {
    switch (input.inputInfo.type) {
        case "checkbox":
            const isChecked = inputValue ? inputValue.value || false : false;
            const isDisabled = inputValue ? inputValue.disabled || false : false;

            return (
                <Checkbox
                    onCheckedChange={checked => onChange && onChange({ [inputName]: checked })}
                    name={inputName}
                    disabled={isDisabled}
                    checked={isChecked}
                />
            );
        case "slider":
            const defaultValue = inputValue ? inputValue.value || 0 : 0;
            return (
                <Slider
                    name={inputName}
                    onChange={(e: any) => onChange && onChange({ [inputName]: e.target.value })}
                    min={input.inputInfo.min || 0}
                    value={defaultValue}
                ></Slider>
            );
        default:
            return <></>;
    }
};

import React, { useState } from "react";
import { Input } from "shared/ui/Input/Input";
import { Slider } from "shared/ui/Slider/Slider";

interface SliderWithInputProps {
    max?: number;
    min?: number;
    value?: number;
    label?: string;
    onChange?: (record: number) => void;
}
export const SliderWithInput: React.FC<SliderWithInputProps> = ({
    onChange,
    value,
    label,
    max,
    min,
    ...props
}) => {
    const [sliderValue, setSliderValue] = useState<number>(value || 0);
    const [inputValue, setInputValue] = useState<string>(value ? value.toString() : "");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const result = parseInt(e.target.value) || 0;
        if (max && result > max) return;

        setSliderValue(result);
        setInputValue(e.target.value);

        if (onChange) {
            onChange(result);
        }
    };

    const handleSliderChange = (value: number[]) => {
        const [result] = value;
        setInputValue(result.toString());
        setSliderValue(result);
        if (onChange) {
            onChange(result);
        }
    };

    return (
        <div className="flex gap-4">
            <div className="max-w-72 flex-1">
                <p className="mb-2">{label ?? "Кол-во символов"}</p>
                <Slider
                    name="slider"
                    onValueChange={handleSliderChange}
                    min={min}
                    max={max}
                    value={[sliderValue]}
                    {...props}
                ></Slider>
            </div>
            <Input
                name="input"
                className="max-w-20"
                type="number"
                onChange={handleInputChange}
                value={inputValue}
            />
        </div>
    );
};

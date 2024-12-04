import { WithFormLabels, withFormLabelsParams } from "shared/lib/withFormLabels/withFormLabels";
import { Checkbox } from "shared/ui/Checkbox/Checkbox";

export const FormCheckbox: React.FC<withFormLabelsParams> = ({ children, ...props }) => {
    return (
        <WithFormLabels {...props}>
            <Checkbox />
        </WithFormLabels>
    );
};

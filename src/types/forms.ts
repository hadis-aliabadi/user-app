import * as Yup from 'yup';

export type FieldType = 'InputPassword' | 'InputText' | 'InputNumber';

export interface Field {
    type: FieldType;
    label: string;
    width: number;
    validation: Yup.AnySchema;
    hideLabel?: boolean;
    disabled?: boolean;
    placeholder?: string;
}

export interface FieldMap {
    [key: string]: Field;
}

export type FormValues<TFormFields extends FieldMap> = {
    [key in keyof TFormFields]: Yup.InferType<TFormFields[key]['validation']>;
};

export interface GeneratorProps<T extends FieldMap> {
    fields: T;
    defaultValues?: Partial<FormValues<T>>;
    disabled?: boolean;
    onSubmit: (result: FormValues<T>) => void;
    onBackHandle?: () => void;
}

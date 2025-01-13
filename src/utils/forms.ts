import * as Yup from 'yup';
import type { FieldMap, FieldType, FormValues } from '~/types/forms';

export const getValidationSchema = <T extends FieldMap>(fields: T) => {
    const schema = Object.keys(fields).reduce(
        (acc, fieldItem) => {
            acc[fieldItem] = fields[fieldItem].validation || Yup.mixed();
            return acc;
        },
        {} as Record<string, Yup.AnySchema>,
    );

    return Yup.object().shape(schema);
};

export const getDefaultValues = <T extends FieldMap>(fields: T) => {
    const defaultValues = {} as Record<string, unknown>;
    Object.keys(fields).forEach((fieldKey) => {
        switch (fields[fieldKey].type) {
            case 'InputText':
                defaultValues[fieldKey] = '';
                break;
            case 'InputNumber':
                defaultValues[fieldKey] = 0;
                break;
            case 'TextArea':
                defaultValues[fieldKey] = '';
                break;
            case 'ComboBox':
                defaultValues[fieldKey] = '';
                break;
            case 'CheckBox':
                defaultValues[fieldKey] = false;
                break;
            case 'MultipleSelector':
                defaultValues[fieldKey] = [];
                break;
            case 'InputPassword':
                defaultValues[fieldKey] = '';
                break;
            case 'Time':
                defaultValues[fieldKey] = '';
                break;
            case 'File':
                defaultValues[fieldKey] = null;
                break;
            case 'DatePicker':
                defaultValues[fieldKey] = null;
                break;
            case 'CheckboxGroup':
                defaultValues[fieldKey] = [];
                break;

            default:
                defaultValues[fieldKey] = null;
                break;
        }
    });
    return defaultValues as FormValues<T>;
};

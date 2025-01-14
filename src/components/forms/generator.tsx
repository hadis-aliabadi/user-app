import { useForm, type DefaultValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

import { PasswordInput } from '../ui/password-input';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { FA_IR } from '~/assets/language/Fa_IR';
import { type FormValues, type FieldMap, type GeneratorProps } from '~/types/forms';

import { getDefaultValues, getValidationSchema } from '~/utils/forms';

export const Generator = <T extends FieldMap>({
    defaultValues: initialValues = {},
    onSubmit,
    fields,
    disabled,
    onBackHandle,
}: GeneratorProps<T>) => {
    const fieldNames = Object.keys(fields);
    const validationSchema = getValidationSchema(fields);
    const defaultValues = getDefaultValues(fields);

    const form = useForm({
        defaultValues: { ...defaultValues, ...initialValues } as DefaultValues<FormValues<T>>,
        resolver: yupResolver(validationSchema),
        disabled,
    });

    const onFormSubmit = async (data: any) => {
        await onSubmit(data);
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onFormSubmit)}
                className="grid grid-cols-12 gap-x-2 md:gap-x-4 gap-y-4 w-full"
            >
                {fieldNames.map((fieldName) => {
                    const fieldItem = fields[fieldName];

                    return (
                        <FormField
                            key={fieldName}
                            name={fieldName as never}
                            control={form.control}
                            render={({ field }) => {
                                const generateField = () => {
                                    switch (fieldItem.type) {
                                        case 'InputNumber':
                                            return (
                                                <Input
                                                    type="number"
                                                    {...field}
                                                    disabled={
                                                        disabled ||
                                                        field.disabled ||
                                                        fieldItem.disabled
                                                    }
                                                />
                                            );
                                        case 'InputText':
                                            return (
                                                <Input
                                                    type="text"
                                                    {...field}
                                                    disabled={
                                                        disabled ||
                                                        field.disabled ||
                                                        fieldItem.disabled
                                                    }
                                                />
                                            );
                                        case 'InputPassword':
                                            return (
                                                <PasswordInput
                                                    {...field}
                                                    disabled={
                                                        disabled ||
                                                        field.disabled ||
                                                        fieldItem.disabled
                                                    }
                                                />
                                            );
                                        default:
                                            return <></>;
                                    }
                                };

                                return (
                                    <FormItem
                                        style={{
                                            gridColumn: `span ${fieldItem?.width} / span ${fieldItem?.width}`,
                                        }}
                                    >
                                        {!fieldItem.hideLabel && (
                                            <FormLabel>{fieldItem.label}</FormLabel>
                                        )}
                                        <FormControl className="w-full">
                                            {generateField()}
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />
                    );
                })}

                <div className="col-span-12 flex justify-between mt-4">
                    <Button type="submit" className="">
                        {FA_IR.submit}
                    </Button>
                    {onBackHandle && (
                        <Button
                            onClick={onBackHandle}
                            type="button"
                            variant="secondary"
                            className=""
                        >
                            {FA_IR.back}
                        </Button>
                    )}
                </div>
            </form>
        </Form>
    );
};

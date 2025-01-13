import { Generator } from '~/components/forms/generator';
import * as Yup from 'yup';
import { useLogin } from '~/hooks/mutations/use-login';
import { FA_IR } from '~/assets/language/Fa_IR';
import type { FieldMap, FormValues } from '~/types/forms';

const LoginPage = () => {
    const fields = {
        email: {
            type: 'InputText',
            label: FA_IR.email,
            width: 12,
            validation: Yup.string()
                .required(FA_IR.validation_required)
                .email(FA_IR.validation_emailFormat),
        },
        password: {
            type: 'InputPassword',
            label: FA_IR.password,
            width: 12,
            validation: Yup.string()
                .required(FA_IR.validation_required)
                .min(8, FA_IR.validation_passwordLimit),
        },
    } satisfies FieldMap;

    const { mutate: mutateLogin } = useLogin();
    const handleSubmit = (data: FormValues<typeof fields>) => {
        mutateLogin(data, {
            onSuccess: () => {
                console.log('succuss');
            },
            onError: () => {
                console.log('error');
            },
        });
    };

    return (
        <Generator
            defaultValues={{ email: '', password: '' }}
            onSubmit={handleSubmit}
            fields={fields}
        />
    );
};

export default LoginPage;

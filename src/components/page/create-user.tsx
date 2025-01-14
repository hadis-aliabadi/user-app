import { FA_IR } from '~/assets/language/Fa_IR';
import { Generator } from '../forms/generator';
import * as Yup from 'yup';
import type { FieldMap, FormValues } from '~/types/forms';

import { useNavigate } from 'react-router';
import { usePostUser } from '~/hooks/mutations/use-create-user';
function CreateUser() {
    const navigate = useNavigate();

    const fields = {
        name: {
            type: 'InputText',
            label: 'نام',
            width: 12,
            validation: Yup.string().required(FA_IR.validation_required),
        },
        job: {
            type: 'InputText',
            label: 'شغل',
            width: 12,
            validation: Yup.string().required(FA_IR.validation_required),
        },
    } satisfies FieldMap;

    const { mutate: createUser } = usePostUser();
    const handleSubmit = (data: FormValues<typeof fields>) => {
        createUser(data, {
            onSuccess: () => {
                console.log('succuss');
            },
            onError: () => {
                console.log('error');
            },
        });
    };

    return (
        <div className="p-8 shadow-md">
            <Generator
                defaultValues={{ name: '', job: '' }}
                onSubmit={handleSubmit}
                fields={fields}
                onBackHandle={() => navigate('/dashboard')}
            />
        </div>
    );
}

export default CreateUser;

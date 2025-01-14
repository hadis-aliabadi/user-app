import { FA_IR } from '~/assets/language/Fa_IR';
import { Generator } from '../forms/generator';
import * as Yup from 'yup';
import type { FieldMap, FormValues } from '~/types/forms';
import { useUpdateUser } from '~/hooks/mutations/use-update-user';
import { useNavigate, useNavigation, useParams } from 'react-router';
function EditUser() {
    const navigate = useNavigate();
    const params = useParams();
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

    const { mutate: mutateUser } = useUpdateUser(params.id ?? '');
    const handleSubmit = (data: FormValues<typeof fields>) => {
        mutateUser(data, {
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

export default EditUser;

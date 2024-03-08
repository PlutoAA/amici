import { useAlertService } from '_services';
import { useFetch } from '_helpers/client';
export { useFormService };

function useFormService(): IFormService {
    const fetch = useFetch();
    const alertService = useAlertService();

    return {
        send: async (form) => {
            try {
                await fetch.post('/api/form/send', form);
            } catch (error: any) {
                console.log(error);
            }
        },
    }
}

// interfaces

interface IForm {
    company: string,
    firstName: string,
    description: string,
    phone: string,
    mail: string,
}

interface IFormService {
    send: (form: { summary: string, queue: string, description: string }) => Promise<void>
}
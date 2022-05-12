import {SubmitFeedbackUseCase} from './submit-feedback-use-case'

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy },
);

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => { 
        // Eu espero que quando eu chamar o metodo execute
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Example comment',
            screenshot: 'data:image/png;base64,2313212312313',
        })).resolves.not.toThrow(); // Chegue ate o final e não dispare nenhum erro

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('should not be able to submit feedback without type', async () => { 
        await expect(submitFeedback.execute({
            type: '',
            comment: 'Example comment',
            screenshot: 'data:image/png;base64,2313212312313',
        })).rejects.toThrow();
    });

    it('should not be able to submit feedback without comment', async () => { 
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,2313212312313',
        })).rejects.toThrow();
    });

    it('should not be able to submit feedback with an invalid screenshot', async () => { 
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Example',
            screenshot: 'test.jpg',
        })).rejects.toThrow();
    });
});
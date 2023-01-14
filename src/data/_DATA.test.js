const { _saveQuestionAnswer, _saveQuestion } = require("./_DATA");


describe('_saveQuestion', () => {
    it('should save the question and update the user', async () => {
        const question = {
            optionOneText: 'Option One',
            optionTwoText: 'Option Two',
            author: { id: 'tylermcginnis' }
        };

        const savedQuestion = await _saveQuestion(question);

        expect(savedQuestion).toEqual({
            id: expect.any(String),
            timestamp: expect.any(Number),
            author: 'tylermcginnis',
            optionOne: {
                votes: [],
                text: 'Option One'
            },
            optionTwo: {
                votes: [],
                text: 'Option Two'
            }
        });
    });

    it('should reject if optionOneText, optionTwoText, and author are not provided', async () => {
        const question = {};

        await expect(_saveQuestion(question)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
    });
});

describe("_saveQuestionAnswer", () => {
    it("should return true for correct parameters", async () => {
        const response = await _saveQuestionAnswer({
            authedUser: "sarahedo",
            qid: "8xf0y6ziyjabvozdd253nd",
            answer: "optionTwo"
        });

        expect(response).toBeTruthy();
    });

    it("should return error for incorrect parameters", async () => {
        const response = await _saveQuestionAnswer({
            authedUser: undefined,
            qid: undefined,
            answer: "optionTwo"
        }).catch(e => e);

        expect(response).toBe("Please provide authedUser, qid, and answer");
    });
});

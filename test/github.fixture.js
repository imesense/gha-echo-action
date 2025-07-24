import { jest } from '@jest/globals';

export const context =
{
    payload: {
        action: "test",
        repository: {
            name: "test-repo"
        }
    }
};

export default
{
    ...jest.requireActual('@actions/github'),

    get context()
    {
        return context;
    }
};

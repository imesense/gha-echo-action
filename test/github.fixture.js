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
    get context()
    {
        return context;
    }
};

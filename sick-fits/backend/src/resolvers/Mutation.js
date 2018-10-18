const Mutations = {
    async createItem(parent, args, ctx, info) {
        // TODO: Check if they are logged in
        const newItem = await ctx.db.mutation.createItem({
            data: {
                ...args
            },
            info
        })

        return newItem;
    }
};

module.exports = Mutations;

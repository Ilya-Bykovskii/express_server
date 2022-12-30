class User {
    static usersIds = new Set();

    static setUserId(id) {
        this.usersIds.add(id)
    };

    static hasUserId(id) {
        return this.usersIds.has(id);
    }

    static getUserIds() {
        return Array.from(this.usersIds);
    }
};

module.exports = User

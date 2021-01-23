class Role {
    collection_name = 'roles'

    fields = {
        name: ''
    }

    init() {
        return this.fields;
    }
}

export default new Role();
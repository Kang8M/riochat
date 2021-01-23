class User {
    collection_name = 'users'

    fields = {
        fullname: '',
        auth_id: '',
        role_id: '',
        created_at: ''
    }

    init() {
        return this.fields;
    }
}

export default new User();
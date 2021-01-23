class Room {
    collection_name = 'rooms'

    fields = {
        name: '',
        created_at: ''
    }

    init() {
        return this.fields;
    }
}

export default new Room();
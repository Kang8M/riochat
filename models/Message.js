class Message {
    collection_name = 'messages'

    fields = {
        room_id: '',
        user_id: '',
        content: '',
        created_at: ''
    }

    init() {
        return this.fields;
    }
}

export default new Message();
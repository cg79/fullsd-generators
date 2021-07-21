

export class CourseRegistration {
    _id = '';

    nick = '';

    course = -1;

    amount = 0;
    
    addedms = 0;

    constructor(data) {
        const {_id, nick, course, addedms, amount} = data;

        this._id = _id;
        this.nick = nick;
        this.course = course;
        this.amount = amount;
        this.addedms = addedms;
    }

}
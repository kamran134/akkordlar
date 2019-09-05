import mongoose, { Schema } from 'mongoose';
import { stringify } from 'querystring';

const UserSchema = new Schema(
    {
        username: {
            type: string,
            require: true
        },
        email: {
            type: string,
            require: true
        },
        firstname: {
            type: string,
            require: true
        },
        lastname: {
            type: string,
            require: false
        },
        password: {
            type: string,
            require: true
        },
        role: {
            type: string,
            require: true
        }
    }
);

const User = mongoose.model('User', UserSchema);

export default User;
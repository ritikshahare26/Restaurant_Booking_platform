 
import {Schema} from 'mongoose'

export interface IUser extends Document { 
    name: string;
    email: string;
    passsword? : string; 
    phone: string;
    role: "user"| "admin" | "owner";
    createdAt: Date; 
    updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
    {
    name: {type: String, required: true, trim: true},
    email:{type: String, required: true, Unique: true, trim: true, lowercase: true},
    password:{type: String, required: true, minlength:6},
    phone:{type:String, trim:true, minlength:6},
    role:{ type:String, enum:["user", "admin" , "owner"], default "user"},
    },

)
//Remove password in when converting to JSON
UserSchema.set("toJSON",{
    transform:(doc,ret)=>{
        delete ret.password;
        return ret;
    }
}
)
export const User = mode1<IUser>("User",UserSchema)

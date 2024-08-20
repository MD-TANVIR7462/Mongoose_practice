import { Schema, model } from 'mongoose';
import { Tfaculty } from './faculty.interface';
import { userNameSchema } from '../student_modules/student.shemamodel';


const userSchema = new Schema<Tfaculty>({
  name: { type: userNameSchema, required:[true,"name is recuired"] },
  email: { type: String, required: true },
  department: { type: String, required: true },
  salary: { type: Number, required: true },
  contactNO: { type: Number, required: true },
  isActive: { type: String, enum: ['active', 'blocked'], default: 'active' },
  designation: { type: String, required: true },
  subjects:{type:[String],required:[true,"Minimum One Subject recuired"]}
});


const User = model<Tfaculty>('User', userSchema);

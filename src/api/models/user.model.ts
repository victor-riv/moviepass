import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

userSchema.pre('save', function(next) {
  if (!this.isModified('password')) {
    return next();
  }

  const password: string = this.get('password');

  bcrypt.hash(password, 8, (err, hash) => {
    if (err) {
      return next(err);
    }

    this.set('password', hash);

    next();
  });
});

userSchema.methods.checkPassword = function(
  password: string
): Promise<boolean> {
  const passwordHash = this.password;

  return new Promise(
    (resolve, reject): void => {
      bcrypt.compare(password, passwordHash, (err, same) => {
        if (err) {
          return reject(err);
        }

        resolve(same);
      });
    }
  );
};

export const User = mongoose.model('user', userSchema);

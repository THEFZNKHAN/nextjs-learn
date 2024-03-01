import mongoose from "mongoose";

interface UserDoc extends mongoose.Document {
    username: string;
    email: string;
    password: string;
    img?: string;
    isAdmin: boolean;
}

interface PostDoc extends mongoose.Document {
    title: string;
    desc: string;
    img?: string;
    userId: string;
    slug: string;
}

const userSchema: mongoose.Schema<UserDoc> = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 20,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            max: 50,
        },
        password: {
            type: String,
        },
        img: {
            type: String,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const postSchema: mongoose.Schema<PostDoc> = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        img: {
            type: String,
        },
        userId: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {
        timestamps: true,
    }
);

export const User: mongoose.Model<UserDoc> =
    mongoose.models.User || mongoose.model<UserDoc>("User", userSchema);

export const Post: mongoose.Model<PostDoc> =
    mongoose.models.Post || mongoose.model<PostDoc>("Post", postSchema);

import { NextRequest, NextResponse } from "next/server";
import { connectToDb } from "@/lib/utils";
import { Post } from "@/lib/models";

export const GET = async (request: any, { params }: any) => {
    const { slug } = params;
    try {
        await connectToDb();
        const post = await Post.findOne({ slug });
        return NextResponse.json(post);
    } catch (error: any) {
        console.log(error);
        throw new Error("Failed to fetch post!");
    }
};

export const DELETE = async (request: any, { params }: any) => {
    const { slug } = params;
    try {
        await connectToDb();
        await Post.deleteOne({ slug });
        return NextResponse.json("Post deleted");
    } catch (error: any) {
        console.log(error);
        throw new Error("Failed to delete post!");
    }
};

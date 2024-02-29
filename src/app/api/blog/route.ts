import { NextRequest, NextResponse } from "next/server";
import { connectToDb } from "@/lib/utils";
import { Post } from "@/lib/models";

export const GET = async (request: any) => {
    try {
        await connectToDb();
        const posts = await Post.find();
        return NextResponse.json(posts);
    } catch (error: any) {
        console.log(error);
        throw new Error("Failed to fetch the posts!");
    }
};

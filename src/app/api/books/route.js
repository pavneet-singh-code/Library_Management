import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const books = await prisma.book.findMany();
        return NextResponse.json(books);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch the Books" },
            { status: 500 },
        );
    }
}

export async function POST(req) {
    try {
        const body = await req.json();

        const book = await prisma.book.create({
            data: {
                title: body.title,
                author: body.author,
                catagory: body.catagory,
                quantity: Number(body.quantity),
            },
        });

        return NextResponse.json(book, { status: 200 });
    } catch (error) {
        console.error("POST Error: ", error);
        return NextResponse.json(
            { error: "Failed to post Book" },
            { status: 500 },
        );
    }
}

export async function DELETE(req) {
    try {
        const body = await req.json();
        const { id } = body;

        const deletedBook = await prisma.book.delete({
            where: {
                id: Number(id),
            },
        });

        return NextResponse.json({ message: "Book deleted" });
    } catch (error) {
        console.error("Delete Error: ", error);
        return NextResponse.json(
            { error: "Failed to delete Book record" },
            { status: 500 },
        );
    }
}

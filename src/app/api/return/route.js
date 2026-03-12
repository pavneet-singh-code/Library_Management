import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function UPDATE(req) {
    try {
        const body = await req.json();
        const { bookid } = body;

        const id = Number(bookid);

        const updated = await prisma.book.update({
            where: { id },
            data: { quantity: { increment: 1 } },
        });

        return NextResponse.json({
            message: "Book returned successfully",
            updated,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Book Borrow Failed" },
            { status: 500 },
        );
    }
}

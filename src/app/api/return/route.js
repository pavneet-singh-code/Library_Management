import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(req) {
    try {
        const body = await req.json();
        const { bookid, action } = body;

        const id = Number(bookid);

        if (action === "borrow") {
            const book = await prisma.book.findUnique({ where: { id } });

            if (!book || book.quantity <= 0) {
                return NextResponse.json(
                    { error: "Book unavailable" },
                    { status: 400 },
                );
            }

            const updated = await prisma.book.update({
                where: { id },
                data: { quantity: { decrement: 1 } },
            });

            return NextResponse.json({ message: "Book issued", updated });
        }

        if (action === "return") {
            const updated = await prisma.book.update({
                where: { id },
                data: { quantity: { increment: 1 } },
            });

            return NextResponse.json({
                message: "Book returned successfully",
                updated,
            });
        }

        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Book Borrow Failed" },
            { status: 500 },
        );
    }
}

import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const records = await prisma.BorrowRecords.findMany({
            include: {
                user: true,
                book: true,
            },
        });
        return NextResponse.json(records);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch the borrow rocords" },
            { status: 500 },
        );
    }
}

import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const members = await prisma.user.findMany();
        return NextResponse.json(members);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch members" },
            { status: 500 },
        );
    }
}

export async function POST(req) {
    try {
        const body = await req.json();

        const member = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                role: body.role,
            },
        });

        return NextResponse.json(member, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to create User" },
            { status: 500 },
        );
    }
}

export async function DELETE(req) {
    try {
        const { id } = await req.json();

        const user = await prisma.user.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!user.records) {
            const deleted = await prisma.user.delete({
                where: {
                    id: user.id,
                },
            });

            return NextResponse.json({ message: "User Deleted", user });
        } else {
            return NextResponse.json(
                { error: "Please clear your Records before deleting user" },
                { status: 400 },
            );
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "User Deletion Failed" },
            { status: 500 },
        );
    }
}

import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
import z from "zod";

const prisma = new PrismaClient();

const inputSchema = z.object({
  username: z.string().email(),
  password: z.string().min(6),
});

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { username, password } = body;

  const { success } = inputSchema.safeParse(body);

  if (!success) {
    return Response.json({
      message: "Incorrect inputs!",
    });
  }

  const user = await prisma.user.create({
    data: {
      username,
      password,
    },
  });

  return Response.json({
    message: "Signup successfull",
    user,
  });
}

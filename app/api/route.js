import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { allData } from "../assets/constants";
const prisma = new PrismaClient()
export async function GET() {
    try {
        const find = await prisma.sneakers.count() 
        return NextResponse.json(find)
    } catch (error) {
        return NextResponse.json({"message":error})
    }
   
  }
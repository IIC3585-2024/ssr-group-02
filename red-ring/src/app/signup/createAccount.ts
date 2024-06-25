'use server';

import { NextResponse } from "next/server";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { projectAuth } from "@/firebase/config";

export async function POST(request) {
    try {
      const body = await request.json();
  
      const { email, password } = body;
      await createUserWithEmailAndPassword(projectAuth, email, password);
  
      return NextResponse.json({ message: 'Account created successfully' });
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  }
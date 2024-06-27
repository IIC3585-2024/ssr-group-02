'use server';

import { NextResponse } from "next/server";
import { signInWithEmailAndPassword } from "firebase/auth";
import { projectAuth } from "../../../firebase/config";

export async function POST(request) {
    try {
      const body = await request.json();
  
      const { email, password } = body;
      await signInWithEmailAndPassword(projectAuth, email, password);
  
      return NextResponse.json({ message: 'Login successfully' });
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  }
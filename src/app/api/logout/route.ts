'use server';

import { NextResponse } from "next/server";
import { projectAuth } from "../../../firebase/config";

export async function POST() {
    try {
      await projectAuth.signOut();
      return NextResponse.json({ message: 'Logout successful' });
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  }
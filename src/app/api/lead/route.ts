import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const full_name = String(body.full_name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const project_type = String(body.project_type ?? "Residential").trim();
    const message = String(body.message ?? "").trim();

    if (!full_name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }
    if (!isEmail(email)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    const { data, error } = await supabaseAdmin
      .from("public_leads")
      .insert({
        full_name,
        email,
        phone: phone || null,
        project_type,
        message,
        source: "megalo-website",
      })
      .select("id")
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ref: data.id }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
}

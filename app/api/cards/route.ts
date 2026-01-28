import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import sql from "@/lib/db"
import { cardSchema } from "@/lib/card-schema" 
import { z } from "zod"

export async function GET() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    return Response.json({ error: "Non autorisé" }, { status: 401 })
  }

  const cards = await sql`                                                                           
      SELECT * FROM cards WHERE user_id = ${session.user.id} ORDER BY created_at DESC                  
    `

  return Response.json(cards)
}

export async function POST(request: Request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    return Response.json({ error: "Non autorisé" }, { status: 401 })
  }

  const body = await request.json()
  const result = cardSchema.safeParse(body)

  if (!result.success) {
    return Response.json({ error: z.flattenError(result.error) }, { status: 400 })
  }

  const { question, answer, category } = result.data

  const [card] = await sql`                                                                          
      INSERT INTO cards (user_id, question, answer, category)                                          
      VALUES (${session.user.id}, ${question}, ${answer}, ${category})                                 
      RETURNING *                                                                                      
    `

  return Response.json(card, { status: 201 })
}
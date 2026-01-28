import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import sql from "@/lib/db"
import { cardSchema } from "@/lib/card-schema"
import { z } from "zod"

type Params = {
  params: Promise<{ id: string }>
}

export async function PUT(request: Request, { params }: Params) {
  const { id } = await params
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
    UPDATE cards
    SET question = ${question},
        answer = ${answer},
        category = ${category},
        updated_at = NOW()
    WHERE id = ${id} AND user_id = ${session.user.id}
    RETURNING *
  `

  if (!card) {
    return Response.json({ error: "Carte introuvable" }, { status: 404 })
  }

  return Response.json(card)
}

export async function DELETE(_request: Request, { params }: Params) {
  const { id } = await params
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    return Response.json({ error: "Non autorisé" }, { status: 401 })
  }

  const [card] = await sql`
    DELETE FROM cards
    WHERE id = ${id} AND user_id = ${session.user.id}
    RETURNING *
  `

  if (!card) {
    return Response.json({ error: "Carte introuvable" }, { status: 404 })
  }

  return Response.json({ success: true })
}

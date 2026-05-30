import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import sql from "@/lib/db"
import { STARTER_CARDS } from "@/lib/starter-cards"

export async function POST() {
  
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    return Response.json({ error: "Non autorisé" }, { status: 401 })
  }

  const userId = session.user.id

  const [{ count }] = await sql`
    SELECT count(*)::int AS count FROM cards WHERE user_id = ${userId}
  `

  if (count > 0) {
    return Response.json(
      { error: "Le compte possède déjà des cartes." },
      { status: 409 }
    )
  }

  const created = []
  for (const card of STARTER_CARDS) {
    const [row] = await sql`
      INSERT INTO cards (user_id, question, answer, category)
      VALUES (${userId}, ${card.question}, ${card.answer}, ${card.category})
      RETURNING *
    `
    created.push(row)
  }

  return Response.json({ count: created.length }, { status: 201 })
}
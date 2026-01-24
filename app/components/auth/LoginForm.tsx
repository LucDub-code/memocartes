"use client"

import useAuthStore from "@/app/stores/authStore"
import useToastStore from "@/app/stores/toastStore"
import { signIn } from "@/lib/auth-client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"


const loginSchema = z.object({
  email: z.email({ message: "Adresse email invalide." }),
  password: z.string().min(8, { message: "Le mot de passe doit avoir au moins 8 caractères." }),
})

type loginData = z.infer<typeof loginSchema>


export default function LoginForm() {

  const { closeAuth, startLoading, stopLoading } = useAuthStore()
  const { showToast } = useToastStore()

  const {
    register,
    handleSubmit,
    formState: { errors: reactHookFormErrors },
  } = useForm<loginData>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: loginData) => {
    startLoading()
    try {
      const { error } = await signIn.email({ email: data.email, password: data.password })
      if (error) throw error
      closeAuth()
      showToast("Connexion réussie.")
    } catch {
      stopLoading()
      showToast("Échec de la connexion.")
    }
  }

  return (
    <>
      <h2 className="text-center text-preset-2" id="modal-title">Se connecter</h2>
      <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-preset-4-medium">Email</label>
          <input
            type="email"
            id="email"
            className="p-4 border rounded-md border-ink"
            autoComplete="email"
            {...register("email")}
          />
          {reactHookFormErrors.email &&
            <span className="text-crimson text-preset-5-regular">{reactHookFormErrors.email.message}</span>
          }
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-preset-4-medium">Mot de passe</label>
          <input
            type="password"
            id="password"
            className="p-4 border rounded-md border-ink"
            autoComplete="current-password"
            {...register("password")}
          />
          {reactHookFormErrors.password &&
            <span className="text-crimson text-preset-5-regular">{reactHookFormErrors.password.message}</span>
          }
        </div>
        <button type="submit" className="flex items-center justify-center px-5 py-3 mt-6 border rounded-full cursor-pointer bg-yellow border-ink shadow-large text-preset-4-semibold hover:bg-light-blue hover:shadow-[4px_4px_0_var(--ink)] transition-all duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_var(--ink)]">
          Se connecter
        </button>
      </form>
    </>
  )
}
"use client"

import useAuthStore from "@/app/stores/authStore"
import useToastStore from "@/app/stores/toastStore"
import { signUp } from "@/lib/auth-client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"


const signupSchema = z.object({
  email: z.email({ message: "Adresse email invalide." }),
  password: z.string().min(8, { message: "Le mot de passe doit avoir au moins 8 caractères." }),
  confirmPassword: z.string().min(8, {
    message: "Le mot de passe doit avoir au moins 8 caractères."
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas.",
  path: ["confirmPassword"],
})

type signupData = z.infer<typeof signupSchema>


export default function SignupForm() {

  const { closeAuth, startLoading, stopLoading } = useAuthStore()
  const { showToast } = useToastStore()

  const {
    register,
    handleSubmit,
    formState: { errors: reactHookFormErrors },
  } = useForm<signupData>({
    resolver: zodResolver(signupSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: signupData) => {
    startLoading()
    try {
      const { error } = await signUp.email({
        email: data.email,
        password: data.password,
        name: data.email,
      })
      if (error) throw error
      closeAuth()
      showToast("Compte créé avec succès.")
    } catch {
      stopLoading()
      showToast("Échec de l'inscription.")
    }
  }

  return (
    <>
      <h2 className="text-center text-preset-2" id="modal-title">Créer un compte</h2>
      <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-preset-4-medium">Email</label>
          <input
            type="email"
            id="email"
            className="p-4 border rounded-md border-ink"
            required
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
            required
            autoComplete="new-password"
            {...register("password")}
          />
          {reactHookFormErrors.password &&
            <span className="text-crimson text-preset-5-regular">{reactHookFormErrors.password.message}</span>
          }
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="confirmPassword" className="text-preset-4-medium">Confirmer le mot de passe</label>
          <input
            type="password"
            id="confirmPassword"
            className="p-4 border rounded-md border-ink"
            required
            autoComplete="new-password"
            {...register("confirmPassword")}
          />
          {reactHookFormErrors.confirmPassword &&
            <span className="text-crimson text-preset-5-regular">{reactHookFormErrors.confirmPassword.message}</span>
          }
        </div>
        <button type="submit" className="flex items-center justify-center px-5 py-3 mt-6 border rounded-full cursor-pointer bg-yellow border-ink shadow-large text-preset-4-semibold hover:bg-light-blue hover:shadow-[4px_4px_0_var(--ink)] transition-all duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_var(--ink)]">
          Créer un compte
        </button>
      </form>
    </>
  )
}
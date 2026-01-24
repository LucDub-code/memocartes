"use client"

import { useState } from "react"
import useAuthStore from "@/app/stores/authStore"
import useToastStore from "@/app/stores/toastStore"
import { signIn } from "@/lib/auth-client"

import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"


export default function AuthModal() {

  const [isLogin, setIsLogin] = useState(true)

  const { closeAuth, startLoading, stopLoading } = useAuthStore()
  const { showToast } = useToastStore()

  const handleGoogleSignIn = async () => {
    startLoading()
    try {
      await signIn.social({ provider: "google" })
    } catch {
      stopLoading()
      showToast("Échec de la connexion.")
    }
  }

  return (
    <div
      className="relative w-full px-6 sm:px-8 py-8 bg-white max-w-116 rounded-2xl strokes-lg"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={closeAuth}
        aria-label="Fermer la modal"
        className="absolute cursor-pointer top-[3%] left-[92%]"
      >
        <img src="/icons/icon-cross.svg" alt="" className="w-4" />
      </button>
      {isLogin ? <LoginForm /> : <SignupForm />}
      <p className="mt-8 text-center text-preset-4-regular">
        {isLogin ? "Pas de compte ? " : "Déjà un compte ? "}
        <button
          type="button"
          onClick={() => setIsLogin(!isLogin)}
          className="underline cursor-pointer text-preset-4-medium hover:text-blue"
        >
          {isLogin ? "Créer un compte" : "Se connecter"}
        </button>
      </p>
      <div className="flex items-center gap-4 mt-8">
        <div className="flex-1 h-px bg-ink/20"></div>
        <span className="text-preset-5 text-ink-muted">Ou continuer avec</span>
        <div className="flex-1 h-px bg-ink/20"></div>
      </div>
      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="flex items-center justify-center w-full gap-2 px-5 py-3 mt-8 bg-white border rounded-full cursor-pointer border-ink shadow-large text-preset-4-semibold"
      >
        <img src="/icons/icon-google.svg" alt="" className="w-4" />
        Continuer avec Google
      </button>
      <p className="mt-8 text-center text-preset-5 text-ink-muted">
        En continuant, vous acceptez les{" "}
        <button type="button" className="underline hover:text-ink">
          {`conditions d'utilisation`}
        </button>{" "}
        et la{" "}
        <button type="button" className="underline hover:text-ink">
          politique de confidentialité
        </button>
        .
      </p>
    </div>
  )
}
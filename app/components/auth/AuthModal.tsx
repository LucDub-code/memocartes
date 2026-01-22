"use client"

import useAuthModalStore from "@/app/stores/authModalStore"
import { useState } from "react"

export default function AuthModal() {

  const [isLogin, setIsLogin] = useState(true)
  const { closeAuthModal } = useAuthModalStore()

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={closeAuthModal}
    >
      <div
        className="relative w-full p-8 bg-white max-w-116 rounded-2xl strokes-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeAuthModal}
          aria-label="Fermer la modal"
          className="absolute cursor-pointer top-4 left-106"
        >
          <img src="/icons/icon-cross.svg" alt="" className="w-4" />
        </button>
        {isLogin ? (
          <>
            <h2 className="text-center text-preset-2" id="modal-title">Se connecter</h2>
            <form className="flex flex-col gap-4 mt-8" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-preset-4-medium">Email</label>
                <input type="email" id="email" name="email" className="p-4 border rounded-md border-ink" required autoComplete="email" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-preset-4-medium">Mot de passe</label>
                <input type="password" id="password" name="password" className="p-4 border rounded-md border-ink" required autoComplete="current-password" />
              </div>
              <button type="submit" className="flex items-center justify-center px-5 py-3 mt-6 border rounded-full cursor-pointer bg-yellow border-ink shadow-large text-preset-4-semibold hover:bg-light-blue">
                Se connecter
              </button>
            </form>
            <p className="mt-8 text-center text-preset-4-regular">
              Pas de compte ?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="underline cursor-pointer text-preset-4-medium hover:text-blue"
              >
                Créer un compte
              </button>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-center text-preset-2" id="modal-title">Créer un compte</h2>
            <form className="flex flex-col gap-4 mt-8" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-preset-4-medium">Email</label>
                <input type="email" id="email" name="email" className="p-4 border rounded-md border-ink" required autoComplete="email" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-preset-4-medium">Mot de passe</label>
                <input type="password" id="password" name="password" className="p-4 border rounded-md border-ink" required autoComplete="new-password" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="confirmPassword" className="text-preset-4-medium">Confirmer le mot de passe</label>
                <input type="password" id="confirmPassword" name="confirmPassword" className="p-4 border rounded-md border-ink" required autoComplete="new-password" />
              </div>
              <button type="submit" className="flex items-center justify-center px-5 py-3 mt-6 border rounded-full cursor-pointer bg-yellow border-ink shadow-large text-preset-4-semibold hover:bg-light-blue">
                Créer un compte
              </button>
            </form>
            <p className="mt-8 text-center text-preset-4-regular">
              Déjà un compte ?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className="underline cursor-pointer text-preset-4-medium hover:text-blue"
              >
                Se connecter
              </button>
            </p>
          </>
        )}
        <div className="flex items-center gap-4 mt-8">
          <div className="flex-1 h-px bg-ink/20"></div>
          <span className="text-preset-5 text-ink-muted">Ou continuer avec</span>
          <div className="flex-1 h-px bg-ink/20"></div>
        </div>
        <button type="button" className="flex items-center justify-center w-full gap-2 px-5 py-3 mt-8 bg-white border rounded-full cursor-pointer border-ink shadow-large text-preset-4-semibold">
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
    </div>
  )
}
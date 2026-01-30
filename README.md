# MemoCartes

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)

## Stack

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/react-19-20232a.svg?style=for-the-badge&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-4-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/postgresql-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![Zustand](https://img.shields.io/badge/zustand-%23593d88.svg?style=for-the-badge&logo=react&logoColor=white)

## Présentation

Application web de flashcards de mémorisation et de révision. Créez, organisez et mémorisez vos cartes de connaissances et suivez votre progression.

## Aperçu

### Mode Étude
![Mode Étude](./screenshots/study-mode.png)

### Gestion des cartes
![Cartes](./screenshots/cards-management.png)

## Déploiement

Application sur **Vercel**, base de données **PostgreSQL** sur **Neon**

## Technologies

**Frontend** : Next.js 16, React 19, TypeScript, Tailwind CSS 4

**Gestion d'état** : Zustand

**Validation** : React Hook Form, Zod

**Animation** : Motion, Lottie React

**Authentification** : Better Auth (Google OAuth, email/password)

**Backend** : Next.js API Routes, PostgreSQL (Neon)

## Fonctionnalités

## Fonctionnalités

L'application comprend deux pages principales :

**Mode Étude** : Interface de révision avec carte question/réponse à effet flip. Boutons pour incrémenter la maîtrise (+1 niveau jusqu'à 5/5) ou réinitialiser à 0/5. Navigation entre cartes (Précédent/Suivant), mélange aléatoire et filtres (par catégorie, masquage des cartes mémorisées). Panneau statistiques affichant le total, les cartes mémorisées, en cours et non commencées.

**Gestion des cartes** : Formulaire de création (question, réponse, catégorie). Grille de cartes avec système CRUD (édition et suppression via menu contextuel). Filtres par catégorie et masquage des mémorisées. Pagination par lots de 12 cartes.

**Authentification** : Google OAuth et email/password avec Better Auth. Protection des routes et redirection automatique.



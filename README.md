# 🏓 Paddle Reservation Platform (MERN)

Application web **Full Stack MERN** permettant aux **clubs de padel** de gérer leurs terrains et aux **clients de réserver des créneaux en ligne**.

La plateforme fonctionne avec **3 rôles principaux :**

- **Super Admin** → gère la plateforme et les clubs
- **Admin (club de padel)** → gère les terrains et les réservations de son club
- **Client** → réserve un terrain de padel

---

# ⚙️ Stack Technique

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt (hash des mots de passe)
- dotenv

## Frontend
- React
- React Router
- Axios
- Context API / Redux (optionnel)
- TailwindCSS ou Bootstrap

## Dev Tools
- Nodemon
- Git
- Postman

---

# 🚀 Fonctionnalités

## Authentification
- Création de compte utilisateur
- Connexion sécurisée avec JWT
- Gestion des rôles utilisateurs

## Super Admin
- Créer et gérer des clubs de padel
- Créer des comptes admins pour les clubs
- Voir toutes les réservations de la plateforme
- Gérer les clubs (activer / désactiver)

## Admin (Club)
- Ajouter / modifier / supprimer des terrains
- Définir les horaires disponibles
- Voir les réservations
- Gérer les disponibilités

## Client
- Créer un compte
- Voir les clubs de padel disponibles
- Voir les terrains disponibles
- Réserver un créneau
- Annuler une réservation
- Voir ses réservations

---

# 🛠 Installation du Projet

## 1️⃣ Cloner le projet

```bash
git clone https://github.com/yourusername/padel-booking-platform.git
cd padel-booking-platform

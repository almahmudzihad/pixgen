# 📸 PixGen – AI Image Gallery

PixGen is a simple AI-powered image gallery web application built with **Next.js**, **Hero UI**, and **Tailwind CSS**. Users can explore AI-generated images, view prompts, and authenticate using Google or email/password login.

---

## 🚀 Features

* 🔐 Authentication (Google + Email/Password)
* 🧠 Protected Routes using Middleware (Proxy-based access control)
* 👤 User Profile page (only visible when logged in)
* 🖼️ AI-generated image gallery
* 🔍 Image details page (protected route)
* ❤️ Like & 📥 Download counters
* 🏷️ Category and tag filtering
* 📱 Fully responsive UI
* ⚡ Fast performance with Next.js

---

## 🔒 Route Protection (Proxy / Middleware)

This project uses **Next.js Middleware** to protect private routes and user data.

### ✅ Behavior

* If the user is **logged in**:

  * Access to profile page is allowed
  * Access to image details page is allowed

* If the user is **not logged in**:

  * User is redirected to the login page automatically

---

### 📁 Protected Routes Example

```ts id="k8p1xq"
const protectedRoutes = [
  "/profile",
  "/photos/:id"
];
```

---

### ⚙️ Middleware Example

```ts id="m3v9ld"
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("session");

  const protectedPaths = ["/profile", "/photos"];

  const isProtected = protectedPaths.some(path =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (isProtected && !session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
```

---

## 🛠️ Tech Stack

* **Frontend:** Next.js (App Router)
* **UI Library:** Hero UI
* **Styling:** Tailwind CSS
* **Authentication:** better-auth
* **Database:** MongoDB
* **Image Source:** Unsplash

---

## 📂 Project Structure

```id="s7n2qp"
pixgen/
├── app/
├── components/
├── lib/
├── middleware.ts
├── public/
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash id="d4m8xv"
git clone https://github.com/almahmudzihad/pixgen.git
cd pixgen
```

### 2️⃣ Install dependencies

```bash id="t6c1wr"
npm install
```

### 3️⃣ Configure environment variables

Create a `.env.local` file:

```env id="y9k2ab"
MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

### 4️⃣ Run the development server

```bash id="f1n8zd"
npm run dev
```

Open 👉 http://localhost:3000

---

## 🖼️ Image Handling

All images are loaded from stable sources like **Unsplash** to ensure reliability.

```js id="r5v9lm"
module.exports = {
  images: {
    domains: ["images.unsplash.com"],
  },
};
```

---

## 📊 Sample Data Format

```json id="h2p7qc"
{
  "id": 16,
  "title": "Cyberpunk City Nights",
  "imageUrl": "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
  "prompt": "Futuristic cyberpunk city at night, neon lights, rain reflections",
  "category": "Sci-Fi",
  "model": "SDXL",
  "resolution": "1280x720",
  "likes": 420,
  "downloads": 150,
  "createdAt": "2026-04-27T10:20:00Z",
  "tags": ["cyberpunk", "city", "neon", "future"]
}
```

---

## 👤 User Access Logic

| Feature            | Logged In User | Guest User |
| ------------------ | -------------- | ---------- |
| View Gallery       | ✅ Yes          | ✅ Yes      |
| View Image Details | ✅ Yes          | ❌ No       |
| Profile Page       | ✅ Yes          | ❌ No       |

---

## 📌 Future Improvements

* 🔎 Advanced search & filtering
* 🌙 Dark mode support
* ❤️ Favorite/save system
* 📡 Real-time API integration
* 📤 Image upload system

---

## 🤝 Contributing

Contributions are welcome. Please open an issue first to discuss major changes.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Al Mahmud Zihad**
GitHub: https://github.com/almahmudzihad

---

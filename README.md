# Outfitique 🚀

![Hero Section](https://res.cloudinary.com/dolcdkbkp/image/upload/v1744818586/Outfitique/ss1_xfujk4.png)

Outfitique is an intelligent, AI-powered fashion app that transforms your wardrobe into an interactive digital style experience. With Outfitique, you can upload your clothing images, have AI remove backgrounds and generate stylish, AI-enhanced versions of your outfits, and receive personalized outfit suggestions. The app even offers a virtual try-on feature with AI-generated avatars, so you can visualize your style before you wear it.

---

## Table of Contents

- [🔍 Overview](#overview)
- [✨ Features](#features)
- [💻 Tech Stack](#tech-stack)
- [🧭 Usage](#usage)
- [🔧 Configuration](#configuration)
- [📸 Screenshots](#screenshots)
- [📄 License & Contact](#license--contact)

---

## Overview 🔍

Outfitique revolutionizes fashion by merging advanced AI with everyday wardrobe management. The app allows users to upload images of their outfits, which are processed to remove backgrounds and are transformed into AI-enhanced, stylized versions. Our intelligent system then analyzes your digital wardrobe to suggest trendy, matching outfits based on factors such as color, style, and occasion. With both free and premium plans, Outfitique is designed to simplify styling and bring personalization to a whole new level.

---

## Features ✨

- **💡 AI-Powered Outfit Generation:**  
  Generate unique, stylish outfit versions from your uploaded photos using state-of-the-art AI.

- **🖼 Background Removal:**  
  Seamlessly remove backgrounds from your images to focus on the clothing items, ensuring a consistent and professional look.

- **👗 Personalized Outfit Suggestions:**  
  Receive smart, fashion-forward outfit matching recommendations based on color, style, and the latest trends.

- **🖥 Virtual Try-On:**  
  Experience your outfits on an AI-generated avatar, allowing you to preview different looks before making a decision.

- **📂 Digital Wardrobe Management:**  
  Easily upload, organize, and manage your entire wardrobe with an intuitive and visually appealing interface.

- **💰 Flexible Pricing Plans:**  
  Enjoy free-tier features, with premium options available for advanced styling and virtual try-on experiences.

---

## Tech Stack 💻

- **Frontend:**  
  - **Next.js (App Router)** for server-side rendering and routing.  
  - **ShadCN UI** for modern, reusable UI components.  
  - **Tailwind CSS** for clean, responsive design.

- **Backend & Database:**  
  - **Next.js API Routes** for building backend services.  
  - **Prisma ORM** for type-safe MySQL database management.

- **AI & Image Processing:**  
  - **Remove.bg API** for background removal.  
  - **OpenAI's DALL·E / RunwayML / Stable Diffusion** for AI-enhanced outfit generation.  
  - **Custom/Hybrid AI Solutions** for outfit matching suggestions and virtual try-on avatars.

- **Storage & Hosting:**  
  - **Cloudinary** for image storage.  
  - **Vercel** for deployment of both frontend and backend.

---

## Usage 🧭

- **Onboarding:**  
  Users sign up and start by uploading images of their clothing items on the Wardrobe page. Each image is processed to remove the background and, optionally, an AI-enhanced version is generated and stored in the database.

- **Wardrobe Management:**  
  Users can view and manage their digitally stored outfits displayed on beautifully designed cards. The interface allows for searching, categorization, and bulk editing.

- **AI Outfit Suggestions:**  
  When navigating to the AI Suggestion page, all the stored wardrobe images are fetched and sent to an AI service. The AI processes these images to generate matching outfit combinations—typically pairing a top with a bottom—based on color, style, and trends. The suggestions are then displayed for the user to view, select, or save.

- **Virtual Try-On (Premium Feature):**  
  Premium users can create an AI avatar using a full-body image and virtually try on the AI-generated outfit suggestions.

---

## Configuration 🔧

- **Environment Variables:**  
  - `REMOVE_BG_API_KEY` for the Remove.bg API.  
  - `OPENAI_API_KEY` or relevant keys for your chosen AI outfit generation service.  
  - Database credentials and other secrets managed through `.env.local`.

- **Prisma ORM:**  
  - Configure your Prisma schema to manage wardrobe data and user information effectively.

- **Deployment:**  
  - Deploy the app on Vercel and integrate Cloudinary for image management and AWS S3/Google Cloud Storage as needed.
  - Set up CI/CD pipelines for seamless updates.

---

## Screenshots 📸

![How It Works](https://res.cloudinary.com/dolcdkbkp/image/upload/v1744818580/Outfitique/ss2_leufoy.png)  
![Wishlist Form](https://res.cloudinary.com/dolcdkbkp/image/upload/v1744818577/Outfitique/ss4_crgu0b.png)  
![Wardrobe Upload](https://res.cloudinary.com/dolcdkbkp/image/upload/v1744818578/Outfitique/ss3_sfnyix.png)

---

## License

This project is licensed under the [MIT License](LICENSE.txt).

---

## Contact

For questions, suggestions, or issues, please open an issue on GitHub or contact [contact@outfitique.com](mailto:contact@outfitique.com).

Happy Styling with Outfitique! 🚀

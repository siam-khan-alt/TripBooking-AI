# TripBooking AI - Frontend Intern Assessment

Hello! I am **MD Siam Khan**, and this is my implementation of the TripBooking AI landing page based on the provided Figma design. I have focused on achieving high UI accuracy, clean code structure, and full responsiveness across Mobile and Desktop devices.

## 🚀 Live Demo
- **Live Deployment:** [https://trip-booking-ai.vercel.app/](https://trip-booking-ai.vercel.app/)
- **GitHub Repository:** [https://github.com/siam-khan-alt/TripBooking-AI](https://github.com/siam-khan-alt/TripBooking-AI)

## 🛠️ Tech Stack
- **Framework:** Next.js 15+ (App Router)
- **Language:** JavaScript / React 19
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Fonts:** Manrope & Roboto (Google Fonts)

## ✨ Features Implemented
- **Pixel-Perfect UI:** Closely followed the Figma design, including specific layer blurs, gradients, and spacings.
- **Full Responsiveness:** Optimized for Mobile and Desktop screens using Tailwind's responsive modifiers.
- **Reusable Components:** Broken down into modular components such as:
  - `Hero`: With custom background overlay and navigation.
  - `TopRatedHotels`: Card-based slider/grid layout with custom topography background.
  - `CTASection`: Featuring complex progressive layer blurs (Ellipse) as per Figma properties.
  - `PartnerSection` & `Footer`: Responsive layouts with optimized asset loading.
- **Performance Optimized:** Used `next/image` for automatic image optimization and lazy loading.

## 🔧 Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/siam-khan-alt/TripBooking-AI.git](https://github.com/siam-khan-alt/TripBooking-AI.git)
   cd TripBooking-AI
   npm install
   npm run dev
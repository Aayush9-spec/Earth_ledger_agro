# EarthLedger Agro - Carbon MRV Platform

EarthLedger Agro is a modern **React + TypeScript + Vite** web application designed to provide **Measurement, Reporting, and Verification (MRV)** tools for **farmers and carbon projects in India**.  
It helps farmers calculate carbon credits, track projects, access marketplaces, and manage sustainability benefits.

---

## 🚀 Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) + [Radix Primitives](https://www.radix-ui.com/)
- **State & Data**: [React Query](https://tanstack.com/query/latest), [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)
- **Data Viz**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/) + custom [Radix Toasts](https://www.radix-ui.com/primitives/docs/components/toast)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Linting**: [ESLint](https://eslint.org/)
- **Hosting**: [Lovable](https://lovable.dev/) (default) or Vercel/Netlify

---

## 📂 Project Structure

```
src/
 ├─ components/         # Reusable UI components (buttons, cards, dialogs, charts...)
 ├─ hooks/              # Custom hooks (use-toast, use-mobile, use-parallax...)
 ├─ pages/              # Page-level components (Dashboard, Calculator, Marketplace, Benefits...)
 ├─ assets/             # Images, icons, and placeholders
 ├─ App.tsx             # Main app wrapper (providers + routes)
 ├─ main.tsx            # Entry point
 ├─ index.css           # Tailwind base + theme tokens
```

---

## 🌍 Features

### Core Pages
- **Home (Index)** – Hero section, stats, feature highlights, theme selector
- **Calculator** – Estimate carbon credits using `CarbonCalculator`
- **Dashboard** – Farmer’s project stats, revenue, analytics, and reports (with tabs)
- **Marketplace** – Buy/sell credits, buyer discovery, analytics, and listings
- **Benefits** – Farmer/community benefit highlights
- **NotFound** – 404 handling

### UI Components
- ~50+ prebuilt **shadcn/ui + Radix** components: Buttons, Forms, Tabs, Sidebar, Menus, Dialogs, Drawers, Carousel, Charts, etc.
- **Custom Theming**: Light, Dark, Teal, Light-Blue, with Tailwind tokens
- **Responsive Layout**: Sidebar + mobile sheets, resizable panels, scroll areas
- **Feedback & State**: Skeleton loaders, Progress bars, Sonner toasts, Custom toast system

### Hooks & Utilities
- `use-toast` → global toast system
- `use-mobile` → responsive breakpoint detection
- `use-parallax` → smooth scrolling animations
- `utils.ts` → helper functions (class merging, etc.)

---

## 🎨 Theming & Styling

- Uses **CSS variables** inside Tailwind for brand consistency (`--background`, `--primary`, `--accent`, etc.)
- Themes:
  - 🌱 Default (forest green, harvest gold, sky blue)
  - 🌑 Dark
  - 🟦 Light Blue
  - 🟢 Teal

Switch themes via `ThemeProvider` + `ThemeSelector`.

---

## 🛠 Development

### Install Dependencies
```bash
npm install
```

### Start Dev Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

---

## 🚀 Deployment

Default deployment via **Lovable.dev** (instant publishing).  
Alternatively, deploy with:
- **Vercel**
- **Netlify**
- **Static hosting** (use `vite build` output)

---

## 📖 Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push branch (`git push origin feature/new-feature`)
5. Create a Pull Request

---

## 📜 License

MIT © EarthLedger Agro

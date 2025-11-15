# 📱 Social Media App

A modern, full-featured social media application built with React, TypeScript, and Appwrite. This platform allows users to share posts, interact with content, explore new posts, and manage their profiles.

## ✨ Features

- **User Authentication** - Secure sign up and sign in functionality
- **Create & Share Posts** - Share your thoughts with text and images
- **Explore Feed** - Discover new content from other users
- **Like & Save Posts** - Interact with content you love
- **User Profiles** - Personalized profile pages for each user
- **Edit Profile** - Update your profile information and avatar
- **Post Details** - View detailed post information and interactions
- **All Users** - Browse and discover other users on the platform
- **Saved Posts** - Quick access to your bookmarked content
- **Responsive Design** - Fully responsive UI that works on all devices

## 🛠️ Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Backend:** Appwrite (BaaS)
- **Routing:** React Router v6
- **State Management:** TanStack Query (React Query)
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI primitives
- **Form Handling:** React Hook Form with Zod validation
- **Icons:** Lucide React

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn
- An Appwrite account and project

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd social-app2-react
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Appwrite

Create an Appwrite project and set up the following:
- Database with required collections (users, posts, saves, etc.)
- Storage bucket for media uploads
- Authentication settings

Update the Appwrite configuration in `src/lib/appwrite/config.ts` with your project details.

### 4. Run the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🗂️ Project Structure

```
src/
├── _auth/              # Authentication pages and layouts
│   ├── forms/          # Sign in and sign up forms
│   └── AuthLayout.tsx  # Authentication layout wrapper
├── _root/              # Main application pages
│   ├── pages/          # All application pages
│   └── RootLayout.tsx  # Main layout with navigation
├── components/         # Reusable components
│   ├── forms/          # Form components
│   ├── shared/         # Shared components (Topbar, Sidebar, etc.)
│   └── ui/             # UI primitives
├── context/            # React context providers
├── hooks/              # Custom React hooks
├── lib/                # Utilities and configurations
│   ├── appwrite/       # Appwrite API and config
│   ├── react-query/    # TanStack Query setup
│   └── validation/     # Zod validation schemas
├── types/              # TypeScript type definitions
└── App.tsx             # Main application component
```

## 🔑 Key Pages

- `/` - Home feed
- `/explore` - Explore new posts
- `/saved` - Saved posts
- `/all-users` - Browse all users
- `/create-post` - Create a new post
- `/posts/:id` - View post details
- `/profile/:id` - User profile
- `/update-profile/:id` - Edit profile
- `/sign-in` - Sign in page
- `/sign-up` - Sign up page

## 🎨 Styling

This project uses:
- **Tailwind CSS** for utility-first styling
- **CSS Variables** for theming
- **Tailwind Merge** for conditional class merging
- **Class Variance Authority** for component variants

## 🔐 Authentication

Authentication is handled through Appwrite's authentication service with:
- Email/password authentication
- Session management
- Protected routes
- Auth context for global state

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Responsive navigation (top bar on mobile, sidebar on desktop)
- Bottom navigation bar for mobile devices
- Optimized layouts for different screen sizes

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Development

Built with modern web technologies and best practices:
- TypeScript for type safety
- ESLint for code quality
- Component-based architecture
- Custom hooks for reusability
- Optimistic updates with React Query
- Form validation with Zod

---

Made with ❤️ using React and Appwrite

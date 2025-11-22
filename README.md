# Social Media App

A modern, full-stack social media application built with React, TypeScript, and Appwrite. Share posts, connect with others, and explore content in a beautiful, responsive interface.

## Features

### Core Functionality
- **Authentication** - Secure sign up/sign in with email and password
- **Posts** - Create, edit, and delete posts with images
- **Social Interactions** - Like and save posts
- **Explore** - Discover new content with infinite scroll
- **Search** - Search posts by caption
- **User Profiles** - View and update profile information
- **Responsive Design** - Works seamlessly on mobile and desktop

### Pages
| Page | Description |
|------|-------------|
| Home | Feed showing recent posts from all users |
| Explore | Discover new posts with search functionality |
| Saved | View your bookmarked posts |
| All Users | Browse all registered users |
| Create Post | Share new content with images |
| Post Details | View post with full interactions |
| Profile | User profile with their posts |
| Update Profile | Edit profile information and avatar |

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 18 |
| Language | TypeScript |
| Build Tool | Vite |
| Backend | Appwrite (BaaS) |
| Routing | React Router v6 |
| Data Fetching | TanStack Query (React Query) |
| Styling | Tailwind CSS |
| UI Components | Radix UI |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |

## Prerequisites

- Node.js v18+
- npm or yarn
- Appwrite account and project

## Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_STORAGE_ID=your_storage_bucket_id
VITE_APPWRITE_USER_COLLECTION_ID=your_users_collection_id
VITE_APPWRITE_POST_COLLECTION_ID=your_posts_collection_id
VITE_APPWRITE_SAVES_COLLECTION_ID=your_saves_collection_id
```

## Appwrite Setup

### 1. Create Database Collections

**Users Collection** - Attributes:
- `accountId` (string, required)
- `name` (string, required)
- `username` (string)
- `email` (string, required)
- `bio` (string)
- `imageUrl` (url)
- `imageId` (string)

**Posts Collection** - Attributes:
- `creator` (relationship to Users)
- `caption` (string, required)
- `imageUrl` (url, required)
- `imageId` (string, required)
- `location` (string)
- `tags` (string array)
- `likes` (relationship to Users, many-to-many)

**Saves Collection** - Attributes:
- `user` (relationship to Users)
- `post` (relationship to Posts)

### 2. Create Storage Bucket
- Create a bucket for media uploads
- Enable file preview permissions

### 3. Configure Authentication
- Enable Email/Password authentication

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd social-app2-react

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── _auth/                    # Authentication module
│   ├── forms/
│   │   ├── SigninForm.tsx
│   │   └── SignupForm.tsx
│   └── AuthLayout.tsx
│
├── _root/                    # Main app module
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Explore.tsx
│   │   ├── Saved.tsx
│   │   ├── AllUsers.tsx
│   │   ├── CreatePost.tsx
│   │   ├── EditPost.tsx
│   │   ├── PostDetails.tsx
│   │   ├── Profile.tsx
│   │   ├── UpdateProfile.tsx
│   │   └── LikedPosts.tsx
│   └── RootLayout.tsx
│
├── components/
│   ├── forms/
│   │   └── PostForm.tsx
│   ├── shared/               # Reusable components
│   │   ├── Topbar.tsx
│   │   ├── LeftSidebar.tsx
│   │   ├── Bottombar.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostStats.tsx
│   │   ├── UserCard.tsx
│   │   ├── GridPostList.tsx
│   │   ├── FileUploader.tsx
│   │   ├── ProfileUploader.tsx
│   │   └── Loader.tsx
│   └── ui/                   # UI primitives
│
├── context/
│   └── AuthContext.tsx       # Authentication context
│
├── hooks/
│   └── useDebounce.ts
│
├── lib/
│   ├── appwrite/
│   │   ├── api.ts            # API functions
│   │   └── config.ts         # Appwrite client setup
│   ├── react-query/
│   │   ├── queries.ts        # Query hooks
│   │   ├── queryKeys.ts
│   │   └── QueryProvider.tsx
│   ├── validation/
│   │   └── index.ts          # Zod schemas
│   └── utils.ts
│
├── types/
│   └── index.ts              # TypeScript types
│
├── App.tsx
├── main.tsx
└── globals.css
```

## API Functions

The app provides these Appwrite API integrations:

### Authentication
- `createUserAccount()` - Register new user
- `signInAccount()` - Login user
- `signOutAccount()` - Logout user
- `getCurrentUser()` - Get current session user

### Posts
- `createPost()` - Create new post with image
- `updatePost()` - Update existing post
- `deletePost()` - Delete post and associated image
- `getRecentPosts()` - Fetch recent posts
- `getInfinitePosts()` - Paginated posts for infinite scroll
- `searchPosts()` - Search posts by caption
- `getPostById()` - Get single post
- `getUserPosts()` - Get posts by user

### Interactions
- `likePost()` - Like/unlike a post
- `savePost()` - Save post to bookmarks
- `deleteSavedPost()` - Remove from bookmarks

### Users
- `getUsers()` - Get all users
- `getUserById()` - Get user by ID
- `updateUser()` - Update user profile

## Routes

```
/                    → Home (protected)
/explore            → Explore posts (protected)
/saved              → Saved posts (protected)
/all-users          → All users (protected)
/create-post        → Create post (protected)
/update-post/:id    → Edit post (protected)
/posts/:id          → Post details (protected)
/profile/:id        → User profile (protected)
/update-profile/:id → Edit profile (protected)
/sign-in            → Sign in (public)
/sign-up            → Sign up (public)
```

## License

MIT License

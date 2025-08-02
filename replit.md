# Overview

This is a complete full-stack web application built as a comprehensive Capacity.so clone - a platform for building web applications using AI. The project features a modern React frontend with a Node.js/Express backend, designed to showcase AI-powered web development capabilities with a sleek, professional interface. The clone includes all pages and features from the original capacity.so website with responsive design and smooth animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a full-stack TypeScript architecture with clear separation between client and server:

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Supabase PostgreSQL with connection pooling
- **Session Storage**: PostgreSQL-based session storage with connect-pg-simple

## Key Components

### Frontend Components
- **Landing Page Sections**: Hero, Community, Comparison, Benefits, Testimonials, FAQ
- **Complete Page Structure**: Home, Pricing, Community, Affiliate Program pages
- **Navigation System**: Responsive header with mobile burger menu, smooth animations
- **UI Components**: Complete shadcn/ui component library with custom variants
- **Theme System**: Beautiful animated theme toggle with light/dark/system modes, glass morphism effects
- **Design System**: Liquid glass morphism effects with 20px gaussian blur for both light and dark modes, gradient backgrounds, and modern animations
- **3D Integration**: Updated Spline 3D scene iframe with proper z-index layering for visibility
- **Mobile Responsiveness**: Fully responsive design across all screen sizes with optimized spacing and typography

### Backend Components
- **Storage Interface**: Abstracted storage layer with memory-based implementation
- **Database Schema**: User management with Drizzle ORM schema definitions
- **Route Structure**: Express.js routing with API prefix structure
- **Development Tools**: Hot reload with Vite integration in development mode

### Shared Components
- **Schema Definitions**: Shared TypeScript types and Zod validation schemas
- **Database Models**: User model with insert/select type inference

## Data Flow

1. **Client Requests**: React frontend makes API calls to Express backend
2. **API Processing**: Express routes handle requests and interact with storage layer
3. **Data Storage**: Storage interface abstracts database operations using Drizzle ORM
4. **Response Flow**: Data flows back through the storage layer to API responses
5. **State Management**: TanStack Query manages client-side caching and synchronization

## External Dependencies

### Frontend Dependencies
- **UI Framework**: Radix UI primitives for accessible components
- **Icons**: Lucide React for consistent iconography
- **Animations**: Class Variance Authority for component variants
- **Forms**: React Hook Form with Hookform resolvers
- **3D Graphics**: Spline React for 3D elements
- **Authentication**: Supabase client integration

### Backend Dependencies
- **Database**: Supabase PostgreSQL with SSL connections
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Driver**: Standard PostgreSQL driver (pg) with connection pooling
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **WebSocket Support**: ws library for real-time features

### Development Dependencies
- **Build Tools**: Vite, ESBuild for production builds
- **TypeScript**: Full TypeScript support across the stack
- **Development**: tsx for TypeScript execution, Replit-specific plugins

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express API proxy
- **Hot Reload**: Integrated Vite middleware for seamless development
- **Environment Variables**: DATABASE_URL for PostgreSQL connection

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations in `migrations/` directory
- **Deployment**: Single-command deployment with `npm start`

### Database Management
- **Schema Management**: Drizzle Kit for schema migrations
- **Connection Pooling**: Supabase transaction pooler with SSL
- **Development**: Push schema changes with `npm run db:push`

### Deployment Platforms
- **Development**: Replit with hot reload and development tools
- **Production**: Vercel with optimized serverless functions
- **Database**: Supabase PostgreSQL with global edge network

The application is designed for easy deployment on multiple platforms, with specialized configurations for Replit development and Vercel production deployment.

## Recent Updates

### Complete Capacity.so Clone Implementation (August 2025)
- **Full Website Structure**: Implemented all pages from capacity.so including Pricing, Community, and Affiliate Program
- **Enhanced Navigation**: Added responsive header with Community and Affiliate Program links
- **Mobile Responsiveness**: Complete mobile optimization with burger menu and responsive design patterns
- **3D Spline Integration**: Fixed z-index layering to ensure Spline content remains visible above all elements
- **Spline Stability Fix**: Resolved 3D Spline reloading problem by removing dynamic cache-busting and key props
- **Content Accuracy**: Updated all content, pricing, and FAQ sections to match exactly with capacity.so
- **Design Consistency**: Maintained glass morphism design system across all new pages
- **Community Showcase**: Implemented project gallery with filtering and search functionality
- **Pricing Structure**: Added comprehensive pricing page with feature comparisons
- **Affiliate Program**: Created detailed affiliate program page with commission tiers and benefits
- **Performance Optimization**: Stable iframe implementation with proper loading attributes

### Supabase Database Migration (August 2025)
- **Database Migration**: Successfully migrated from Neon to Supabase PostgreSQL
- **Connection Optimization**: Implemented connection pooling optimized for serverless deployment
- **SSL Configuration**: Added automatic SSL handling for production deployments
- **Vercel Integration**: Updated deployment configuration for Vercel with Supabase
- **Health Monitoring**: Added API health check endpoint for database connection testing
- **Documentation**: Created comprehensive deployment guide for Supabase + Vercel setup
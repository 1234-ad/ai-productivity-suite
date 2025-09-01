# 🤖 AI Productivity Suite

A comprehensive full-stack AI application featuring text generation, image creation, code analysis, document processing, and intelligent automation tools.

## 🚀 Live Demo
- **Frontend**: [AI Suite Dashboard](https://ai-productivity-suite.vercel.app)
- **API**: [Backend API](https://ai-suite-api.herokuapp.com)
- **Docs**: [API Documentation](https://ai-suite-api.herokuapp.com/docs)

## ✨ Features

### 🧠 AI Text Generation
- **GPT-4 Integration** - Advanced text generation and completion
- **Content Creation** - Blogs, emails, social media posts
- **Code Generation** - Multi-language code snippets
- **Translation** - 50+ languages supported
- **Summarization** - Document and article summarization

### 🎨 AI Image Generation
- **DALL-E 3** - High-quality image generation
- **Stable Diffusion** - Custom art and illustrations
- **Image Editing** - AI-powered photo enhancement
- **Style Transfer** - Artistic style applications
- **Background Removal** - Automatic background processing

### 💻 Code Intelligence
- **Code Analysis** - Security and performance scanning
- **Bug Detection** - Automated issue identification
- **Code Review** - AI-powered code suggestions
- **Documentation** - Auto-generated code docs
- **Refactoring** - Intelligent code optimization

### 📄 Document Processing
- **PDF Analysis** - Extract and analyze PDF content
- **OCR** - Text extraction from images
- **Data Extraction** - Structured data from documents
- **Format Conversion** - Multi-format document conversion
- **Smart Search** - Semantic document search

### 🔧 Automation Tools
- **Workflow Builder** - Visual automation designer
- **API Integrations** - 100+ service connectors
- **Scheduled Tasks** - Cron-based automation
- **Webhooks** - Real-time event processing
- **Monitoring** - Performance and usage analytics

## 🏗️ Architecture

### Frontend (React + TypeScript)
```
src/
├── components/          # Reusable UI components
├── pages/              # Application pages
├── hooks/              # Custom React hooks
├── services/           # API service layer
├── utils/              # Utility functions
├── types/              # TypeScript definitions
└── styles/             # Global styles and themes
```

### Backend (Node.js + Express)
```
server/
├── controllers/        # Route controllers
├── middleware/         # Custom middleware
├── models/            # Database models
├── services/          # Business logic
├── routes/            # API routes
├── utils/             # Helper functions
└── config/            # Configuration files
```

### Database (PostgreSQL + Redis)
- **PostgreSQL** - Primary data storage
- **Redis** - Caching and session management
- **Vector DB** - Embeddings and semantic search

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Next.js** - Full-stack React framework
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Query** - Data fetching and caching
- **Zustand** - State management

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **Prisma** - Database ORM
- **JWT** - Authentication
- **Socket.io** - Real-time communication
- **Bull Queue** - Job processing

### AI/ML Services
- **OpenAI GPT-4** - Text generation
- **DALL-E 3** - Image generation
- **Hugging Face** - ML models
- **LangChain** - AI orchestration
- **Pinecone** - Vector database
- **Replicate** - Model hosting

### Infrastructure
- **Vercel** - Frontend deployment
- **Railway** - Backend hosting
- **PostgreSQL** - Primary database
- **Redis** - Caching layer
- **AWS S3** - File storage
- **Cloudflare** - CDN and security

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Redis 6+
- OpenAI API Key

### Installation
```bash
# Clone repository
git clone https://github.com/1234-ad/ai-productivity-suite.git
cd ai-productivity-suite

# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Add your API keys and database URLs

# Setup database
npm run db:migrate
npm run db:seed

# Start development servers
npm run dev        # Frontend (port 3000)
npm run dev:api    # Backend (port 8000)
```

### Environment Variables
```env
# Database
DATABASE_URL="postgresql://user:pass@localhost:5432/ai_suite"
REDIS_URL="redis://localhost:6379"

# AI Services
OPENAI_API_KEY="sk-..."
HUGGINGFACE_API_KEY="hf_..."
REPLICATE_API_TOKEN="r8_..."

# Authentication
JWT_SECRET="your-secret-key"
NEXTAUTH_SECRET="your-nextauth-secret"

# File Storage
AWS_ACCESS_KEY_ID="your-aws-key"
AWS_SECRET_ACCESS_KEY="your-aws-secret"
S3_BUCKET_NAME="ai-suite-files"
```

## 📚 API Documentation

### Authentication
```typescript
POST /api/auth/login
POST /api/auth/register
POST /api/auth/refresh
DELETE /api/auth/logout
```

### Text Generation
```typescript
POST /api/ai/text/generate
POST /api/ai/text/complete
POST /api/ai/text/summarize
POST /api/ai/text/translate
```

### Image Generation
```typescript
POST /api/ai/image/generate
POST /api/ai/image/edit
POST /api/ai/image/enhance
POST /api/ai/image/remove-bg
```

### Code Analysis
```typescript
POST /api/ai/code/analyze
POST /api/ai/code/review
POST /api/ai/code/generate
POST /api/ai/code/document
```

### Document Processing
```typescript
POST /api/ai/document/upload
POST /api/ai/document/extract
POST /api/ai/document/convert
GET /api/ai/document/search
```

## 🔒 Security Features

- **JWT Authentication** - Secure token-based auth
- **Rate Limiting** - API abuse prevention
- **Input Validation** - Comprehensive data validation
- **CORS Protection** - Cross-origin request security
- **Helmet.js** - Security headers
- **SQL Injection Prevention** - Parameterized queries
- **XSS Protection** - Content sanitization

## 📊 Performance

- **Response Time** - < 200ms average
- **Uptime** - 99.9% availability
- **Caching** - Redis-based caching
- **CDN** - Global content delivery
- **Database Optimization** - Indexed queries
- **Image Optimization** - WebP conversion
- **Code Splitting** - Lazy loading

## 🧪 Testing

```bash
# Run all tests
npm test

# Unit tests
npm run test:unit

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e

# Coverage report
npm run test:coverage
```

## 🚀 Deployment

### Frontend (Vercel)
```bash
# Deploy to Vercel
vercel --prod

# Or use GitHub integration
git push origin main
```

### Backend (Railway)
```bash
# Deploy to Railway
railway login
railway link
railway up
```

### Database Migration
```bash
# Production migration
npm run db:migrate:prod
```

## 📈 Monitoring

- **Application Monitoring** - New Relic
- **Error Tracking** - Sentry
- **Analytics** - Google Analytics
- **Performance** - Web Vitals
- **Uptime** - Pingdom
- **Logs** - Winston + CloudWatch

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenAI for GPT-4 and DALL-E
- Hugging Face for ML models
- Vercel for hosting
- Railway for backend infrastructure

---

**Built with ❤️ by the AI Productivity Suite Team**
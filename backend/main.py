"""
Main FastAPI application entry point
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Import routers (will be created in Week 2)
# from app.routers import search, jurisprudence, llm, auth

@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    Lifespan context manager for startup and shutdown events
    """
    # Startup
    print("🚀 Starting Perplexity Jurídico API...")
    print(f"📍 Environment: {os.getenv('ENVIRONMENT', 'development')}")
    
    yield
    
    # Shutdown
    print("👋 Shutting down Perplexity Jurídico API...")

# Initialize FastAPI app
app = FastAPI(
    title="Perplexity Jurídico API",
    description="API para pesquisa inteligente de jurisprudências dos tribunais superiores brasileiros",
    version="0.1.0",
    lifespan=lifespan
)

# Configure CORS
origins = os.getenv("CORS_ORIGINS", "http://localhost:3000").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check endpoint
@app.get("/")
async def root():
    """Root endpoint - health check"""
    return {
        "status": "online",
        "message": "Perplexity Jurídico API",
        "version": "0.1.0"
    }

@app.get("/health")
async def health_check():
    """Detailed health check"""
    return {
        "status": "healthy",
        "environment": os.getenv("ENVIRONMENT", "development"),
        "redis": "not_configured",  # Will be updated in Week 2
        "llm": "not_configured"     # Will be updated in Week 3
    }

# Include routers (will be uncommented as we build them)
# app.include_router(search.router, prefix="/api/search", tags=["search"])
# app.include_router(jurisprudence.router, prefix="/api/jurisprudence", tags=["jurisprudence"])
# app.include_router(llm.router, prefix="/api/llm", tags=["llm"])
# app.include_router(auth.router, prefix="/api/auth", tags=["auth"])

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host=os.getenv("API_HOST", "0.0.0.0"),
        port=int(os.getenv("API_PORT", 8000)),
        reload=os.getenv("DEBUG", "True") == "True"
    )

"""
Application configuration
"""
from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    """Application settings"""
    
    # API Keys
    anthropic_api_key: str = ""
    google_api_key: str = ""
    
    # Redis
    redis_host: str = "localhost"
    redis_port: int = 6379
    redis_password: str = ""
    
    # Clerk
    clerk_secret_key: str = ""
    
    # Stripe
    stripe_secret_key: str = ""
    stripe_webhook_secret: str = ""
    
    # Application
    api_host: str = "0.0.0.0"
    api_port: int = 8000
    debug: bool = True
    environment: str = "development"
    
    # CORS
    cors_origins: str = "http://localhost:3000"
    
    # Rate Limiting
    rate_limit_free: int = 10
    rate_limit_basic: int = 50
    rate_limit_pro: int = 200
    rate_limit_enterprise: int = 1000
    
    class Config:
        env_file = ".env"
        case_sensitive = False


settings = Settings()

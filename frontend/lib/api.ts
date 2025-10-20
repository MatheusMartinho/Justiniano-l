/**
 * API client utilities
 * Will be implemented in Week 2 with real backend integration
 */

import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Search jurisprudence
 * TODO: Implement in Week 2
 */
export async function searchJurisprudence(query: string) {
  // Placeholder - will connect to backend API
  throw new Error('Not implemented yet - using mock data for Week 1');
}

/**
 * Get search history
 * TODO: Implement in Week 4 with authentication
 */
export async function getSearchHistory() {
  // Placeholder
  throw new Error('Not implemented yet');
}

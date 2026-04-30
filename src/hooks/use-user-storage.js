/**
 * use-user-storage.js
 * Centraliza toda a lógica de localStorage do perfil do usuário:
 *   - resultado do quiz
 *   - histórico de páginas visitadas
 *   - favoritos
 *
 * Uso:
 *   import { useQuizResult, usePageHistory, useFavorites } from '@/hooks/use-user-storage.js';
 */

import { useState, useCallback, useEffect } from 'react';

// ─── helpers ─────────────────────────────────
const read  = (key, fallback) => { try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; } };
const write = (key, value)    => { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} };

// ─────────────────────────────────────────────
// useQuizResult
// Salva e recupera o resultado do quiz por usuário.
// QuizSection chama saveQuizResult ao finalizar.
// ─────────────────────────────────────────────
export function useQuizResult(userId) {
  const key = `meridiano_quiz_${userId || 'guest'}`;

  const [quizResult, setQuizResult] = useState(() => read(key, null));

  const saveQuizResult = useCallback((result) => {
    const data = { type: result.type, title: result.title, description: result.description, date: new Date().toISOString() };
    write(key, data);
    setQuizResult(data);
  }, [key]);

  const clearQuizResult = useCallback(() => {
    localStorage.removeItem(key);
    setQuizResult(null);
  }, [key]);

  return { quizResult, saveQuizResult, clearQuizResult };
}

// ─────────────────────────────────────────────
// usePageHistory
// Registra as últimas N páginas de produto visitadas.
// ProductLandingPage chama trackPageVisit ao montar.
// ─────────────────────────────────────────────
const HISTORY_KEY = 'meridiano_history';
const MAX_HISTORY = 5;

export function usePageHistory() {
  const [history, setHistory] = useState(() => read(HISTORY_KEY, []));

  const trackPageVisit = useCallback((entry) => {
    // entry: { id, title, href, line }
    setHistory((prev) => {
      const filtered = prev.filter((p) => p.id !== entry.id);
      const next = [{ ...entry, visitedAt: new Date().toISOString() }, ...filtered].slice(0, MAX_HISTORY);
      write(HISTORY_KEY, next);
      return next;
    });
  }, []);

  const clearHistory = useCallback(() => {
    localStorage.removeItem(HISTORY_KEY);
    setHistory([]);
  }, []);

  return { history, trackPageVisit, clearHistory };
}

// ─────────────────────────────────────────────
// useFavorites
// Adiciona/remove produtos dos favoritos.
// ProductCard e ProductLandingPage usam toggleFavorite.
// ─────────────────────────────────────────────
const FAVORITES_KEY = 'meridiano_favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => read(FAVORITES_KEY, []));

  const toggleFavorite = useCallback((product) => {
    // product: { id, title, href, line }
    setFavorites((prev) => {
      const exists = prev.some((f) => f.id === product.id);
      const next = exists ? prev.filter((f) => f.id !== product.id) : [{ ...product, savedAt: new Date().toISOString() }, ...prev];
      write(FAVORITES_KEY, next);
      return next;
    });
  }, []);

  const isFavorite = useCallback((id) => favorites.some((f) => f.id === id), [favorites]);

  const clearFavorites = useCallback(() => {
    localStorage.removeItem(FAVORITES_KEY);
    setFavorites([]);
  }, []);

  return { favorites, toggleFavorite, isFavorite, clearFavorites };
}

// ─────────────────────────────────────────────
// useNewMaterials
// Verifica se algum produto do catálogo tem menos de 7 dias.
// Recebe o array de produtos do catálogo.
// ─────────────────────────────────────────────
export function useNewMaterials(products = []) {
  const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;
  const now = Date.now();

  const newProducts = products.filter((p) => {
    if (!p.createdAt) return false;
    return now - new Date(p.createdAt).getTime() < SEVEN_DAYS;
  });

  return { hasNew: newProducts.length > 0, newCount: newProducts.length };
}

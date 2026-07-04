import { useState, useCallback } from 'react';

const STORAGE_KEY = 'devprep-progress';

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function useProgress(moduleSlug) {
  const [progress, setProgress] = useState(loadProgress);

  const isCompleted = useCallback(
    (topicId) => progress[moduleSlug]?.includes(Number(topicId)) ?? false,
    [progress, moduleSlug]
  );

  const toggleComplete = useCallback(
    (topicId) => {
      const id = Number(topicId);
      setProgress((prev) => {
        const moduleProgress = prev[moduleSlug] ?? [];
        const updated = moduleProgress.includes(id)
          ? moduleProgress.filter((x) => x !== id)
          : [...moduleProgress, id];
        const next = { ...prev, [moduleSlug]: updated };
        saveProgress(next);
        return next;
      });
    },
    [moduleSlug]
  );

  const getModuleCompleted = useCallback(
    (slug) => progress[slug]?.length ?? 0,
    [progress]
  );

  return { progress, isCompleted, toggleComplete, getModuleCompleted };
}

export function getAllProgress() {
  return loadProgress();
}
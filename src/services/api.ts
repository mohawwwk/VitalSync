
export async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const res = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Content-Type': 'application/json',
    },
  });

  return res;
}

export const userService = {
  getMe: () => fetchWithAuth('/api/user/me'),
  logout: () => fetchWithAuth('/api/auth/logout', { method: 'POST' }),
};

export const assessmentService = {
  submit: (data: any) => fetchWithAuth('/api/ai/diagnose', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  getLatest: () => fetchWithAuth('/api/ai/latest-assessment'),
};

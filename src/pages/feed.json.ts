import type { APIRoute } from 'astro';

/**
 * Locked member feed / practitioner guide.
 *
 * Static hosting cannot enforce a real 401 without a runtime/auth layer, so this endpoint
 * intentionally publishes no records. The full member guide should move behind auth
 * when AltStack has a server-side member flow.
 */
export const GET: APIRoute = async () =>
  new Response(
    JSON.stringify(
      {
        title: 'AltStack',
        version: '0.2',
        access: 'auth_required',
        loginUrl: '/login',
        count: 0,
        items: [],
        message: 'Practitioner guide và member insight đầy đủ chỉ dành cho thành viên đã đăng nhập.',
      },
      null,
      2,
    ),
    {
      status: 401,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'no-store',
      },
    },
  );

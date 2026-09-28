/**
 * Minimal in-memory sliding-window rate limiter.
 *
 * LIMITATION: state lives in the process. On serverless/multi-instance
 * deployments each instance keeps its own counter, and a cold start clears it,
 * so this deters casual spam but is not a hard guarantee. If the form starts
 * attracting real abuse, move this to a shared store (Upstash/Redis) or put a
 * CAPTCHA in front — the call site does not need to change.
 */

type Bucket = number[];

const buckets = new Map<string, Bucket>();

/** Stops the Map growing without bound on a long-lived server. */
const MAX_TRACKED_KEYS = 5_000;

export type RateLimitResult = {
  allowed: boolean;
  retryAfterSeconds: number;
};

export function rateLimit(
  key: string,
  limit: number,
  windowMs: number
): RateLimitResult {
  const now = Date.now();
  const cutoff = now - windowMs;

  const recent = (buckets.get(key) ?? []).filter((time) => time > cutoff);

  if (recent.length >= limit) {
    const oldest = recent[0];
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((oldest + windowMs - now) / 1000)),
    };
  }

  recent.push(now);
  buckets.set(key, recent);

  if (buckets.size > MAX_TRACKED_KEYS) {
    for (const [existingKey, times] of buckets) {
      if (times.every((time) => time <= cutoff)) buckets.delete(existingKey);
    }
  }

  return { allowed: true, retryAfterSeconds: 0 };
}

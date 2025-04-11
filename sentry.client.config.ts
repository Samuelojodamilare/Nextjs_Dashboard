import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://d33f6a859ed34e57b659bc209b5ca1ad@o4508919883038720.ingest.us.sentry.io/4508919893131265",

  integrations: [Sentry.replayIntegration()],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

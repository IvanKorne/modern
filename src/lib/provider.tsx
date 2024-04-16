"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: "/ingest",
    ui_host: "https://app.posthog.com",
  });
}
export function CSPostHogProvider({ children }: Props) {
  return (
    <PostHogProvider client={posthog}>
      <PostHogAuthWrapper>{children}</PostHogAuthWrapper>
    </PostHogProvider>
  );
}

function PostHogAuthWrapper({ children }: { children: React.ReactNode }) {
  const user = useAuth();
  const userInfo = useUser();
  useEffect(() => {
    if (userInfo.user) {
      posthog.identify(userInfo.user.id, {
        email: userInfo.user.emailAddresses[0]?.emailAddress,
        name: userInfo.user.fullName,
      });
    } else if (!user.isSignedIn) {
      posthog.reset();
    }
  }, [userInfo, user]);
  return children;
}

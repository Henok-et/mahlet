"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function StudioPage() {
  return (
    <div className="sanity-studio-route-wrapper">
      <NextStudio config={config} />
    </div>
  );
}
export const dynamic = "force-dynamic";

"use client";

export function Analytics() {
    const token = process.env.NEXT_PUBLIC_BEAM_TOKEN;
    if (!token) {
        console.warn("No Beam token provided, analytics will not be loaded.");
        return null;
    }
    return (
        <script
            src="https://beamanalytics.b-cdn.net/beam.min.js"
            data-token={token}
            async
        />
    );
}

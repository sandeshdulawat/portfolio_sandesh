"use client";

import React, { useEffect, useState } from "react";

interface DayContribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ApiResponse {
  total: Record<string, number>;
  contributions: DayContribution[];
}

const colorMap = {
  0: "#ebedf0",
  1: "#9be9a8",
  2: "#40c463",
  3: "#30a14e",
  4: "#216e39",
};

export default function GitHubContributionGraph() {
  const [data, setData] = useState<DayContribution[] | null>(null);
  const [totalCount, setTotalCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchContributions() {
      try {
        const res = await fetch(
          "https://github-contributions-api.jogruber.de/v4/sandeshdulawat?y=last"
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const json: ApiResponse = await res.json();
        
        // Calculate total for last year
        const total = json.contributions.reduce((acc, curr) => acc + curr.count, 0);
        setTotalCount(total);

        // Get recent weeks (~22 weeks = 154 days) to fit cleanly in bento card
        const recent = json.contributions.slice(-154);
        setData(recent);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchContributions();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center space-y-2 py-4">
        <div className="w-6 h-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
        <span className="text-[11px] font-medium text-neutral-400">Loading GitHub contributions...</span>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="w-full h-full flex items-center justify-center p-4 text-center">
        <a
          href="https://github.com/sandeshdulawat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-cyan-600 underline"
        >
          View @sandeshdulawat on GitHub →
        </a>
      </div>
    );
  }

  // Chunk days into weeks (7 days per column)
  const weeks: DayContribution[][] = [];
  for (let i = 0; i < data.length; i += 7) {
    weeks.push(data.slice(i, i + 7));
  }

  return (
    <div className="w-full h-full flex flex-col justify-between p-1">
      {/* Heatmap Grid */}
      <div className="flex gap-[3px] items-center justify-center overflow-hidden py-1">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-[3px]">
            {week.map((day, dayIndex) => (
              <div
                key={day.date || dayIndex}
                title={`${day.date}: ${day.count} contributions`}
                style={{ backgroundColor: colorMap[day.level] || "#ebedf0" }}
                className="w-[10px] h-[10px] rounded-[2.5px] transition-transform duration-200 hover:scale-125 hover:z-20 cursor-pointer shadow-2xs"
              />
            ))}
          </div>
        ))}
      </div>

      {/* Legend & Stats Footer */}
      <div className="flex items-center justify-between text-[10px] font-medium text-neutral-500 px-1 pt-1 border-t border-neutral-200/60">
        <span>{totalCount ?? 0} contributions in last year</span>
        <div className="flex items-center gap-1">
          <span className="text-[9px] text-neutral-400">Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <span
              key={level}
              style={{ backgroundColor: colorMap[level as keyof typeof colorMap] }}
              className="w-2 h-2 rounded-[1.5px]"
            />
          ))}
          <span className="text-[9px] text-neutral-400">More</span>
        </div>
      </div>
    </div>
  );
}

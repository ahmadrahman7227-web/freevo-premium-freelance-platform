import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

import {
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const data = [
  {
    month: "Jan",
    revenue: 4200,
  },
  {
    month: "Feb",
    revenue: 6100,
  },
  {
    month: "Mar",
    revenue: 5600,
  },
  {
    month: "Apr",
    revenue: 8300,
  },
  {
    month: "May",
    revenue: 9800,
  },
  {
    month: "Jun",
    revenue: 12500,
  },
  {
    month: "Jul",
    revenue: 14800,
  },
];

const RevenueChart = () => {
  return (
    <div className="overflow-hidden rounded-[32px]">
      {/* HEADER */}
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        {/* LEFT */}
        <div>
          <div className="tag-blue inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold">
            <TrendingUp size={14} />

            Revenue Analytics
          </div>

          <h2 className="mt-6 text-5xl font-bold text-[#1F2937]">
            $14,800
          </h2>

          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#6B7280]">
            Track monthly revenue growth and monitor the performance of your
            freelance business through modern analytics.
          </p>
        </div>

        {/* RIGHT */}
        <div className="theme-card rounded-[28px] bg-white/60 p-6">
          <div className="flex items-center justify-between gap-10">
            <div>
              <p className="text-sm text-[#6B7280]">
                Growth
              </p>

              <h3 className="mt-3 text-3xl font-bold text-[#1F2937]">
                +18.2%
              </h3>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-[#84A98C] to-[#5E81AC] text-white shadow-lg">
              <ArrowUpRight size={22} />
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-white/70 p-4">
            <p className="text-sm text-[#6B7280]">
              Compared to last month revenue performance.
            </p>
          </div>
        </div>
      </div>

      {/* CHART */}
      <div className="mt-12 h-[340px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
            {/* GRADIENT */}
            <defs>
              <linearGradient
                id="revenueGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#84A98C"
                  stopOpacity={0.35}
                />

                <stop
                  offset="100%"
                  stopColor="#84A98C"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            {/* X AXIS */}
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#6B7280",
                fontSize: 13,
                fontWeight: 500,
              }}
            />

            {/* TOOLTIP */}
            <Tooltip
              contentStyle={{
                borderRadius: "20px",
                border: "1px solid rgba(0,0,0,0.05)",
                background: "rgba(255,255,255,0.95)",
                boxShadow:
                  "0 20px 50px rgba(15,23,42,0.08)",
                padding: "12px 16px",
              }}
              labelStyle={{
                color: "#1F2937",
                fontWeight: 600,
                marginBottom: 6,
              }}
              itemStyle={{
                color: "#84A98C",
                fontWeight: 500,
              }}
               formatter={(value) => [
  `$${Number(value).toLocaleString()}`,
  "Revenue",
]}
            />

            {/* AREA */}
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#84A98C"
              strokeWidth={4}
              fill="url(#revenueGradient)"
              dot={{
                r: 0,
              }}
              activeDot={{
                r: 7,
                stroke: "#ffffff",
                strokeWidth: 3,
                fill: "#84A98C",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
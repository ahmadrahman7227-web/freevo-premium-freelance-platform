import Skeleton from "../ui/Skeleton";

const DashboardSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* HERO */}
      <div className="overflow-hidden rounded-[40px] bg-gradient-to-br from-[#F4E7D3] via-[#F6EFE5] to-[#E8F0EA] p-10 lg:p-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-center">
          {/* LEFT */}
          <div>
            <Skeleton className="h-10 w-[220px] rounded-full" />

            <Skeleton className="mt-8 h-16 w-full max-w-[720px] rounded-[24px]" />

            <Skeleton className="mt-4 h-16 w-[85%] rounded-[24px]" />

            <Skeleton className="mt-8 h-6 w-full max-w-[620px] rounded-full" />

            <Skeleton className="mt-4 h-6 w-[75%] rounded-full" />

            {/* BUTTONS */}
            <div className="mt-10 flex gap-4">
              <Skeleton className="h-14 w-[180px] rounded-2xl" />

              <Skeleton className="h-14 w-[160px] rounded-2xl" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="theme-card rounded-[32px] bg-white/60 p-8">
            <Skeleton className="h-5 w-[140px] rounded-full" />

            <Skeleton className="mt-5 h-16 w-[180px] rounded-[24px]" />

            <div className="mt-10 flex flex-col gap-4">
              {[1, 2, 3].map((item) => (
                <Skeleton
                  key={item}
                  className="h-16 w-full rounded-2xl"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="theme-card overflow-hidden rounded-[32px] p-7"
          >
            <div className="flex items-start justify-between">
              {/* LEFT */}
              <div className="flex-1">
                <Skeleton className="h-8 w-[120px] rounded-full" />

                <Skeleton className="mt-7 h-14 w-[160px] rounded-[20px]" />

                <Skeleton className="mt-6 h-6 w-[140px] rounded-full" />
              </div>

              {/* ICON */}
              <Skeleton className="h-16 w-16 rounded-[24px]" />
            </div>
          </div>
        ))}
      </div>

      {/* ANALYTICS */}
      <div className="mt-8 grid gap-6 xl:grid-cols-[1.5fr_420px]">
        {/* CHART */}
        <div className="theme-card rounded-[32px] p-8">
          {/* HEADER */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex-1">
              <Skeleton className="h-8 w-[180px] rounded-full" />

              <Skeleton className="mt-6 h-14 w-[320px] rounded-[20px]" />

              <Skeleton className="mt-5 h-6 w-full max-w-[520px] rounded-full" />

              <Skeleton className="mt-3 h-6 w-[75%] rounded-full" />
            </div>

            <Skeleton className="h-12 w-[180px] rounded-2xl" />
          </div>

          {/* GRAPH */}
          <div className="mt-12 h-[320px] rounded-[32px] bg-white/40" />
        </div>

        {/* ACTIVITY */}
        <div className="theme-card rounded-[32px] p-8">
          <Skeleton className="h-12 w-[240px] rounded-[20px]" />

          <Skeleton className="mt-5 h-6 w-[85%] rounded-full" />

          {/* ITEMS */}
          <div className="mt-10 flex flex-col gap-5">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="rounded-[28px] bg-white/50 p-5"
              >
                <div className="flex gap-4">
                  <Skeleton className="h-12 w-12 rounded-2xl" />

                  <div className="flex-1">
                    <Skeleton className="h-5 w-[70%] rounded-full" />

                    <Skeleton className="mt-4 h-4 w-full rounded-full" />

                    <Skeleton className="mt-2 h-4 w-[80%] rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Skeleton className="mt-8 h-14 w-full rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;
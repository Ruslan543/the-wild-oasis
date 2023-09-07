import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { getBookings } from "../../services/apiBookings";
import { PAGE_SIZE } from "../../utils/constans";
import { useEffect } from "react";
import { useMemo } from "react";

export function useBookings() {
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("status");

  // const filter =
  //   !filterValue || filterValue === "all"
  //     ? null
  //     : { field: "status", value: filterValue };

  const filter = useMemo(
    () =>
      !filterValue || filterValue === "all"
        ? null
        : { field: "status", value: filterValue },
    [filterValue]
  );

  // SORT
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  // const sortBy = { field, direction };
  const sortBy = useMemo(
    () => ({
      field,
      direction,
    }),
    [field, direction]
  );

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // QUERY
  const {
    data = {},
    fetchNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["bookings", filter, sortBy, "pages"],
    queryFn: () => {
      return getBookings({ filter, sortBy, page });
    },
  });

  return { isLoading, bookings: data.pages, count: 24 };
  // return { isLoading, error, bookings, count };
}

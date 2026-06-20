// lib/queryKeys.ts
export const queryKeys = {
  bookings: {
    all: ["bookings"] as const,
    lists: () => [...queryKeys.bookings.all, "list"] as const,
    list: (filters: Record<string, unknown>) =>
      [...queryKeys.bookings.lists(), filters] as const,
    details: () => [...queryKeys.bookings.all, "detail"] as const,
    detail: (id: string) => [...queryKeys.bookings.details(), id] as const,
  },
  cabins: {
    all: ["cabins"] as const,
    lists: () => [...queryKeys.cabins.all, "list"] as const,
    list: (filters: Record<string, unknown>) =>
      [...queryKeys.cabins.lists(), filters] as const,
    details: () => [...queryKeys.cabins.all, "detail"] as const,
    detail: (id: string) => [...queryKeys.cabins.details(), id] as const,
  },
  guests: {
    all: ["guests"] as const,
    lists: () => [...queryKeys.guests.all, "list"] as const,
    list: (filters: Record<string, unknown>) =>
      [...queryKeys.guests.lists(), filters] as const,
    details: () => [...queryKeys.guests.all, "detail"] as const,
    detail: (id: string) => [...queryKeys.guests.details(), id] as const,
  },
  users: {
    all: ["users"] as const,
    lists: () => [...queryKeys.users.all, "list"] as const,
    list: (filters: Record<string, unknown>) =>
      [...queryKeys.users.lists(), filters] as const,
    details: () => [...queryKeys.users.all, "detail"] as const,
    detail: (id: string) => [...queryKeys.users.details(), id] as const,
  },
  appSettings: {
    all: ["app_settings"] as const,
    lists: () => [...queryKeys.appSettings.all, "list"] as const,
    list: (filters: Record<string, unknown>) =>
      [...queryKeys.appSettings.lists(), filters] as const,
    details: () => [...queryKeys.appSettings.all, "detail"] as const,
    detail: (id: number) => [...queryKeys.appSettings.details(), id] as const,
  },
};





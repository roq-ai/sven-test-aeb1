const mapping: Record<string, string> = {
  categories: 'category',
  organizations: 'organization',
  quotes: 'quote',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

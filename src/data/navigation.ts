export interface NavItem {
  label: string;
  target: string;
}

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: "Home", target: "home" },
  { label: "About Our Work", target: "about" },
  { label: "What We Build", target: "services" },
  { label: "Our Work", target: "work" },
  { label: "Contact", target: "contact" },
];

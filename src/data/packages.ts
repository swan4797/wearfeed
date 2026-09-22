import type { PackagesSection } from "../types/content";
import { servicePackages, serviceHref } from "./services";

// The landing packages section derives from services.ts — the single
// source of truth for packages and their services. Section-level copy
// (eyebrow, heading, lead) lives here; everything per-package comes from
// the service data, including the real /services/... links.
export const packages: PackagesSection = {
  eyebrow: "Services",
  heading: "Three packages. One responsibility.",
  lead: "Take one, take all three. If you know something's wrong but not what, start with the audit — it tells you which of the others you need.",
  packages: servicePackages.map((pkg) => ({
    price: pkg.price,
    cadence: pkg.cadence,
    title: pkg.title,
    body: pkg.cardBody,
    items: pkg.services.map((service) => ({
      label: service.title,
      href: serviceHref(pkg, service),
    })),
  })),
};

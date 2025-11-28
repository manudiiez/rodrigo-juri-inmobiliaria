import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Plugin de next-intl apuntando a la configuración de routing
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
};

export default withNextIntl(nextConfig);

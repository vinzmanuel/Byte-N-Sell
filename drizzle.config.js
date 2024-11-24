import { defineConfig } from "drizzle-kit";

export default defineConfig({
    out: "./drizzle",
    schema: "./configs/schema.js",
    dialect: "postgresql",
    dbCredentials: {
        url: 'postgresql://Byte-N-Sell%20db_owner:8m9RSJgPazHE@ep-bitter-surf-a12x2s6h.ap-southeast-1.aws.neon.tech/Byte-N-Sell%20db?sslmode=require'
    }
});
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
};

export default withFlowbiteReact(nextConfig);
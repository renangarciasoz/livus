export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const { NODE_ENV } = process.env;

export const IS_DEVELOPMENT = NODE_ENV === `development`;
export const IS_PRODUCTION = NODE_ENV === `production`;

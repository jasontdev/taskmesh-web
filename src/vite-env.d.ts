/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AD_TENANT_ID: string;
  readonly VITE_AD_CLIENT_ID: string;
  readonly VITE_AD_REDIRECT_URI: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly NODE_API_URI: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
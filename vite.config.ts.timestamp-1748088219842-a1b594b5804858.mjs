// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
console.log("API VITE", import.meta?.env?.VITE_NODE_API_URI);
var vite_config_default = defineConfig({
  plugins: [react()],
  build: {
    outDir: "build"
    // Change 'dist' to 'build'
  },
  server: {
    // port: 5173,
    proxy: {
      "/public": import.meta?.env?.VITE_NODE_API_URI ?? "http://193.203.161.59",
      "/api": import.meta?.env?.VITE_NODE_API_URI ?? "http://193.203.161.59"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuXG5jb25zb2xlLmxvZygnQVBJIFZJVEUnLCBpbXBvcnQubWV0YT8uZW52Py5WSVRFX05PREVfQVBJX1VSSSk7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiAnYnVpbGQnLCAvLyBDaGFuZ2UgJ2Rpc3QnIHRvICdidWlsZCdcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgLy8gcG9ydDogNTE3MyxcbiAgICBwcm94eToge1xuICAgICAgJy9wdWJsaWMnOiBpbXBvcnQubWV0YT8uZW52Py5WSVRFX05PREVfQVBJX1VSSSA/PyAnaHR0cDovLzE5My4yMDMuMTYxLjU5JyxcbiAgICAgICcvYXBpJzogaW1wb3J0Lm1ldGE/LmVudj8uVklURV9OT0RFX0FQSV9VUkkgPz8gJ2h0dHA6Ly8xOTMuMjAzLjE2MS41OScsXG4gICAgfVxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sU0FBUyxvQkFBNkI7QUFDL1AsT0FBTyxXQUFXO0FBRWxCLFFBQVEsSUFBSSxZQUFZLGFBQWEsS0FBSyxpQkFBaUI7QUFHM0QsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFFBQVE7QUFBQTtBQUFBLElBRU4sT0FBTztBQUFBLE1BQ0wsV0FBVyxhQUFhLEtBQUsscUJBQXFCO0FBQUEsTUFDbEQsUUFBUSxhQUFhLEtBQUsscUJBQXFCO0FBQUEsSUFDakQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

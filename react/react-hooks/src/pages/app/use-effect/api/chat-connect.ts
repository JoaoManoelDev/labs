export function createConnection(serverUrl: string, roomId: string) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log(`✅ Conectando da sala ${roomId} na URL ${serverUrl}`)
    },
    disconnect() {
      console.log(`❌ Desconectado da sala ${roomId} na URL ${serverUrl}`)
    }
  }
}

import { useEffect, useState } from "react"
import { createConnection } from "../api/chat-connect"

interface ChatRoomProps {
  roomId: string
}

export const ChatRoom = ({ roomId }: ChatRoomProps) => {
  const [serverUrl, setServerUrl] = useState('https://localhost:3000')

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId)
    connection.connect()

    return () => {
      connection.disconnect()
    }
  }, [roomId, serverUrl])

  return (
    <>
      <h1 className="text-2xl font-bold">Bem-vindo a sala <span className="text-sky-500">{roomId}</span></h1>
    
      <label className="text-2xl font-bold">
        Servidor URL:{' '}
        <input
          value={serverUrl}
          onChange={e => setServerUrl(e.target.value)}
          className="font-normal"
        />
      </label>
    </>
  )
}
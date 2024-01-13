import { useState } from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ChatRoom } from "./components/chat-room"

export const ChatServer = () => {
  const [roomId, setRoomId] = useState("geral")
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div>
        <Select
          value={roomId}
          onValueChange={setRoomId}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Selecione um gênero" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Gêneros</SelectLabel>
              <SelectItem value="geral">Geral</SelectItem>
              <SelectItem value="jogos">Jogos</SelectItem>
              <SelectItem value="filmes">Filmes</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Button onClick={() => setIsOpen(!isOpen)} className="w-[200px]">
        {isOpen ? "Fechar chat" : "Abrir chat"}
      </Button>

      {isOpen && <ChatRoom roomId={roomId} />}
    </>
  )
}

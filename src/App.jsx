import "./App.css"
import { Flex } from "@chakra-ui/react"
import TodoList from "./components/TodoList/TodoList"

function App() {
  return (
    <Flex height={"100vh"} justify={"center"} align={"center"}>
      <TodoList />
    </Flex>
  )
}

export default App

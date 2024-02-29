import { Flex, Input, InputGroup, List, ListItem, Text } from "@chakra-ui/react"
import { useState } from "react"

const TodoList = () => {
  const [content, setContent] = useState("")
  const [tasks, setTasks] = useState([])

  const handleChange = (e) => {
    const { value } = e.target
    setContent(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTasks([...tasks, content])
    setContent("")
  }

  return (
    <Flex flexDir={"column"} gap={"20px"}>
      <Text fontSize={"2em"} textAlign={"center"} as={"h1"}>
        Todo List
      </Text>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            placeholder="want some tuna?"
            value={content}
            type="text"
            onChange={handleChange}
          />
        </InputGroup>
      </form>
      <Flex>
        <List>
          {tasks.map((task, index) => {
            return <ListItem key={`task-${index}`}>{task}</ListItem>
          })}
        </List>
      </Flex>
    </Flex>
  )
}

export default TodoList

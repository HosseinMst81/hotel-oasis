import { Button } from '../../primitives'

const Test = () => {
  return (
    <div>
        <Button rounded='full' size='base' colorScheme='primary'>CLick</Button>
        <Button rounded='full' size='lg' colorScheme='secondary'>CLick</Button>
        <Button rounded='full' size='xl' colorScheme='dark'>CLick</Button>
        <Button rounded='full' size='xs' colorScheme='light'>CLick</Button>
        <Button rounded='full' size='base' colorScheme='foreground'>CLick</Button>
        <Button rounded='full' size='sm' colorScheme='info'>CLick</Button>
        <Button rounded='full' size='base' colorScheme='error'>CLick</Button>
        <Button rounded='full' size='base' colorScheme='success'>CLick</Button>
    </div>
  )
}

export default Test
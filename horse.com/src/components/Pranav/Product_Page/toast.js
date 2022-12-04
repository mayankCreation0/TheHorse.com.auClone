import { useToast } from "@chakra-ui/react"
import { Wrap } from "@chakra-ui/react"
import { WrapItem } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"

export default function ToastStatusExample() {
    const toast = useToast()
    const statuses = ['success', 'error', 'warning', 'info']
  
    return (
      <Wrap>
        {statuses.map((status, i) => (
          <WrapItem key={i}>
            <Button
              onClick={() =>
                toast({
                  title: `${status} toast`,
                  status: status,
                  isClosable: true,
                })
              }
            >
              Show {status} toast
            </Button>
          </WrapItem>
        ))}
      </Wrap>
    )
  }
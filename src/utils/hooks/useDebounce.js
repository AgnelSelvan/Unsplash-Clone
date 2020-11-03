import { useState } from 'react'

export default function useDebounce() {
    const [typingTimeout, setTypingTimeout] = useState("")
  function deBounce(func, wait=1000) {
    clearTimeout(typingTimeout)
    const timeout = setInterval(() => 

      func()
    , wait);
    setTypingTimeout(timeout);
  }
  return deBounce;
}

import { useRef, useState } from "react";

export function useToast() {
  const [toast, setToast] = useState("");
  const timer = useRef(null);

  function notify(message) {
    setToast(message);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setToast(""), 2600);
  }

  return { toast, notify };
}

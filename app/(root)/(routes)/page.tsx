'use client'

import { useEffect } from "react";

import { useStoreModal } from "@/hooks/useStoreModal";


const Setup = () => {

    const onOpen = useStoreModal((state) => state.onOpen);
    const isOpen = useStoreModal((state) => state.isOpen);

    useEffect(() => {
      if (!isOpen) {
        onOpen();
      }
    }, [isOpen, onOpen]);
  
    return null;
};


export default Setup;
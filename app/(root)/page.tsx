'use client'

import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

const Setup = () => {
    return(
      <div className="p-4">
        <Modal title="Test" description="Test" isOpen onClose={()=>{}}>
          Test
        </Modal>
      </div>
    )
}

export default Setup;
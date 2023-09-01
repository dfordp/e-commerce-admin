import { UserButton } from "@clerk/nextjs";

const Setup = () => {
    return(
      <div>
        <UserButton afterSignOutUrl="/"/>
      </div>
    )
}

export default Setup;
import React from 'react'
import BlockedUsers from '../../Components/Admin/Blockedusers/Blockedusers'
import Navbaradmin from '../../Components/Admin/AdminNav/Navbaradmin'

function Blockuserlistpage() {
  return (
    <div>
      <Navbaradmin/>
      <BlockedUsers/>
    </div>
  )
}

export default Blockuserlistpage

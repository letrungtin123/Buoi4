import { ArrowIcon } from "../icons/arrow-icon"
import { Button } from "../components/buttons/button"
import { EButtonVariant } from "../types/enum.type"
import { UserIconSolid } from "../icons/user-icon"

const Header = () => {
  return (
    
    <div className="w-full py-10 px-10 bg-red-500 flex items-center gap-10">
      <div className='flex items-center justify-between px-10 py-5 border-b shadow-md border-b-black'>
      <Button className='w-fit rounded-[10px] px-2' variant={EButtonVariant.PRIMARY} icon={<UserIconSolid />}>
        User ABC
        <ArrowIcon />
      </Button>
    </div>
      <a href="/" className="cursor-pointer ">Dashboard</a>
      <a href="/add-product" className="cursor-pointer ">Thêm user</a>
      <a href="/edit-product" className="cursor-pointer ">Edit user</a>
      <a href="/login" className="cursor-pointer ">Login</a>
    </div>
  )
}

export default Header
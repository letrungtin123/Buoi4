
const Header = () => {
  return (
    <div className="w-full py-10 px-10 bg-red-500 flex items-center gap-10">
      <a href="/" className="cursor-pointer ">Dashboard</a>
      <a href="/add-product" className="cursor-pointer ">Thêm user</a>
      <a href="/edit-product" className="cursor-pointer ">Edit user</a>
      <a href="/login" className="cursor-pointer ">Login</a>
    </div>
  )
}

export default Header
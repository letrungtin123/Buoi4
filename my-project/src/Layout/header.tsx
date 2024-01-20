
const Header = () => {
  return (
    <div className="w-full py-10 px-10 bg-orange-300 flex items-center gap-10">
      <a href="/" className="cursor-pointer ">Danh sách sản phẩm</a>
      <a href="/add-product" className="cursor-pointer ">About us</a>
      <a href="/edit-product" className="cursor-pointer ">What's new</a>
    </div>
  )
}

export default Header
import Content from './components/content'
import Footer from './components/footer'
import Header from './components/header'

const LayoutDefault = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}
export default LayoutDefault

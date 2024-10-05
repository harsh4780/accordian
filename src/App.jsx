

import Faq from './components/Faq'
import VerticalTestimonialSlider from './components/VerticalTestimonialSlider'
function App() {

  return (
    <div className="w-full flex items-center flex-col justify-center h-screen bg-gradient-to-r from-indigo-500 to-blue-600">
    <div className="p-4 flex justify-center"> 
      <Faq/>
    </div>
      <VerticalTestimonialSlider />
    </div>
  )
}

export default App

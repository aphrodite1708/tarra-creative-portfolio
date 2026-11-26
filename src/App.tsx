import HomeArchive from './components/HomeArchive'
import CustomCursor from './components/CustomCursor'
import ContentProtection from './components/ContentProtection'

export default function App() {
  return (
    <div className="app">
      <ContentProtection />
      <CustomCursor />
      <HomeArchive />
    </div>
  )
}

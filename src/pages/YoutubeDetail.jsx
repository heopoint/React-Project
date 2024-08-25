
import Layout from '../components/Layout'
import {useParams} from 'react-router-dom'

function YoutubeDetail() {
  // const obj=useParams()
  // console.log(obj)
  const {id}=useParams()
  return (
   
    <Layout title={"YoutubeDetail"}>

      <p>{`YoutubeDetail Page Content${id}`}</p>
    </Layout>
  )
}

export default YoutubeDetail
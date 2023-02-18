import Head from 'next/head'
import { HomeTemplate } from '@/src/components'

export default function Home() {
  
  const data = [{"_id":"628aa531cfe289001693fbe6","firstName":"Tremaine","lastName":"Mohr.","email":"Lizeth_Rutherford@hotmail.com","phone":"5509019809","createdAt":"2022-05-22T21:03:45.336Z","updatedAt":"2023-02-15T22:01:09.669Z","__v":0,"id":"628aa531cfe289001693fbe6"},{"_id":"628aa531cfe289001693fbe7","firstName":"Alizee","lastName":"Carroll","email":"Ferne_Rath@gmail.com","phone":"8591337936","createdAt":"2022-05-22T21:03:45.338Z","updatedAt":"2023-02-15T22:00:58.789Z","__v":0,"id":"628aa531cfe289001693fbe7"},{"_id":"628aa531cfe289001693fbed","firstName":"Ansley","lastName":"Walter","email":"Jamison43@yahoo.com","phone":"2104226493","createdAt":"2022-05-22T21:03:45.348Z","updatedAt":"2023-02-13T22:22:31.288Z","__v":0,"id":"628aa531cfe289001693fbed"},{"_id":"628aa531cfe289001693fbea","firstName":"Eden","lastName":"Collier","email":"Kira.Skiles@yahoo.com","phone":"6999659391","createdAt":"2022-05-22T21:03:45.343Z","updatedAt":"2023-02-13T22:21:09.796Z","__v":0,"id":"628aa531cfe289001693fbea"},{"_id":"628aa531cfe289001693fbee","firstName":"Demetris","lastName":"Hermiston","email":"Van20@gmail.com","phone":"7249817900","createdAt":"2022-05-22T21:03:45.350Z","updatedAt":"2023-02-13T22:24:03.964Z","__v":0,"id":"628aa531cfe289001693fbee"},{"_id":"628aa531cfe289001693fbf0","firstName":"Carloss","lastName":"O'Connell","email":"Graciela91@gmail.com","phone":"0789031447","createdAt":"2022-05-22T21:03:45.353Z","updatedAt":"2023-02-13T22:30:30.325Z","__v":0,"id":"628aa531cfe289001693fbf0"},{"_id":"628aa531cfe289001693fbf1","firstName":"Laceyy","lastName":"Schmeler","email":"Ulises.Prohaska93@hotmail.com","phone":"6047353938","createdAt":"2022-05-22T21:03:45.355Z","updatedAt":"2023-02-14T00:05:37.153Z","__v":0,"id":"628aa531cfe289001693fbf1"},{"_id":"628aa531cfe289001693fbfc","firstName":"Davion","lastName":"Brekke","email":"Zack13@yahoo.com","phone":"0117865154","createdAt":"2022-05-22T21:03:45.374Z","updatedAt":"2022-05-22T21:03:45.374Z","__v":0,"id":"628aa531cfe289001693fbfc"},{"_id":"628aa531cfe289001693fbfa","firstName":"Montana","lastName":"Larson","email":"Deanna97@hotmail.com","phone":"0951660989","createdAt":"2022-05-22T21:03:45.371Z","updatedAt":"2022-05-22T21:03:45.371Z","__v":0,"id":"628aa531cfe289001693fbfa"},{"_id":"628aa531cfe289001693fbf8","firstName":"Rhettt","lastName":"Grimes","email":"Kathryn.Ankunding@hotmail.com","phone":"6555209562","createdAt":"2022-05-22T21:03:45.369Z","updatedAt":"2023-02-14T13:08:10.355Z","__v":0,"id":"628aa531cfe289001693fbf8"}]
  
  return (
    <>
      <Head>
        <title>Test Backbone</title>
      </Head>
      <HomeTemplate data={data}/>
    </>
  )
}

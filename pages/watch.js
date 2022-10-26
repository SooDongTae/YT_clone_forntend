import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Content from '../components/Content'
import Header from '../components/Header'
import WatchHeader from '../components/watchHeader'

const Watch = () => {
  const router = useRouter();
  const [data, setData] = useState({});
  console.log(router);
  const id = router.query.id;
  useEffect(() => {
    axios.get(`http://10.150.151.12:8000/getonevideo?id=${id}`)
    .then(res => {
      setData(res.data.data[0]);
      console.log(res.data);
    })
  }, [id]);
  return (
    <div>
      <Content data={data} />
    </div>
  )
}

export default Watch
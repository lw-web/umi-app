import { FC, useEffect, useState } from 'react'
import styles from './index.less';
import { connect, ConnectProps, IndexModelState, useSelector } from 'umi'

interface PageProps extends ConnectProps {
  index: IndexModelState
}

interface Item {
  name: string
  age: number
}

const IndexPage: FC<PageProps> = ({index, dispatch}) => {
  const { test } = index
  console.log(test)
  const [list, setList] = useState<Item[]>([])
  useEffect(() => {
    const list = [
      { name: 'zhans', age: 20 }
    ]
    setList(list)
  },[])
  return (
    <div>
      <h1 className={styles.title}>Page about/index</h1>
      <ul>
        {list.map(item => (
          <li key={item.name}>{item.name}--{item.age}</li>
        ))}
      </ul>
    </div>
  );
}
const mapState = ({ index }: {index: IndexModelState}) => ({ index })
export default connect(mapState)(IndexPage)

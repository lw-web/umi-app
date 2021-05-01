import { FC, useEffect } from 'react';
import { connect, AboutModelState, ConnectProps, Dispatch, History } from 'umi'
import styles from './index.less';
import { Button } from 'antd'

interface PageProps extends ConnectProps {
  about: AboutModelState,
  add: () => {}
  minus: () => {}
  query: () => {}
  history: History
}

const IndexPage: FC<PageProps> = ({ about, add, minus, query, history }) => {
  const { test, num } = about
  useEffect(() => {
    query()
  }, [])
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <h1>{test}</h1>
      <h1>{num}</h1>
      <Button type="primary" onClick={add}>++++</Button>
      <Button type="primary" onClick={minus}>----</Button>
      <Button type="link" onClick={() => { history.push('/about') }}>about</Button>
    </div>
  );
}

const mapState = ({ about }: { about: AboutModelState }) => ({ about })
const mapDispatch = (dispatch: Dispatch) => ({
  add: () => dispatch({ type: 'about/add' }),
  minus: () => dispatch({ type: 'about/minus' }),
  query: () => dispatch({ type: 'about/query' })
})

export default connect(mapState, mapDispatch)(IndexPage)

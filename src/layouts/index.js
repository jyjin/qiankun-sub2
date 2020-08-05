import styles from './index.less';
import { Link, history, qiankunStart } from 'umi';


function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title1}>
        <Link to="/list">list页面</Link>
        <Link to="/admin">admin页面</Link>
      </h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;

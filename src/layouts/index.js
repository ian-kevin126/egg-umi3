import styles from './index.css';
import { ErrorBoundary, MenuBar } from '@/components';
import { useLocation } from 'umi';
import { StoreProvider } from 'think-react-store';
import * as store from '../stores';

function BasicLayout(props) {
  const location = useLocation();
  const paths = ['/', '/order', '/user'];

  return (
    <StoreProvider store={store}>
      <MenuBar
        // 当前url路径包含paths中的路径，就显示底部导航栏
        show={paths.includes(location.pathname)}
        pathname={location.pathname}
      />
      <ErrorBoundary>
      {props.children}
      </ErrorBoundary>
    </StoreProvider>
  );
}

export default BasicLayout;

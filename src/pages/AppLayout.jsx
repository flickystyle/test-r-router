import { useAuth } from '../hooks/useAuth';
import Map from '../components/Map';
import Sidebar from '../components/Sidebar';
import styles from './AppLayout.module.css';
import User from '../components/User';

function AppLayout() {
    const { user } = useAuth();

    return (
        <div className={styles.app}>
            <Sidebar />
            <Map />
            {user && <User />}
        </div>
    );
}

export default AppLayout;

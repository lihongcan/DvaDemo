import { Menu, Icon } from 'antd';
import {connect} from 'dva'
import styles from './MainPage.css'
import MainMenu from '../components/MainMenu'

const MainPage=({dispatch})=>{
	return(
	<div>
		<MainMenu />
		<div className={styles.div1}>
		</div>
		<div className={styles.imgdiv}>
		</div>
		<div className={styles.div3}>
		</div>
		
	</div>
	);
}
export default MainPage;
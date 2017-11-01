import { Menu, Icon } from 'antd';
import {connect} from 'dva'
import styles from './MainPage.css'
const MainPage=({dispatch})=>{
	return(
		
		
			<Menu mode='horizontal' theme='dark' className={styles.menu}>
				<Menu.Item key='menu1'>
				<Icon type='bars'/>Navigation one </Menu.Item>
				<Menu.Item key='menu2'>Navigation two </Menu.Item>
				<Menu.Item key='menu3'>Navigation three </Menu.Item>
				
			</Menu>
		
	);
}
export default MainPage;
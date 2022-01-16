import {Component} from "react";
import styles from './index.module.less';
import {LoginForm} from "../../components/login-form/login-form";


export class Login extends Component{



  render(){
    return (<div className={styles.container}>
      <LoginForm></LoginForm>
    </div>);
  }
}

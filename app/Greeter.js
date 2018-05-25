import React, { Component } from 'react'
import config from './config.json';
import styles from './Greeter.css';//导入

class Greeter extends Component {
  render() {
    return (
      <div className={styles.root}>
        {config.greetText}
        <div className={styles.test}>测试自dong添加德阿的前缀</div>
      </div>
    );
  }
}

export default Greeter
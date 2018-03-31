import React, {Component} from 'react';
import config from '../config.json';
import styles from './Greeter.css';

class Greeter extends Component {
  render() {
    return (
      <div className={styles.root}>
        {config.greetText}
        <div>xxsfssf23afsfasfasdfds</div>
      </div>
    )
  }
}

export default Greeter;
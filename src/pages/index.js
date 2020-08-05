import React from 'react';
import styles from './index.less';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
const addEmoji = () => {

}

export default () => {
  
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Picker set='apple' />
      <Picker onSelect={addEmoji} />
      <Picker title='Pick your emoji…' emoji='point_up' />
      <Picker style={{ position: 'absolute', bottom: '20px', right: '20px' }} />
      <Picker i18n={{ search: 'Recherche', categories: { search: 'Résultats de recherche', recent: 'Récents' } }} />
    </div>
  );
}

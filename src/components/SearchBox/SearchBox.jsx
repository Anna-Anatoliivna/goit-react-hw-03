import styles from './SearchBox.module.css'

export const SearchBox = () => {
  return (
      <div className={styles.box}>
          <span className={styles.text}>Find contactys by name</span>
          <input type="text"
        // value={filterValue}
        // onChange={handleFilter}
          />
    </div>
  )
}
 
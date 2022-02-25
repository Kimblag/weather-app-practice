import styles from "./LabelTemp.module.css"

//para no repetir codigo arriba creo componente que reutilizo.
export default function LabelTemp ({label, value}){
    return (
    <div className={styles.labelTemp}>
    <label>{label}</label>
    <span>{value}</span>
  </div>
  )
  }
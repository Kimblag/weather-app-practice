//para no repetir codigo arriba creo componente que reutilizo.
export default function LabelTemp ({label, value}){
    return (
    <div>
    <label>{label}</label>
    <span>{value}</span>
  </div>
  )
  }
export const ButtonComponent = (props:any)=>{
  return <a
    className={`button ${props.buttonType}`}
    href={''}
    onClick={props.onClick}
  >{props.label}</a>
}
